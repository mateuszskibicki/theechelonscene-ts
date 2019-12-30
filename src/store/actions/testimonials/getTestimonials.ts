import { Dispatch } from "redux";
import { prismicConnection } from "../prismic-connection/prismicConnection";
import {
  setTestimonials,
  setLoadingTrue,
  setLoadingFalse
} from "../../reducers/testimonials";
import {
  testimonialsHelper,
  testimonialsSEOHelper
} from "../../../helpers/testimonials/testimonialsHelper";
import { setSEO } from "../../reducers/SEO";

// Get testimonials from Prismic.
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

// Get SEO testimonials from Prismic.
export const fetchTestimonialsSEO = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    // Prismic connection
    const prismicApi = await prismicConnection();

    // Grab data
    const data = await prismicApi.getSingle("testimonials-seo");

    // Sanitize data
    const { SEO } = testimonialsSEOHelper(data);

    // SEO update
    dispatch(setSEO(SEO));
  } catch (err) {
    console.log(err);
  }
};
