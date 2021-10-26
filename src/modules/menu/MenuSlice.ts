import {createSlice} from '@reduxjs/toolkit';
import {fetchMenu} from './FetchMenuThank';
import {IMenuList} from '../../api/types/IMenu';

const initialState: IMenuList = {
    items: [],
    total: 0,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
}

export const MenuSlice = createSlice({
    name: 'menu',
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
        builder.addCase(fetchMenu.fulfilled, (state, {payload}) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.items = payload.items;
            state.total = payload.total;
        })
        builder.addCase(fetchMenu.pending, (state, action) => {
            state.isFetching = true;
        })
        builder.addCase(fetchMenu.rejected, (state, action) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.error.message;
        })
    }
})
