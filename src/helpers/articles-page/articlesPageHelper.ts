import {
  // ImgHelper,
  // ArrayHelper,
  TextHelper,
  SmallTextHelper
} from "prismic-helpers-sanitize";
//   import { SEOhelper } from "../SEOhelper";
// TODO
export interface Article {
  uid: string | null;
  title: string | null;
  description: string | null;
  date: string | null;
}

export const articlesPageHelper = (data: any): any | null => {
  if (!data || !data.results) return null;

  const articles = data.results.map(
    (single: any): Article => {
      return {
        uid: SmallTextHelper(single?.uid),
        title: TextHelper(single?.data?.title),
        description: TextHelper(single?.data?.description),
        date: SmallTextHelper(single?.data?.date)
      };
    }
  );

  return {
    articles
    //   SEO: SEOhelper(payload)
  } as { articles: Article[] };
};
