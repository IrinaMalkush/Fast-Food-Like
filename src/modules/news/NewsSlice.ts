import {createSlice} from '@reduxjs/toolkit';
import {fetchNews} from './FetchNewsThunk';
import {INewsList} from '../../api/types/INew';

const initialState: INewsList = {
    items: [],
    total: 0,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
}

export const NewsSlice = createSlice({
    name: 'news',
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
        builder.addCase(fetchNews.fulfilled, (state, {payload}) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.items = payload.items;
            state.total = payload.total;
        })
        builder.addCase(fetchNews.pending, (state, action) => {
            state.isFetching = true;
        })
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.error.message;
        })
    }
})
