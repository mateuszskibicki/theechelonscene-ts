import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLevelsPage } from "../../store/actions";
import { Spinner } from "../../components/common/spinner/Spinner";
import Helmet from "react-helmet";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { ImgSEO } from "../../components/common/SEO/ImgSEO";
import img_BG from "../../assets/imgs/rsz_homepage.jpg";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const LevelsPage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, levels } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // console.log(levels);

  // fetch data
  useEffect(() => {
    if (!levels || !levels.levels) {
      dispatch(fetchLevelsPage());
    }
  }, [dispatch, levels]);

  if (loading.loading || !levels || !levels.levels) return <Spinner />;

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
          {levels.levels.map((level: any) => (
            <div
              className="col-12 col-sm-10 col-md-8 col-lg-4 my-4 px-4"
              key={level.title}
            >
              <h2 className="text-white letter-spacing-4 text-600 mb-4">
                {level.title}
              </h2>
              <p className="text-white letter-spacing-1 mb-4">
                {level.description}
              </p>
              <Link to="/contact" className="btn btn-white-outline btn--small">
                Contact
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelsPage;
