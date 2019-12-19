import { combineReducers } from "redux";
import loadingSlice from "./loading/loadingSlice";


export default combineReducers({
  loading: loadingSlice
});
