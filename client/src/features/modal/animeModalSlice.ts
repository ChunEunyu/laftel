import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import type { PayloadAction } from '@reduxjs/toolkit'

interface AnimeModalState {
    value: boolean,
    id: number,
}

const initialState: AnimeModalState = {
    value: false,
    id: 0,
}

export const animeModalSlice = createSlice({
    name: 'animeModal',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
        setToggle: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
        animeId: (state, action: PayloadAction<number>) => {
            state.id = action.payload
        }
    }
})

export const { toggle, setToggle, animeId } = animeModalSlice.actions;

export const selectToggle = (state: RootState) => state.animeModal.value;
export const selectId = (state: RootState) => state.animeModal.id;

export default animeModalSlice.reducer;

export type { AnimeModalState };