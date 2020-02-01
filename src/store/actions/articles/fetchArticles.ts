import Prismic from "prismic-javascript";
import { articlesPageHelper } from "./../../../helpers/articles-page/articlesPageHelper";
import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
// import { setSEO } from "../../reducers/SEO/seoSlice";
import { setArticles } from "../../reducers/articles";

// Get article single page from Prismic.
export const fetchArticlesData = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data

    const data = await prismicApi.query(
      Prismic.Predicates.at("document.type", "single-article"),
      {
        orderings: "[my.single-article.date desc]",
        pageSize: 100,
        fetch: [
          "single-article.title",
          "single-article.description",
          "single-article.date"
        ]
      }
    );

    // Helper for articles
    const { articles } = articlesPageHelper(data);

    // SEO update
    // dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(setArticles(articles));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
