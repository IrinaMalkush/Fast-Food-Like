import {createSlice} from '@reduxjs/toolkit';
import {fetchMenuParts} from './FetchMenuPartsThunk';
import {IMenuParts} from '../../api/types/IMenuParts';

const initialState: IMenuParts = {
    items: [],
    total: 0,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
}

export const MenuPartSlice = createSlice({
    name: 'menuParts',
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchMenuParts.fulfilled, (state, {payload}) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.items = payload.items;
            state.total = payload.total;
        })
        builder.addCase(fetchMenuParts.pending, (state, action) => {
            state.isFetching = true;
        })
        builder.addCase(fetchMenuParts.rejected, (state, action) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.error.message;
        })
    }
})
