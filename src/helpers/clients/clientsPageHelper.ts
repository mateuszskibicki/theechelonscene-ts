import { ImgHelper, ArrayHelper } from "prismic-helpers-sanitize";
import { SEOhelper } from "../SEOhelper";

export const clientsPageHelper = (data: any): any | null => {
  if (!data || !data.data) return null;

  const payload = data.data;

  const content = {
    uid: data.uid,
    id: data.id,
    bg_image: ImgHelper(payload.bg_image),
    content: {
      left_block_content: ArrayHelper(payload.left_block_content),
      left_block_bg: ImgHelper(payload.left_block_bg),
      right_block_1_content: ArrayHelper(payload.right_block_1_content),
      right_block_1_bg: ImgHelper(payload.right_block_1_bg),
      right_block_2_content: ArrayHelper(payload.right_block_2_content),
      right_block_2_bg: ImgHelper(payload.right_block_2_bg)
    }
  };

  return {
    content,
    SEO: SEOhelper(payload)
  };
};
