import {configureStore} from '@reduxjs/toolkit';
import {NewsSlice} from '../../modules/news/NewsSlice';
import {CarouselSlice} from '../../modules/carousel/CarouselSlice';
import {MenuSlice} from '../../modules/menu/MenuSlice';
import {MenuPartSlice} from '../../modules/menuParts/MenuPartsSlice';

export const store = configureStore({
    reducer: {
        news: NewsSlice.reducer,
        carousel: CarouselSlice.reducer,
        menu: MenuSlice.reducer,
        menuParts: MenuPartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: true
    }),
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
