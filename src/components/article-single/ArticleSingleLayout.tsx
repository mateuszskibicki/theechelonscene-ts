import React from "react";
import Helmet from "react-helmet";
import { HeaderImage } from "../header-image/HeaderImage";
import { ImgSEO } from "../common/SEO/ImgSEO";
import { HeaderLogo } from "../header-image/HeaderLogo";
import { Spinner } from "../common/spinner/Spinner";
import { RichTextComponent } from "../rich-text/RichText";
import bgImg from "../../assets/imgs/clientele.jpg";
import { CommonPage } from "../../helpers/common-page/commonPageHelpers";

// uid: string | null;
// id: string | null;
// bg_image: {
//   url: string;
//   alt: string | null;
// } | null;
// header_title: string | null;
// content: { content_text: any[] | null };
// title?: string | null;
// description?: string | null;
// date?: string | null;

interface IProps {
  loading: { loading: boolean };
  content: CommonPage;
}

export const ArticleSingleLayout: React.FC<IProps> = ({
  loading,
  content
}): JSX.Element => {
  if (loading.loading || !content) return <Spinner />;

  const { title, description, date } = content;
  const { content_text } = content.content;

  return (
    <div className="common-page">
      {/* SEO */}
      <h1 className="d-none">{title}</h1>
      <h2 className="d-none">{title}</h2>
      {/* SEO */}
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <HeaderImage img={bgImg} size="medium" position="left">
        <HeaderLogo />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <h3 className="text-center text-white letter-spacing-4 mb-4">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <button className="btn btn--small btn-white-outline">CONTACT</button>
      </HeaderImage>
      <ImgSEO url={bgImg} alt={title ? title : ""} />
      {content_text && (
        <div className="container px-3 py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 px-3">
              <h3 className="mb-4 text-white letter-spacing-1">
                {description}
              </h3>
              <h4 className="font-weight-600 text-white">{date}</h4>
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
