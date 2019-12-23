import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { fetchTCsData } from "../../store/actions";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { RichTextComponent } from "../../components/rich-text/RichText";
import Logo from "../../assets/imgs/echelon-logo.png";
import HomepageBG from "../../assets/imgs/rsz_homepage.jpg";

export const Homepage: React.FC<any> = (): JSX.Element => {
  return (
    <div className="homepage">
      <HeaderImage title="Terms and conditions" img={HomepageBG} size="big">
        <div className="col-12 text-center mt-5 homepage__logo-wrapper">
          {/* Logo part */}
          <p className="mb-3 letter-spacing-6">THE</p>
          <img
            src={Logo}
            alt="The Echelon Scene - Gay Matchmaking London, New York, Toronto"
            className="homepage__logo mb-3"
          />
          <p className="letter-spacing-6 mb-3">SCENE</p>
          {/* Cities part */}
          <div className="homepage__logo-cities mb-3">
            <h3 className="homepage__logo-cities-single letter-spacing-4">
              LONDON
            </h3>
            <h3 className="homepage__logo-cities-single letter-spacing-4">
              NEW YORK
            </h3>
            <h3 className="homepage__logo-cities-single letter-spacing-4">
              TORONTO
            </h3>
          </div>
          {/* Text part */}
          <p className="letter-spacing-05">You are exactly our niche.</p>
          <p className="letter-spacing-05">
            Matchmaking for only the most eligible gay men, who want to find
            their equal partner in love.
          </p>
          <p className="letter-spacing-05">
            A global service; personally and discreetly delivered by the
            Founder, Jacqueline Burns.
          </p>
        </div>
        <div className="d-flex mb-5 d-sm-none">
          <button className="btn btn--small btn-white shadow mr-2">
            ENQUIRE
          </button>
          <button className="btn btn--small btn-white-outline shadow">
            READ MORE
          </button>
        </div>
        <div className="d-none mb-5 d-sm-flex">
          <button className="btn btn-white shadow mr-4">ENQUIRE</button>
          <button className="btn btn-white-outline shadow">READ MORE</button>
        </div>
      </HeaderImage>
    </div>
  );

  // get state
  const { loading, tc } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!tc.content) {
      dispatch(fetchTCsData());
    }
  }, [fetchTCsData, tc.content]);

  // Get bg_image
  const bg_image =
    tc && tc.content && tc.content.bg_image && tc.content.bg_image.url
      ? tc.content.bg_image.url
      : null;

  return (
    <div>
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <HeaderImage title="Terms and conditions" img={bg_image} size="xsmall" />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            {loading.loading ? (
              <h1>LOADING</h1>
            ) : (
              <RichTextComponent
                content={tc.content ? tc.content.content : null}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
