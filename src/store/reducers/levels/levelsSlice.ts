import { createSlice } from "@reduxjs/toolkit";

export interface LevelsSlice {
  levels: object | null;
}
const initialState: LevelsSlice = {
  levels: null
};

export const levelsSlice = createSlice({
  name: "levels",
  initialState,
  reducers: {
    getLevels(state, action) {
      state.levels = action.payload;
    }
  }
});

export const { getLevels } = levelsSlice.actions;
export default levelsSlice.reducer;
