import { createSlice } from '@reduxjs/toolkit';

const clickedTagsSlice = createSlice({
    name: 'clickedTags',
    initialState: {},
    reducers: {
        setClickedTags: (state, action) => {
            return action.payload;
        },
    },
});

export const { setClickedTags } = clickedTagsSlice.actions;
// export const selectClickTags = (state: { clickedTags }) => state.clickedTags.

export default clickedTagsSlice.reducer;