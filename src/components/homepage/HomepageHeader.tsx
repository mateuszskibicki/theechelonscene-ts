import React from "react";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import Logo from "../../assets/imgs/ECHELON.png";
import HomepageBG from "../../assets/imgs/rsz_homepage.jpg";
import { ImgSEO } from "../common/SEO/ImgSEO";
import { Link } from "react-router-dom";
import { DesktopLinks } from "../header-image/DesktopLinks";

export const HomepageHeader: React.FC = (): JSX.Element => {
  return (
    <HeaderImage title="" img={HomepageBG} size="big" homepage={true}>
      <ImgSEO
        url={HomepageBG}
        alt="Homepage - Gay Matchmaking Agency London New York Toronto - The Echelon Scene"
      />
      <div className="col-12 text-center mt-5 px-0 homepage__logo-wrapper">
        {/* Logo part */}
        <p className="mb-3 letter-spacing-6 animation-down">THE</p>
        <div className="homepage__logo-wrapper--animation">
          <img
            src={Logo}
            alt="The Echelon Scene - Gay Matchmaking London, New York, Toronto"
            className="homepage__logo animation-opacity mb-3"
          />
          <div className="logo-line"></div>
        </div>

        <p className="letter-spacing-6 mb-3 animation-up">SCENE</p>
        {/* Cities part */}
        <div className="homepage__logo-cities mb-4 d-md-none animation-up-slow">
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
        <div className="d-none d-md-flex justify-content-around mb-4 animation-up-slow">
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
        <div className="animation-up-slow">
          <p className="letter-spacing-05 mb-2">You are exactly our niche.</p>
          <p className="letter-spacing-05 mb-2">
            Matchmaking for only the most eligible gay men, who want to find
            their equal partner in love.
          </p>
          <p className="letter-spacing-05 mb-4">
            A global service; personally and discreetly delivered by the
            Founder, Jacqueline Burns.
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className="d-flex mb-5 d-sm-none animation-up-slow">
        <Link to="/contact" className="btn btn--small btn-white-outline shadow">
          CONTACT
        </Link>
      </div>
      <div className="d-none mb-5 d-sm-flex animation-up-slow">
        <Link to="/contact" className="btn btn--small btn-white-outline shadow">
          CONTACT
        </Link>
      </div>
      <DesktopLinks animation={true} />
    </HeaderImage>
  );
};
