import { createSlice } from "@reduxjs/toolkit";

export interface HowWeWorkState {
  content: object | null;
}
const initialState: HowWeWorkState = {
  content: null
};

export const howWeWorkSlice = createSlice({
  name: "how-we-work",
  initialState,
  reducers: {
    getHowWeWork(state, action) {
      state.content = action.payload;
    }
  }
});

export const { getHowWeWork } = howWeWorkSlice.actions;
export default howWeWorkSlice.reducer;
