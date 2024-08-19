import { configureStore } from '@reduxjs/toolkit';
import clickReducer from '@/features/nav/clickSlice';
import finderQueryReducer from '@/features/finder/finderSlice';
import animeModalReducer from '@/features/modal/animeModalSlice';
import searchReducer from '@/features/search/searchSlice';

export const store = configureStore({
    reducer: {
        click: clickReducer,
        query: finderQueryReducer,
        animeModal: animeModalReducer, 
        search: searchReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch