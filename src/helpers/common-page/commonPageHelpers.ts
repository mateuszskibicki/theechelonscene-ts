import {
  ImgHelper,
  ArrayHelper,
  TextHelper,
  SmallTextHelper
} from "prismic-helpers-sanitize";
import { SEOhelper } from "../SEOhelper";
import { CommonPageType } from "../enum/CommonPageType";
export interface CommonPage {
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
  levels?: { title: string; description: string }[];
  locations?: {
    name: string;
    description: string;
    url: string;
  }[];
  press?: {
    title: string;
    url: string;
    img: {
      url: string;
      alt: string | null;
    } | null;
  };
}

export const commonPageHelper = (
  data: any,
  type?: CommonPageType
): any | null => {
  if (!data || !data.data) return null;

  const payload = data.data;

  let content: CommonPage = {
    uid: data.uid,
    id: data.id,
    bg_image: ImgHelper(payload.bg_image),
    header_title: TextHelper(payload.header_title),
    content: {
      content_text: ArrayHelper(payload.content)
    }
  };

  if (type === CommonPageType.ARTICLE) {
    content = {
      ...content,
      title: TextHelper(payload.title),
      description: TextHelper(payload.description),
      date: SmallTextHelper(payload.date)
    };
  }

  if (type === CommonPageType.LEVELS) {
    content = {
      ...content,
      levels: payload.levels.map((level: any) => ({
        title: TextHelper(level.level_title),
        description: TextHelper(level.level_description)
      }))
    };
  }

  if (type === CommonPageType.LOCATIONS) {
    content = {
      ...content,
      title: TextHelper(payload.title),
      locations: payload.locations.map((location: any) => ({
        name: TextHelper(location.locations_name),
        description: TextHelper(location.location_description),
        url: TextHelper(location.location_url)
      }))
    };
  }

  if (type === CommonPageType.PRESS) {
    content = {
      ...content,
      title: TextHelper(payload.title),
      press: payload.press.map((singlePress: any) => ({
        title: TextHelper(singlePress.press_title),
        url: TextHelper(singlePress.press_url),
        img: ImgHelper(singlePress.press_img)
      }))
    };
  }

  return {
    content,
    SEO: SEOhelper(payload)
  };
};
