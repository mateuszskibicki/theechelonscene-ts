import { createSlice } from "@reduxjs/toolkit";

export interface FounderState {
  content: object | null;
}
const initialState: FounderState = {
  content: null
};

export const founderSlice = createSlice({
  name: "founder",
  initialState,
  reducers: {
    setFounder(state, action) {
      state.content = action.payload;
    }
  }
});

export const { setFounder } = founderSlice.actions;
export default founderSlice.reducer;
