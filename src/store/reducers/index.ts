import { combineReducers } from "redux";
import loadingSlice from "./loading/loadingSlice";
import tcSlice from "./tc/tcSlice";
import seoSlice from "./SEO/seoSlice";
import testimonialsSlice from "./testimonials/testimonialsSlice";
import clientsSlice from "./clients/clientsSlice";
import howWeWorkSlice from "./how-we-work/howWeWorkSlice";
import founderSlice from "./founder/founderSlice";
import locationsMainSlice from "./locations-main/locationsMainSlice";
import locationSingleSlice from "./location-single/locationSingleSlice";
import articleSingleSlice from "./article-single/articleSingleSlice";

export default combineReducers({
  loading: loadingSlice,
  tc: tcSlice,
  SEO: seoSlice,
  testimonials: testimonialsSlice,
  clients: clientsSlice,
  howWeWork: howWeWorkSlice,
  founder: founderSlice,
  locationsMain: locationsMainSlice,
  locationSingle: locationSingleSlice,
  articleSingle: articleSingleSlice
});
