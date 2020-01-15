import { createSlice } from "@reduxjs/toolkit";

export interface LocationsMainState {
  content: object | null;
}
const initialState: LocationsMainState = {
  content: null
};

export const locationsMainSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setLocationsMain(state, action) {
      state.content = action.payload;
    }
  }
});

export const { setLocationsMain } = locationsMainSlice.actions;
export default locationsMainSlice.reducer;
