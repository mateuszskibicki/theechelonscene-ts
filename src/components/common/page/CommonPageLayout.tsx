import React from "react";
import Helmet from "react-helmet";
import { HeaderImage } from "../../header-image/HeaderImage";
import { ImgSEO } from "../../common/SEO/ImgSEO";
import { HeaderLogo } from "../../header-image/HeaderLogo";
import { Spinner } from "../../common/spinner/Spinner";
import { RichTextComponent } from "../../rich-text/RichText";

interface IProps {
  loading: { loading: boolean };
  content: any;
  title: string;
}

export const CommonPageLayout: React.FC<IProps> = ({
  loading,
  content,
  title
}): JSX.Element => {
  if (loading.loading || !content)
    return (
      <div className="bg-dark text-center py-5">
        <Spinner />
      </div>
    );

  // Get bg_image
  const bg_image =
    content && content.bg_image && content.bg_image.url
      ? content.bg_image.url
      : null;
  // Get bg_image alt
  const bg_image_alt =
    content && content.bg_image && content.bg_image.alt
      ? content.bg_image.alt
      : null;

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
        <button className="btn btn-white">ENQUIRE</button>
      </HeaderImage>
      <ImgSEO url={bg_image} alt={bg_image_alt} />
      {content_text && (
        <div className="container px-3 py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
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
};
