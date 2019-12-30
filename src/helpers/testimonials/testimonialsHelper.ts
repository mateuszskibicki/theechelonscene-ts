import { TextHelper } from "prismic-helpers-sanitize";
import { SEOhelper } from "../SEOhelper";

export const testimonialsHelper = (data: any): any | null => {
  if (!data || !data.data) return null;

  const payload = data.data;

  const content = payload.single_testimonial.map((item: any) =>
    TextHelper(item.content)
  );

  return content;
};

export const testimonialsSEOHelper = (data: any): any | null => {
  if (!data || !data.data) return null;

  const payload = data.data;

  return {
    SEO: SEOhelper(payload)
  };
};
