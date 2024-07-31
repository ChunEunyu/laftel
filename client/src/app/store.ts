import { configureStore } from '@reduxjs/toolkit';
import clickReducer from '@/features/nav/clickSlice';
import clickedTagsReducer from '@/features/finder/clickedTagsSlice';
import animeModalReducer from '@/features/modal/animeModalSlice';

export const store = configureStore({
    reducer: {
        click: clickReducer,
        clickedTags: clickedTagsReducer,
        animeModal: animeModalReducer, 
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch