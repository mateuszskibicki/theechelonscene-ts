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
    fb_admins = null,
    item_prop_image = null,
    twitter_image = null,
    og_image = null
  } = SEO.current;

  return (
    <Helmet>
      {/* default */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@TheEchelonScene" />
      <meta name="twitter:creator" content="@TheEchelonScene" />
      <meta
        property="og:site_name"
        content="The Echelon Scene - Gay Matchmaking"
      />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={"https://theechelonscene.com"} />

      {/* titles */}
      {title && <title>{title}</title>}
      {title && <meta name="title" content={title} />}
      {title && <meta itemProp="name" content={title} />}
      {title && <meta name="twitter:title" content={title} />}
      {title && <meta property="og:title" content={title} />}

      {/* descriptions */}
      {description && <meta name="description" content={description} />}
      {description && <meta itemProp="description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {description && <meta property="og:description" content={description} />}

      {/* keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
      {keywords && <meta property="article:tag" content={keywords} />}

      {/* the rest */}
      {fb_admins && <meta property="fb:admins" content={fb_admins} />}
      {item_prop_image && <meta itemProp="image" content={item_prop_image} />}
      {twitter_image && <meta name="twitter:image" content={twitter_image} />}
      {og_image && <meta property="og:image" content={og_image} />}
    </Helmet>
  );
};

export default HeadSEO;
