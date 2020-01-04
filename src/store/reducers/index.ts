import { combineReducers } from "redux";
import loadingSlice from "./loading/loadingSlice";
import tcSlice from "./tc/tcSlice";
import seoSlice from "./SEO/seoSlice";
import testimonialsSlice from "./testimonials/testimonialsSlice";
import clientsSlice from "./clients/clientsSlice";
import howWeWorkSlice from "./how-we-work/howWeWorkSlice";
import founderSlice from "./founder/founderSlice";

export default combineReducers({
  loading: loadingSlice,
  tc: tcSlice,
  SEO: seoSlice,
  testimonials: testimonialsSlice,
  clients: clientsSlice,
  howWeWork: howWeWorkSlice,
  founder: founderSlice
});
