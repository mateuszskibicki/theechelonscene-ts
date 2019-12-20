import {
  TextHelper,
  SmallTextHelper,
  UrlHelper
} from "prismic-helpers-sanitize";

export interface ISEO {
  title: string | null;
  description: string | null;
  keywords: string | null;
  item_prop_name: string | null;
  item_prop_description: string | null;
  twitter_site: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  twitter_creator: string | null;
  og_title: string | null;
  og_type: string | null;
  og_url: string | null;
  og_description: string | null;
  article_section: string | null;
  article_tag: string | null;
  fb_admins: string | null;
  item_prop_image: string | null;
  twitter_image: string | null;
  og_image: string | null;
  article_published_time: string | null;
  article_modified_time: string | null;
}

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
    // geo_region: TextHelper(seoData.seo_geo_region),
    // robots: TextHelper(seoData.seo_robots),
    item_prop_name: TextHelper(seoData.seo_item_prop_name),
    item_prop_description: TextHelper(seoData.seo_item_prop_description),
    twitter_site: TextHelper(seoData.seo_twitter_site),
    twitter_title: TextHelper(seoData.seo_twitter_title),
    twitter_description: TextHelper(seoData.seo_twitter_description),
    twitter_creator: TextHelper(seoData.seo_twitter_creator),
    og_title: TextHelper(seoData.seo_og_title),
    og_type: TextHelper(seoData.seo_og_type),
    og_url: TextHelper(seoData.seo_og_url),
    og_description: TextHelper(seoData.seo_og_description),
    article_section: TextHelper(seoData.seo_article_section),
    article_tag: TextHelper(seoData.seo_article_tag),
    fb_admins: TextHelper(seoData.seo_fb_admins),
    item_prop_image: UrlHelper(seoData.seo_item_prop_image),
    twitter_image: UrlHelper(seoData.seo_twitter_image),
    og_image: UrlHelper(seoData.seo_og_image),
    article_published_time: SmallTextHelper(seoData.seo_article_published_time),
    article_modified_time: SmallTextHelper(seoData.article_published_time)
  };

  return seoObject;
};
