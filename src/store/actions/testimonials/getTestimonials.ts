import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import {
  setTestimonials,
  setLoadingTrue,
  setLoadingFalse
} from "../../reducers/testimonials";
import { testimonialsHelper } from "../../../helpers/testimonials/testimonialsHelper";

// Get T&Cs from Prismic.
export const fetchTestimonials = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Start loading
    dispatch(setLoadingTrue());

    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("testimonials");

    // Sanitize data
    const testimonials = testimonialsHelper(data);

    // Set data in reducer
    dispatch(setTestimonials(testimonials));

    // Stop loading
    dispatch(setLoadingFalse());
  } catch (err) {
    console.log(err);
  }
};
