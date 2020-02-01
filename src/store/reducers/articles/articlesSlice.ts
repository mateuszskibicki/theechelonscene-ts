import { createSlice } from "@reduxjs/toolkit";

export type ArticlesSingleState = object[];
const initialState: ArticlesSingleState = [];

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles(state, action) {
      return [...state, ...action.payload];
    }
  }
});

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
