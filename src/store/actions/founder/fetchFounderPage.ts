import { commonPageHelper } from "./../../../helpers/common-page/commonPageHelpers";
import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { setSEO } from "../../reducers/SEO/seoSlice";
import { setFounder } from "../../reducers/founder/founderSlice";

// Get clients page from Prismic.
export const fetchFounderData = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("founder-page");

    // Helper
    const { SEO, content } = commonPageHelper(data);

    // SEO update
    dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(setFounder(content));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
