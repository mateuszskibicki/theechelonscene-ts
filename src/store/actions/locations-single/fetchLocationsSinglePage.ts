import { commonPageHelper } from "./../../../helpers/common-page/commonPageHelpers";
import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { setSEO } from "../../reducers/SEO/seoSlice";
import { setLocationSingle } from "../../reducers/location-single/locationSingleSlice";

// Get locations main page from Prismic.
export const fetchLocationSingleData = (uid: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getByUID("location-single-page", uid);

    // Helper
    const { SEO, content } = commonPageHelper(data);

    // SEO update
    dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(setLocationSingle({ [uid]: { ...content } }));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
