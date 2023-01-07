import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { getTC } from "../../reducers/tc/tcSlice";
import { setSEO } from "../../reducers/SEO/seoSlice";
import { tcPageHelper } from "../../../helpers/tc/tcPageHelper";

// Get T&Cs from Prismic.
export const fetchTCsData = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("tcs-page");

    // Helper
    const { SEO, content } = tcPageHelper(data);

    // SEO update
    dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(getTC(content));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
