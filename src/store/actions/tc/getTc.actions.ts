import Prismic from "prismic-javascript";
import { loadingStart, loadingStop } from '../../reducers/loading'
import { Dispatch } from "redux";
// helpers
// import {
//   articlesListHelper,
//   allArticlesPageSEOHelper
// } from "../../../helpers/articles/ArticlesHelpers";
//types

// interface IgetAllArticles {
//   page: string;
//   category: string | null;
//   searchText: string | null;
//   SEO: ISEO | null;
// }

// Get afticles data by page/tag/search_text/category from prismic CMS
export const getTCs = () => async (dispatch: Dispatch): Promise<void> => {
    try {
        // Start loading
        dispatch(loadingStart());
        dispatch(loadingStop());
    } catch (err) { }
}