import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { getTC } from "../../reducers/tc";
import { tcPageHelper } from "./../../../helpers/tc/tcPageHelper";

// Get T&Cs from Prismic.
export const fetchTCsData = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("tcs-page");

    // Push data to redux
    dispatch(getTC(tcPageHelper(data)));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
