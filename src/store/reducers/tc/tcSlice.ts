import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
    content: object | null
}
const initialState: LoadingState = {
    content: null
}

export const tcSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getTC(state, action) {
            state.content = {}
        }
    }
})

export const { getTC } = tcSlice.actions
export default tcSlice.reducer