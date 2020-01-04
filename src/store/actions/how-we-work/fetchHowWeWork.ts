import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { getHowWeWork } from "../../reducers/how-we-work/howWeWorkSlice";
import { setSEO } from "../../reducers/SEO/seoSlice";
import { commonPageHelper } from "./../../../helpers/common-page/commonPageHelpers";

// Get clients page from Prismic.
export const fetchHowWeWork = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("how-we-work-page");

    // Helper
    const { SEO, content } = commonPageHelper(data);

    // SEO update
    dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(getHowWeWork(content));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
