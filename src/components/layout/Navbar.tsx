import React, { useState } from "react";
import { NavbarLink } from "./NavbarLink";
import Logo from "../../assets/imgs/echelon-logo.png";

export const Navbar: React.FC = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  const onClickMenuButton = (): void => {
    setVisible(!visible);
  };

  return (
    <nav className="navbar-mobile">
      <button
        className="navbar-mobile__button shadow"
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={onClickMenuButton}
      >
        {visible ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>

      <div
        className={
          visible
            ? "navbar-mobile__main shadow-xl navbar-mobile__main--visible"
            : "navbar-mobile__main shadow-xl"
        }
      >
        <div className="col-12 text-center mb-5">
          <p className="small mb-3 letter-spacing-6">THE</p>
          <img
            src={Logo}
            alt="The Echelon Scene - Gay Matchmaking London, New York, Toronto"
            className="navbar-mobile__logo mb-3"
          />
          <p className="small letter-spacing-6 mb-0">SCENE</p>
        </div>
        <ul className="navbar-nav ml-5">
          <NavbarLink url="/" name="Home" onClick={onClickMenuButton} />
          <NavbarLink
            url="/clients"
            name="Clients"
            onClick={onClickMenuButton}
          />
          <NavbarLink
            url="/founder"
            name="Founder"
            onClick={onClickMenuButton}
          />
          <NavbarLink
            url="/how-we-work"
            name="How we work"
            onClick={onClickMenuButton}
          />
          <NavbarLink url="/levels" name="Levels" onClick={onClickMenuButton} />
          <NavbarLink
            url="/locations"
            name="Locations"
            onClick={onClickMenuButton}
          />
          <NavbarLink
            url="/locations/london"
            name="London"
            onClick={onClickMenuButton}
            ml
          />
          <NavbarLink
            url="/locations/new-york"
            name="New York"
            onClick={onClickMenuButton}
            ml
          />
          <NavbarLink
            url="/locations/toronto"
            name="Toronto"
            onClick={onClickMenuButton}
            ml
          />
          <NavbarLink
            url="/testimonials"
            name="Testimonials"
            onClick={onClickMenuButton}
          />
          <NavbarLink url="/faq" name="FAQ" onClick={onClickMenuButton} />
          <NavbarLink
            url="/contact"
            name="Contact"
            onClick={onClickMenuButton}
          />
        </ul>
        <div className="col-12 text-center mb-4">
          <button className="btn btn-white shadow">ENQUIRE</button>
        </div>
        <div className="col-12 mb-2">
          <div className="row d-flex flex-row justify-content-center">
            <a
              className="navbar-mobile__icon mr-4"
              href="https://www.facebook.com/theechelonscene"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="navbar-mobile__icon mr-4"
              href="https://twitter.com/TheEchelonScene"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="navbar-mobile__icon mr-4"
              href="https://www.linkedin.com/company/theechelonscene/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="navbar-mobile__icon"
              href="https://www.instagram.com/TheEchelonScene/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
