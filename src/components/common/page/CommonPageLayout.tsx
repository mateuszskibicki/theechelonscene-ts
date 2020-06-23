import React from "react";
import { HeaderImage } from "../../header-image/HeaderImage";
import { SEOImgHeaders } from "../../common/SEO/SEOImgHeaders";
import { HeaderLogo } from "../../header-image/HeaderLogo";
import { Spinner } from "../../common/spinner/Spinner";
import { RichTextComponent } from "../../rich-text/RichText";
import { Link } from "react-router-dom";

interface IProps {
  loading: { loading: boolean };
  content: any;
  title: string;
  bgPosition?: string;
}

export const CommonPageLayout: React.FC<IProps> = React.memo(
  ({ loading, content, title, bgPosition }): JSX.Element => {
    if (loading.loading || !content) return <Spinner />;

    // Get bg_image
    const bg_image = content?.bg_image?.url;
    const { content_text } = content.content;

    // bg position
    const position: string = bgPosition ? bgPosition : "left";

    return (
      <div className="common-page">
        <SEOImgHeaders img_url={bg_image} title={title} />
        <HeaderImage img={bg_image} size="medium" position={position}>
          <HeaderLogo />
          <h1 className="text-center text-white letter-spacing-4 mb-4">
            {title}
          </h1>
          <Link to="/contact" className="btn btn--small btn-white-outline">
            CONTACT
          </Link>
        </HeaderImage>
        {/* SEO Part */}
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
