import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { ISEO } from "../../types";

type SEOhead = { current: ISEO | null } | null;

const HeadSEO: React.FC<any> = (): JSX.Element | null => {
  const SEO: SEOhead = useSelector((state: any) => state.SEO);
  if (!SEO || !SEO.current) return null;

  const {
    title = null,
    description = null,
    keywords = null,
    // geo_region = null,
    // robots = null,
    item_prop_name = null,
    item_prop_description = null,
    twitter_site = null,
    twitter_title = null,
    twitter_description = null,
    twitter_creator = null,
    og_title = null,
    // og_type = null,
    og_url = null,
    og_description = null,
    article_section = null,
    article_tag = null,
    fb_admins = null,
    item_prop_image = null,
    twitter_image = null,
    og_image = null,
    article_published_time = null,
    article_modified_time = null
  } = SEO.current;

  return (
    <Helmet>
      {/* random */}
      {/* <meta name="geo.region" content="GB" /> */}
      <meta name="twitter:card" content="summary" />
      <meta property="og:site_name" content="The Echelon Scene" />
      <meta property="og:locale" content="en_GB" />
      {/* {robots && <meta name="robots" content={robots} />} */}
      {/* optional */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {item_prop_name && <meta itemProp="name" content={item_prop_name} />}
      {item_prop_description && (
        <meta itemProp="description" content={item_prop_description} />
      )}
      {twitter_site && <meta name="twitter:site" content={twitter_site} />}
      {twitter_title && <meta name="twitter:title" content={twitter_title} />}
      {twitter_description && (
        <meta name="twitter:description" content={twitter_description} />
      )}
      {twitter_creator && (
        <meta name="twitter:creator" content={twitter_creator} />
      )}
      {/* {og_type && <meta property="og:type" content={og_type} />} */}
      {og_title && <meta property="og:title" content={og_title} />}
      {og_url && <meta property="og:url" content={og_url} />}
      {og_description && (
        <meta property="og:description" content={og_description} />
      )}
      {article_published_time && (
        <meta
          property="article:published_time"
          content={article_published_time}
        />
      )}
      {article_modified_time && (
        <meta
          property="article:modified_time"
          content={article_modified_time}
        />
      )}
      {article_section && (
        <meta property="article:section" content={article_section} />
      )}
      {article_tag && <meta property="article:tag" content={article_tag} />}
      {fb_admins && <meta property="fb:admins" content={fb_admins} />}
      {item_prop_image && <meta itemProp="image" content={item_prop_image} />}
      {twitter_image && <meta name="twitter:image" content={twitter_image} />}
      {og_image && <meta property="og:image" content={og_image} />}
    </Helmet>
  );
};

export default HeadSEO;
