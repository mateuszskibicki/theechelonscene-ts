import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
  content: object | null;
}
const initialState: LoadingState = {
  content: null
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    getClients(state, action) {
      state.content = action.payload;
    }
  }
});

export const { getClients } = clientsSlice.actions;
export default clientsSlice.reducer;
