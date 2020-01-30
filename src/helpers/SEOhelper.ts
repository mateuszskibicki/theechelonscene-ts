import { TextHelper, UrlHelper } from "prismic-helpers-sanitize";

import { ISEO } from "../types";

//SEO HELPER
export const SEOhelper = (response: any): ISEO | null => {
  if (
    typeof response !== "object" ||
    response === null ||
    Array.isArray(response)
  )
    return null;

  const seoData: any = response;

  let seoObject: ISEO = {
    title: TextHelper(seoData.seo_title),
    description: TextHelper(seoData.seo_description),
    keywords: TextHelper(seoData.seo_keywords),
    fb_admins: TextHelper(seoData.seo_fb_admins),
    item_prop_image: UrlHelper(seoData.seo_item_prop_image),
    twitter_image: UrlHelper(seoData.seo_twitter_image),
    og_image: UrlHelper(seoData.seo_og_image)
  };

  return seoObject;
};

// // geo_region = null,
// // robots = null,
// item_prop_name = null,
// item_prop_description = null,
// twitter_site = null,
// twitter_title = null,
// twitter_description = null,
// twitter_creator = null,
// og_title = null,
// // og_type = null,
// og_url = null,
// og_description = null,
// article_section = null,
// article_tag = null,
// article_published_time = null,
// article_modified_time = null
