import { apiSlice } from './customFetchBase';

const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Data'] });

export const dataApi = apiWithTag.injectEndpoints({
    endpoints: (build) => ({
        findAllData: build.query<any, void>({
            query: () => ({
                url: ``,
                method: 'GET',
            }),
            providesTags: ['Data'],
        }),
        saveData: build.mutation<any, any>({
            query: (data) => ({
                url: ``,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Data'],
        }),
    }),
});

export const {} = dataApi;
