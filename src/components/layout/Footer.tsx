import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer: React.FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <div className="footer py-4">
      <div className="container">
        {/* Mobile only */}
        <div className="row d-md-none">
          <div className="col-12">
            <div className="row d-flex flex-row justify-content-center">
              <FooterSocialIcons />
            </div>
          </div>

          <div className="col-12 text-center my-3">
            <button className="btn btn--xsmall btn-white-outline">
              ENQUIRE
            </button>
          </div>

          <div className="col-12">
            <div className="row flex-row justify-content-center px-3">
              <div className="col-4 px-1 text-center">
                <Link to="/" className="text-white text-xs footer__link ">
                  Home
                </Link>
              </div>
              <div className="col-4 px-1 text-center mb-3">
                <Link
                  to="/clients"
                  className="text-white text-xs footer__link "
                >
                  Clients
                </Link>
              </div>
              <div className="col-4 px-1 text-center mb-3">
                <Link
                  to="/founder"
                  className="text-white text-xs footer__link "
                >
                  Founder
                </Link>
              </div>
              <div className="col-4 px-1 text-center mb-3">
                <Link
                  to="/how-we-work"
                  className="text-white text-xs footer__link "
                >
                  How we work
                </Link>
              </div>
              <div className="col-4 px-1 text-center mb-3">
                <Link to="/levels" className="text-white text-xs footer__link ">
                  Levels
                </Link>
              </div>
              <div className="col-4 px-1 text-center mb-3">
                <Link
                  to="/testimonials"
                  className="text-white text-xs footer__link "
                >
                  Testimonials
                </Link>
              </div>
              <div className="col-4 px-1 text-center mb-3">
                <Link
                  to="/testimonials"
                  className="text-white text-xs footer__link "
                >
                  Locations
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 text-center mb-3">
            <Link to="/tc" className="text-white text-xs footer__link">
              Terms and conditions
            </Link>
          </div>

          <div className="col-12">
            <p className="text-xs text-white mb-0 text-center">
              Copyright © 2018 The Echelon Sence
            </p>
          </div>
        </div>

        {/* desktop */}
        <div className="row d-none d-md-flex">
          <div className="col-12 mb-3">
            <div className="row justify-content-around">
              <div className="col-5">
                <FooterSocialIcons margin={"small"} />
              </div>
              <div className="col-3 text-right">
                <button className="btn btn--xsmall btn-white-outline">
                  ENQUIRE
                </button>
              </div>
            </div>
          </div>

          {location.pathname !== "/" && (
            <div className="col-12 mb-3">
              <div className="row justify-content-center">
                <div className="col-2 col-xl-1 text-center">
                  <Link to="/" className="text-white text-xs footer__link">
                    Home
                  </Link>
                </div>
                <div className="col-2 col-xl-1 text-center">
                  <Link
                    to="/clients"
                    className="text-white text-xs footer__link"
                  >
                    Clients
                  </Link>
                </div>
                <div className="col-2 col-xl-1 text-center">
                  <Link
                    to="/founder"
                    className="text-white text-xs footer__link"
                  >
                    Founder
                  </Link>
                </div>
                <div className="col-2 text-center d-xl-none">
                  <Link
                    to="/how-we-work"
                    className="text-white text-xs footer__link"
                  >
                    How we work
                  </Link>
                </div>
                <div className="col-2 col-xl-1 mx-2 px-0 text-center d-none d-xl-flex justofy-content-center align-items-center">
                  <Link
                    to="/how-we-work"
                    className="text-white text-center w-100 m-auto text-xs footer__link"
                  >
                    How we work
                  </Link>
                </div>
                <div className="col-2 col-xl-1 text-center">
                  <Link
                    to="/levels"
                    className="text-white text-xs footer__link"
                  >
                    Levels
                  </Link>
                </div>
                <div className="col-2 col-xl-1 text-center">
                  <Link
                    to="/testimonials"
                    className="text-white text-xs footer__link"
                  >
                    Testimonials
                  </Link>
                </div>
                <div className="col-2 col-xl-1 text-center">
                  <Link
                    to="/locations"
                    className="text-white text-xs footer__link"
                  >
                    Locations
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="col-12 text-center mb-4">
            <Link to="/tc" className="text-white text-xs footer__link">
              Terms and conditions
            </Link>
          </div>

          <div className="col-12 text-center">
            <p className="text-xs text-white mb-0">
              Copyright © 2018 The Echelon Sence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterSocialIcons: React.FC<{ margin?: string }> = ({
  margin
}): JSX.Element => (
  <>
    <a
      className={`footer__icon ${margin === "small" ? "mr-4" : "mr-5"}`}
      href="https://www.facebook.com/theechelonscene"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook"></i>
    </a>
    <a
      className={`footer__icon ${margin === "small" ? "mr-4" : "mr-5"}`}
      href="https://twitter.com/TheEchelonScene"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-twitter"></i>
    </a>
    <a
      className={`footer__icon ${margin === "small" ? "mr-4" : "mr-5"}`}
      href="https://www.linkedin.com/company/theechelonscene/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin"></i>
    </a>
    <a
      className="footer__icon"
      href="https://www.instagram.com/TheEchelonScene/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-instagram"></i>
    </a>
  </>
);
