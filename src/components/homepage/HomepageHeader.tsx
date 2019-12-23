import React from "react";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import Logo from "../../assets/imgs/echelon-logo.png";
import HomepageBG from "../../assets/imgs/rsz_homepage.jpg";

export const HomepageHeader: React.FC = (): JSX.Element => {
  return (
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
          Matchmaking for only the most eligible gay men, who want to find their
          equal partner in love.
        </p>
        <p className="letter-spacing-05">
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
        <button className="btn btn-white shadow mr-4">ENQUIRE</button>
        <button className="btn btn-white-outline shadow">READ MORE</button>
      </div>
    </HeaderImage>
  );
};
