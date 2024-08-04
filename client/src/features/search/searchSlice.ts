import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import type { PayloadAction } from '@reduxjs/toolkit'
import _ from "lodash";

interface SearchState {
    value: string,
}

const initialState: SearchState = {
    value: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        keyword: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    }
})

export const { keyword } = searchSlice.actions;

export const selectKeyword = (state: RootState) => state.search.value;

export default searchSlice.reducer;

export type { SearchState };
