import { createSlice } from "@reduxjs/toolkit";

export interface PressSlice {
  content: object | null;
}
const initialState: PressSlice = {
  content: null
};

export const pressSlice = createSlice({
  name: "press",
  initialState,
  reducers: {
    setPress(state, action) {
      state.content = action.payload;
    }
  }
});

export const { setPress } = pressSlice.actions;
export default pressSlice.reducer;
