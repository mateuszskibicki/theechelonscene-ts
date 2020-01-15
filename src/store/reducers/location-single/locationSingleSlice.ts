import { createSlice } from "@reduxjs/toolkit";

export type LocationsMainState = object;
const initialState: LocationsMainState = {};

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
