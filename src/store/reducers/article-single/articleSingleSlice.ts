import { createSlice } from "@reduxjs/toolkit";

export type ArticlesSingleState = object;
const initialState: ArticlesSingleState = {};

export const articlesSingleSlice = createSlice({
  name: "articles-single",
  initialState,
  reducers: {
    setArticlesSingle(state, action) {
      return { ...state, ...action.payload };
    }
  }
});

export const { setArticlesSingle } = articlesSingleSlice.actions;
export default articlesSingleSlice.reducer;
