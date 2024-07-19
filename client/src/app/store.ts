import { configureStore } from '@reduxjs/toolkit';
import clickReducer from '@/features/nav/clickSlice';
import isMobileReducer from '@/features/hooks/isMobileSlice';

export const store = configureStore({
    reducer: {
        click: clickReducer,
        isMobile: isMobileReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch