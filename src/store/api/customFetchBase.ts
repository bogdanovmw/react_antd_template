import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { url } from '../../config/config';

// create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem('*');

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();

    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();

            try {
                const refreshToken = localStorage.getItem('_');
                //const { refreshToken, role } = (api.getState() as RootState).auth;
                if (refreshToken) {
                    const refreshResult: any = await baseQuery(
                        { url: '/api/auth/refresh', method: 'POST', body: { refreshToken: refreshToken } },
                        api,
                        extraOptions,
                    );

                    if (refreshResult.data) {
                        localStorage.setItem('*', refreshResult.data.data.accessToken);
                        localStorage.setItem('_', refreshResult.data.data.refreshToken);

                        result = await baseQuery(args, api, extraOptions);
                    } else {
                        window.location.href = '/';
                        localStorage.clear();
                    }
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();

            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    refetchOnFocus: true,
    endpoints: (builder) => ({}),
});
