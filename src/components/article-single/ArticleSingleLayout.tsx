import React from "react";
import Helmet from "react-helmet";
import { HeaderImage } from "../header-image/HeaderImage";
import { ImgSEO } from "../common/SEO/ImgSEO";
import { HeaderLogo } from "../header-image/HeaderLogo";
import { Spinner } from "../common/spinner/Spinner";
import { RichTextComponent } from "../rich-text/RichText";
import bgImg from "../../assets/imgs/clientele.jpg";
import profileImg from "../../assets/imgs/profile.jpg";
import { CommonPage } from "../../helpers/common-page/commonPageHelpers";
import { Link } from "react-router-dom";

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
      <Helmet>
        <meta property="og:type" content="website" />
        {date && <meta property="article:published_time" content={date} />}
        {date && <meta property="article:modified_time" content={date} />}
      </Helmet>
      {/* SEO end */}
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
              <h3 className="mb-2 text-white letter-spacing-1">
                {description}
              </h3>
              {date && (
                <h5 className="font-weight-600 text-white letter-spacing-2 mb-5">
                  <i>{date}</i>
                </h5>
              )}
              <RichTextComponent
                content={content_text}
                color="white"
              ></RichTextComponent>
            </div>
            <div className="col-12">
              <div className="row justify-content-center align-items-center pt-4">
                <div className="col-8 col-sm-6 col-md-3 col-lg-2 mb-3">
                  <img
                    src={profileImg}
                    alt="Jacqueline Burns - Gay Matchmaker - The Echelon Scene"
                    className="shadow rounded-circle img-fluid"
                  />
                </div>
                <div className="col-12 col-sm-8 col-md-7 col-lg-6">
                  <p className="text-white letter-spacing-1 mb-2">
                    By Jacqueline Burns
                  </p>
                  <p className="text-white letter-spacing-1 mb-2">
                    Founder of{" "}
                    <Link to="/" className="text-red">
                      The Echelon Scene
                    </Link>
                  </p>
                  <p className="text-white letter-spacing-1 mb-2">
                    The Echelon Scene is an offline gay matchmaking agency for
                    eligible gay men seeking a long term partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
