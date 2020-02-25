import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLevelsPage } from "../../store/actions";
import { Spinner } from "../../components/common/spinner/Spinner";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { SEOImgHeaders } from "../../components/common/SEO/SEOImgHeaders";
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
      {/* SEO starts */}
      <SEOImgHeaders img_url={img_BG} title={"Levels of service"} />
      {/* SEO ends */}
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
