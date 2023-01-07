import { commonPageHelper } from "./../../../helpers/common-page/commonPageHelpers";
import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import { loadingStart, loadingStop } from "../../reducers/loading";
import { getLevels } from "../../reducers/levels/levelsSlice";
import { setSEO } from "../../reducers/SEO/seoSlice";
import { CommonPageType } from "../../../helpers/enum/CommonPageType";

// Get levels page from Prismic.
export const fetchLevelsPage = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(loadingStart());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("levels-page");

    // Helper
    const { content, SEO } = commonPageHelper(data, CommonPageType.LEVELS);

    // SEO update
    dispatch(setSEO(SEO));

    // Push data to redux (use helper to clean it)
    dispatch(getLevels(content.levels));

    // Stop loading
    dispatch(loadingStop());
  } catch (err) {
    console.log(err);
  }
};
