import { ImgHelper, ArrayHelper, TextHelper } from "prismic-helpers-sanitize";
import { SEOhelper } from "../SEOhelper";

export const commonPageHelper = (data: any): any | null => {
  if (!data || !data.data) return null;

  const payload = data.data;

  const content = {
    uid: data.uid,
    id: data.id,
    bg_image: ImgHelper(payload.bg_image),
    header_title: TextHelper(payload.header_title),
    content: {
      content_text: ArrayHelper(payload.content)
    }
  };

  return {
    content,
    SEO: SEOhelper(payload)
  };
};
