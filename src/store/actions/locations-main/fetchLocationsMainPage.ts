import { commonPageHelper } from "./../../../helpers/common-page/commonPageHelpers";
import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { setSEO } from "../../reducers/SEO/seoSlice";
import { setLocationsMain } from "../../reducers/locations-main/locationsMainSlice";
import { CommonPageType } from "../../../helpers/enum/CommonPageType";

// Get locations main page from Prismic.
export const fetchLocationsMainData = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("locations-page");

    // Helper
    const { SEO, content } = commonPageHelper(data, CommonPageType.LOCATIONS);

    // SEO update
    dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(setLocationsMain(content));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
