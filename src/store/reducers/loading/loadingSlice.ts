import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
  loading: boolean
}
const initialState: LoadingState = {
  loading: false
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    loadingStart(state, action) {
      state.loading = true;
    },
    loadingStop(state, action) {
      state.loading = false;
    }
  }
})

export const { loadingStart, loadingStop } = loadingSlice.actions
export default loadingSlice.reducer