import { RootState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryString {
    value: string
}

const initialState: QueryString = {
    value: ''
}

const finderSlice = createSlice({
    name: 'finderQuery',
    initialState,
    reducers: {
        query: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { query } = finderSlice.actions;
export const selectQuery = (state: RootState ) => state.query.value;

export default finderSlice.reducer;

export type { QueryString };