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

  const {
    left_block_content,
    left_block_bg,
    right_block_1_content,
    right_block_1_bg,
    right_block_2_content,
    right_block_2_bg
  } = content.content;

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
      <div className="container-fluid">
        <div className="row">
          {/* left part */}
          <div
            className="col-12 col-md-6 common-page__block text-white letter-spacing-1"
            style={{ backgroundImage: `url(${left_block_bg.url})` }}
          >
            <ImgSEO url={left_block_bg.url} alt={left_block_bg.alt} />
            <RichTextComponent content={left_block_content} color="white" />
          </div>
          {/* right part */}
          <div className="col-12 col-md-6">
            <div className="row">
              {/* top part */}
              <div
                className="col-12 common-page__block text-white"
                style={{ backgroundImage: `url(${right_block_1_bg.url})` }}
              >
                <ImgSEO url={right_block_1_bg.url} alt={right_block_1_bg.alt} />
                <RichTextComponent
                  content={right_block_1_content}
                  color="white"
                />
              </div>
              {/* bottom part */}
              <div
                className="col-12 common-page__block text-white"
                style={{ backgroundImage: `url(${right_block_2_bg.url})` }}
              >
                <ImgSEO url={right_block_2_bg.url} alt={right_block_2_bg.alt} />
                <RichTextComponent
                  content={right_block_2_content}
                  color="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
