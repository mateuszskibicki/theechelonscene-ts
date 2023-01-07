import { commonPageHelper } from "./../../../helpers/common-page/commonPageHelpers";
import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { setSEO } from "../../reducers/SEO/seoSlice";
import { setPress } from "../../reducers/press/pressSlice";
import { CommonPageType } from "../../../helpers/enum/CommonPageType";

// Get press page from Prismic
export const fetchPressPageData = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("press-page");

    // Helper
    const { SEO, content } = commonPageHelper(data, CommonPageType.PRESS);

    // SEO update
    dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(setPress(content));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
