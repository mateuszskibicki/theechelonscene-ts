import { ImgHelper, ArrayHelper, TextHelper } from "prismic-helpers-sanitize";

export const testimonialsHelper = (data: any): any | null => {
  if (!data || !data.data) return null;

  const payload = data.data;

  const content = payload.single_testimonial.map((item: any) =>
    TextHelper(item.content)
  );

  return content;
};
