import React from "react";
import Helmet from "react-helmet";
import { HeaderImage } from "../../header-image/HeaderImage";
import { ImgSEO } from "../../common/SEO/ImgSEO";
import { HeaderLogo } from "../../header-image/HeaderLogo";
import { Spinner } from "../../common/spinner/Spinner";
import { RichTextComponent } from "../../rich-text/RichText";
import { Link } from "react-router-dom";

interface IProps {
  loading: { loading: boolean };
  content: any;
  title: string;
}

export const CommonPageLayout: React.FC<IProps> = React.memo(
  ({ loading, content, title }): JSX.Element => {
    if (loading.loading || !content) return <Spinner />;

    // Get bg_image
    const bg_image = content?.bg_image?.url;
    // Get bg_image alt
    const bg_image_alt = content?.bg_image?.alt;

    const { content_text } = content.content;

    return (
      <div className="common-page">
        <Helmet>
          <meta property="og:type" content="website" />
        </Helmet>
        <HeaderImage img={bg_image} size="medium" position="left">
          <HeaderLogo />
          <h1 className="text-center text-white letter-spacing-4 mb-4">
            {title}
          </h1>
          <Link to="/contact" className="btn btn--small btn-white-outline">
            CONTACT
          </Link>
        </HeaderImage>
        <ImgSEO url={bg_image} alt={bg_image_alt} />
        {content_text && (
          <div className="container px-3 py-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 px-3">
                <RichTextComponent
                  content={content_text}
                  color="white"
                ></RichTextComponent>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
