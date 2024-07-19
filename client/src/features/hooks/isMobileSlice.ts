import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IsMobileState {
  isMobile: boolean;
}

// 브라우저 환경에서만 window 객체를 사용할 수 있으므로 조건부로 초기값 설정
const initialState: IsMobileState = {
  isMobile: typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
};

export const isMobileSlice = createSlice({
  name: 'isMobile',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    }
  }
});

export const { setIsMobile } = isMobileSlice.actions;

export const selectIsMobile = (state: { isMobile: IsMobileState }) => state.isMobile.isMobile;

export default isMobileSlice.reducer;
