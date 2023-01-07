import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
  testimonials: any[];
  loading: boolean;
}
const initialState: LoadingState = {
  testimonials: [],
  loading: true
};

export const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    setTestimonials(state, action) {
      state.testimonials = action.payload;
    },
    setLoadingTrue(state) {
      state.loading = true;
    },
    setLoadingFalse(state) {
      state.loading = false;
    }
  }
});

export const {
  setTestimonials,
  setLoadingTrue,
  setLoadingFalse
} = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
