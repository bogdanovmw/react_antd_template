import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IData {
    modalAdmin: boolean;
    data: any;
}

const initialState: IData = {
    modalAdmin: false,
    data: [],
};

export const modalAdminSlice = createSlice({
    name: 'modalAdminSlice',
    initialState,
    reducers: {
        changeModalAdmin(state, action: PayloadAction<boolean>) {
            state.modalAdmin = action.payload;
        },
        changeData(state, action: PayloadAction<any>) {
            state.data = action.payload;
        },
    },
});

export const modalAdminSliceActions = modalAdminSlice.actions;
export const modalAdminSliceReducer = modalAdminSlice.reducer;
