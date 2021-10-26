import {createSlice} from '@reduxjs/toolkit';
import {fetchCarousel} from './FetchCarouselThank';
import {ICarouselList} from '../../api/types/ICarousel';

const initialState: ICarouselList = {
    items: [],
    total: 0,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
}

export const CarouselSlice = createSlice({
    name: 'carousel',
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
        builder.addCase(fetchCarousel.fulfilled, (state, {payload}) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.items = payload.items;
            state.total = payload.total;
        })
        builder.addCase(fetchCarousel.pending, (state, action) => {
            state.isFetching = true;
        })
        builder.addCase(fetchCarousel.rejected, (state, action) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.error.message;
        })
    }
})
