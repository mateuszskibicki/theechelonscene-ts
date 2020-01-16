import {
  ImgHelper,
  ArrayHelper,
  TextHelper,
  SmallTextHelper
} from "prismic-helpers-sanitize";
import { SEOhelper } from "../SEOhelper";

interface Content {
  uid: string | null;
  id: string | null;
  bg_image: {
    url: string;
    alt: string | null;
  } | null;
  header_title: string | null;
  content: { content_text: any[] | null };
  title?: string | null;
  description?: string | null;
  date?: string | null;
}

export const commonPageHelper = (
  data: any,
  isArticle?: boolean
): any | null => {
  if (!data || !data.data) return null;

  const payload = data.data;

  let content: Content = {
    uid: data.uid,
    id: data.id,
    bg_image: ImgHelper(payload.bg_image),
    header_title: TextHelper(payload.header_title),
    content: {
      content_text: ArrayHelper(payload.content)
    }
  };

  if (isArticle) {
    content = {
      ...content,
      title: TextHelper(payload.title),
      description: TextHelper(payload.description),
      date: SmallTextHelper(payload.date)
    };
  }

  return {
    content,
    SEO: SEOhelper(payload)
  };
};
