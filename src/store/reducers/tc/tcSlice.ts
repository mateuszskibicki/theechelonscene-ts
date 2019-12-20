import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
  content: object | null;
}
const initialState: LoadingState = {
  content: null
};

export const tcSlice = createSlice({
  name: "tc",
  initialState,
  reducers: {
    getTC(state, action) {
      state.content = action.payload;
    }
  }
});

export const { getTC } = tcSlice.actions;
export default tcSlice.reducer;
