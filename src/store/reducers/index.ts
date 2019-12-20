import { combineReducers } from "redux";
import loadingSlice from "./loading/loadingSlice";
import tcSlice from "./tc/tcSlice";
import seoSlice from "./SEO/seoSlice";

export default combineReducers({
  loading: loadingSlice,
  tc: tcSlice,
  SEO: seoSlice
});
