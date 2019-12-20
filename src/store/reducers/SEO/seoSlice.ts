import { createSlice } from "@reduxjs/toolkit";

export const seoSlice = createSlice({
  name: "seo",
  initialState: { current: null },
  reducers: {
    setSEO(state, action) {
      state.current = { ...action.payload };
    }
  }
});

export const { setSEO } = seoSlice.actions;
export default seoSlice.reducer;
