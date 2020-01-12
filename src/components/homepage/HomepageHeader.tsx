import React from "react";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import Logo from "../../assets/imgs/echelon-logo.png";
import HomepageBG from "../../assets/imgs/rsz_homepage.jpg";
import { ImgSEO } from "../common/SEO/ImgSEO";
import { Link } from "react-router-dom";

export const HomepageHeader: React.FC = (): JSX.Element => {
  return (
    <HeaderImage title="" img={HomepageBG} size="big">
      <ImgSEO
        url={HomepageBG}
        alt="Homepage - Gay Matchmaking Agency London New York Toronto - The Echelon Scene"
      />
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
        <div className="homepage__logo-cities mb-4 d-md-none">
          <h3 className="homepage__logo-cities-single letter-spacing-4 mb-2">
            LONDON
          </h3>
          <h3 className="homepage__logo-cities-single letter-spacing-4 mb-2">
            NEW YORK
          </h3>
          <h3 className="homepage__logo-cities-single letter-spacing-4 mb-2">
            TORONTO
          </h3>
        </div>
        <div className="d-none d-md-flex justify-content-around mb-4">
          <h3 className="homepage__logo-cities-single letter-spacing-4 mb-2">
            LONDON
          </h3>
          <h3 className="homepage__logo-cities-single letter-spacing-4 mb-2">
            NEW YORK
          </h3>
          <h3 className="homepage__logo-cities-single letter-spacing-4 mb-2">
            TORONTO
          </h3>
        </div>
        {/* Text part */}
        <p className="letter-spacing-05 mb-2">You are exactly our niche.</p>
        <p className="letter-spacing-05 mb-2">
          Matchmaking for only the most eligible gay men, who want to find their
          equal partner in love.
        </p>
        <p className="letter-spacing-05 mb-4">
          A global service; personally and discreetly delivered by the Founder,
          Jacqueline Burns.
        </p>
      </div>
      {/* Buttons */}
      <div className="d-flex mb-5 d-sm-none">
        <button className="btn btn--small btn-white shadow mr-2">
          ENQUIRE
        </button>
        <button className="btn btn--small btn-white-outline shadow">
          READ MORE
        </button>
      </div>
      <div className="d-none mb-5 d-sm-flex">
        {/* <button className="btn btn-white shadow mr-4">ENQUIRE</button> */}
        <button className="btn btn--small btn-white-outline shadow">
          CONTACT
        </button>
      </div>
      <div className="container homepage__desktop-links d-none d-lg-block">
        <div className="row justify-content-around">
          <Link to="/">Clientele</Link>
          <Link to="/">Founder</Link>
          <Link to="/">How we work</Link>
          <Link to="/">Levels</Link>
          <Link to="/">Media</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">Locations</Link>
        </div>
      </div>
    </HeaderImage>
  );
};
