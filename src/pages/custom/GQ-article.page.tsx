import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { LastArticlesCarousel } from '../../components/article-single/LastArticlesCarousel';
import { HeaderLogo } from '../../components/header-image/HeaderLogo';
import { SEOImgHeaders } from '../../components/common/SEO/SEOImgHeaders';
import { HeaderImage } from '../../components/header-image/HeaderImage';
import { BlockAboutFounder } from '../../components/article-single/BlockAboutFounder';
import bgImg from '../../assets/imgs/clientele.jpg';
import gqArticleImg1 from '../../assets/imgs/gq-article-1.jpg';
import gqArticleImg2 from '../../assets/imgs/gq-article-2.jpg';
import gqArticleImg3 from '../../assets/imgs/gq-article-3.jpg';

const GQArticlePage: React.FC = (): JSX.Element => {
  const title = 'Do elite gay matchmakers put a straightjacket on love?';

  return (
    <div className='common-page'>
      {/* SEO starts */}
      <SEOImgHeaders img_url={gqArticleImg2} title={title || ''} />
      <Helmet>
        <meta property='article:published_time' content={'2021-08-01'} />
        <meta property='article:modified_time' content={'2021-08-01'} />
      </Helmet>
      {/* SEO end */}
      <HeaderImage img={bgImg} size='medium' position='left'>
        <HeaderLogo />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8'>
              <h3 className='text-center text-white letter-spacing-4 mb-4'>
                {title}
              </h3>
            </div>
          </div>
        </div>
        <Link to='/contact' className='btn btn--small btn-white-outline'>
          CONTACT
        </Link>
      </HeaderImage>
      <div className='container-fluid px-3 py-5'>
        <div className='row justify-content-center image-row'>
          <div className='col-12 col-lg-4 mb-4'>
            <img src={gqArticleImg1} alt={title}></img>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <img src={gqArticleImg2} alt={title}></img>
          </div>
          <div className='col-12 col-lg-4 mb-4'>
            <img src={gqArticleImg3} alt={title}></img>
          </div>
          <BlockAboutFounder />
        </div>
      </div>
      <LastArticlesCarousel />
    </div>
  );
};

export default GQArticlePage;
