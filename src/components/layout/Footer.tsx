import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = (): JSX.Element => {
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

  return (
    <div className="footer py-4">
      <div className="container">
        {/* Mobile only */}
        <div className="row d-md-none">
          <div className="col-12 mb-3">
            <p className="text-xs text-white mb-0 text-center">
              Copyright © 2018 The Echelon Sence
            </p>
          </div>

          <div className="col-12">
            <div className="row d-flex flex-row justify-content-center">
              <FooterSocialIcons />
            </div>
          </div>

          <div className="col-12 text-center my-2">
            <button className="btn btn--xsmall btn-white-outline">
              ENQUIRE
            </button>
          </div>

          <div className="col-12 mb-2">
            <div className="row d-flex flex-row">
              <div className="col-4 px-1 text-center">
                <Link to="/" className="text-white text-xs">
                  Home
                </Link>
              </div>
              <div className="col-4 px-1 text-center">
                <Link to="/clients" className="text-white text-xs">
                  Clients
                </Link>
              </div>
              <div className="col-4 px-1 text-center">
                <Link to="/founder" className="text-white text-xs">
                  Founder
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="row d-flex flex-row">
              <div className="col-4 px-1 text-center">
                <Link to="/how-we-work" className="text-white text-xs">
                  How we work
                </Link>
              </div>
              <div className="col-4 px-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  Levels
                </Link>
              </div>
              <div className="col-4 px-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  Testimonials
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="row d-flex flex-row">
              <div className="col-12">
                <p className="mb-1 text-center text-sm text-600">Locations:</p>
              </div>
              <div className="col-4 px-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  London
                </Link>
              </div>
              <div className="col-4 px-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  New York
                </Link>
              </div>
              <div className="col-4 px-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  Toronto
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <Link to="/tc" className="text-white text-xs">
              Terms and conditions
            </Link>
          </div>
        </div>

        {/* desktop */}
        <div className="row d-none d-md-flex">
          <div className="col-12 mb-3">
            <div className="row">
              <div className="col-5">
                <p className="text-xs text-white mb-0">
                  Copyright © 2018 The Echelon Sence
                </p>
              </div>
              <div className="col-5">
                <FooterSocialIcons margin={"small"} />
              </div>
              <div className="col-2 text-right">
                <button className="btn btn--xsmall btn-white-outline">
                  ENQUIRE
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="row justify-content-center">
              <div className="col-2 col-xl-1 text-center">
                <Link to="/" className="text-white text-xs">
                  Home
                </Link>
              </div>
              <div className="col-2 col-xl-1 text-center">
                <Link to="/clients" className="text-white text-xs">
                  Clients
                </Link>
              </div>
              <div className="col-2 col-xl-1 text-center">
                <Link to="/founder" className="text-white text-xs">
                  Founder
                </Link>
              </div>
              <div className="col-2 text-center d-xl-none">
                <Link to="/how-we-work" className="text-white text-xs">
                  How we work
                </Link>
              </div>
              <div className="col-2 col-xl-1 mx-2 px-0 text-center d-none d-xl-flex justofy-content-center align-items-center">
                <Link
                  to="/how-we-work"
                  className="text-white text-center w-100 m-auto text-xs"
                >
                  How we work
                </Link>
              </div>
              <div className="col-2 col-xl-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  Levels
                </Link>
              </div>
              <div className="col-2 col-xl-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  Testimonials
                </Link>
              </div>

              <div className="col-2 col-xl-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  London
                </Link>{" "}
              </div>
              <div className="col-2 col-xl-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  New York
                </Link>{" "}
              </div>

              <div className="col-2 col-xl-1 text-center">
                <Link to="/levels" className="text-white text-xs">
                  Toronto
                </Link>{" "}
              </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <Link to="/tc" className="text-white text-xs">
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
