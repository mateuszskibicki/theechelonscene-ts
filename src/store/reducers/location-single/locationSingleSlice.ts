import { createSlice } from "@reduxjs/toolkit";

export type LocationsSingleState = object;
const initialState: LocationsSingleState = {};

export const locationSingleSlice = createSlice({
  name: "location-single",
  initialState,
  reducers: {
    setLocationSingle(state, action) {
      Object.assign(state, action.payload);
    }
  }
});

export const { setLocationSingle } = locationSingleSlice.actions;
export default locationSingleSlice.reducer;
