import { combineReducers } from "redux";
import loadingSlice from "./loading/loadingSlice";
import tcSlice from "./tc/tcSlice";

export default combineReducers({
  loading: loadingSlice,
  tc: tcSlice
});
