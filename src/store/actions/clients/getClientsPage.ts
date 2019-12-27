import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { getClients } from "../../reducers/clients/clientsSlice";
import { setSEO } from "../../reducers/SEO/seoSlice";
import { clientsPageHelper } from "../../../helpers/clients/clientsPageHelper";

// Get clients page from Prismic.
export const fetchClientsData = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("clients-page");

    // Helper
    const { SEO, content } = clientsPageHelper(data);

    // SEO update
    dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(getClients(content));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {}
};
