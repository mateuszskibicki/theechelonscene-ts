import { combineReducers } from "redux";
import loadingSlice from "./loadingSlice";


export default combineReducers({
  loading: loadingSlice
});
