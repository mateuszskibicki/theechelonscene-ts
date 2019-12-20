import { ImgHelper } from "prismic-helpers-sanitize";
import { SEOhelper } from "../SEOhelper";
// import { sliceHelper } from "../slice-helpers/SliceHelpers";

export const tcPageHelper = (data: any): any | null => {
  if (!data || !data.data) return null;

  const payload = data.data;

  const content = {
    uid: data.uid,
    id: data.id,
    bg_image: ImgHelper(payload.bg_image)
    // content: sliceHelper(content.body)
  };

  return {
    content,
    SEO: SEOhelper(payload)
  };
};
