import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

export interface ClickState {
    clickSearch: boolean;
    clickHamburger: boolean;
}

const initialState: ClickState = {
    clickSearch: false,
    clickHamburger: false,
}

export const clickSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        toggleClickSearch: (state) => {
            state.clickSearch = !state.clickSearch;
        },
        toggleClickHamburger: (state) => {
            state.clickHamburger = !state.clickHamburger;
        },
        setClickSearch: (state, action: PayloadAction<boolean>) => {
            state.clickSearch = action.payload;
        },
        setClickHamburger: (state, action: PayloadAction<boolean>) => {
            state.clickHamburger = action.payload;
        },
    },
});

export const {
    toggleClickSearch,
    toggleClickHamburger,
    setClickSearch,
    setClickHamburger,
} = clickSlice.actions;

export const selectClickSearch = (state: RootState) => state.click.clickSearch;
export const selectClickHamburger = (state: RootState) => state.click.clickHamburger;

export default clickSlice.reducer;
