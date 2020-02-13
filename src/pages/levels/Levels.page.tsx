import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticlesData } from "../../store/actions";
import { Spinner } from "../../components/common/spinner/Spinner";
import Helmet from "react-helmet";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { ImgSEO } from "../../components/common/SEO/ImgSEO";
import img_BG from "../../assets/imgs/rsz_homepage.jpg";
// import { Link } from "react-router-dom";

const LevelsPage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, articles } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!articles || articles.length === 0) {
      dispatch(fetchArticlesData());
    }
  }, [dispatch, articles]);

  if (loading.loading || !articles || articles.length === 0) return <Spinner />;

  return (
    <div className="aritcles-page">
      {/* SEO */}
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <ImgSEO
        url={img_BG}
        alt={
          "Levels of service - The Echelon Scene - Gay Matchmaker London New York"
        }
      />
      <h1 className="d-none">
        Levels of service - agency based in London and New York - The Echelon
        Scene
      </h1>
      <h2 className="d-none">
        Levels of service - agency based in London and New York - The Echelon
        Scene
      </h2>
      {/* SEO */}
      <HeaderImage img={img_BG} size="medium">
        <HeaderLogo />
        <h1 className="text-center text-white letter-spacing-4 mb-4">
          Levels of service
        </h1>
      </HeaderImage>
      <div className="container py-4 px-3 text-white">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>levels</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelsPage;
