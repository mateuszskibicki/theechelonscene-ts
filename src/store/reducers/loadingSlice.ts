import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  loading: boolean;
}

export const loadingSlice = createSlice({
  name: 'todos',
  initialState: { loading: false } as IInitialState,
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