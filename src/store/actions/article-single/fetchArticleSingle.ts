import { commonPageHelper } from "./../../../helpers/common-page/commonPageHelpers";
import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { setSEO } from "../../reducers/SEO/seoSlice";
import { setArticlesSingle } from "../../reducers/article-single";

// Get article single page from Prismic.
export const fetchArticleSingleData = (uid: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getByUID("single-article", uid);

    // Helper
    const { SEO, content } = commonPageHelper(data, true);

    // SEO update
    dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(setArticlesSingle({ [uid]: { ...content } }));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
