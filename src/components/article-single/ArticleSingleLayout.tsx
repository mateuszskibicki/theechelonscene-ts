import React from "react";
import Helmet from "react-helmet";
import { HeaderImage } from "../header-image/HeaderImage";
import { SEOImgHeaders } from "../common/SEO/SEOImgHeaders";
import { HeaderLogo } from "../header-image/HeaderLogo";
import { Spinner } from "../common/spinner/Spinner";
import { RichTextComponent } from "../rich-text/RichText";
import bgImg from "../../assets/imgs/clientele.jpg";
import { BlockAboutFounder } from "./BlockAboutFounder";
import { CommonPage } from "../../helpers/common-page/commonPageHelpers";
import { Link } from "react-router-dom";
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';
import { LastArticlesCarousel } from "./LastArticlesCarousel";

interface IProps {
  loading: { loading: boolean };
  content: CommonPage;
}

export const ArticleSingleLayout: React.FC<IProps> = ({
  loading,
  content
}): JSX.Element => {
  if (loading.loading || !content) return <Spinner />;

  const { title, description, date, media } = content;
  const { content_text } = content.content;

  const isYouTube = media && media.includes('youtube')
  const isInstagram = media && media.includes('instagram')

  return (
    <div className="common-page">
      {/* SEO starts */}
      <SEOImgHeaders img_url={bgImg} title={title || ""} />
      <Helmet>
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
        <Link to="/contact" className="btn btn--small btn-white-outline">
          CONTACT
        </Link>
      </HeaderImage>
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
                {isYouTube && media && <div style={{ display: 'flex', justifyContent: 'center' }} className='mb-3'>
                  <YouTubeEmbed url={media} width={'100%'} height={500} />
                </div>}
                {isInstagram && media && <div style={{ display: 'flex', justifyContent: 'center' }} className='mb-3'>
                  <InstagramEmbed url={media} width={'500px'}/>
                </div>}
              <RichTextComponent
                content={content_text}
                color="white"
              ></RichTextComponent>
            </div>
            <BlockAboutFounder />
          </div>
        </div>
      )}
      <LastArticlesCarousel />
    </div>
  );
};
