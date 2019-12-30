import React from "react";
import { FooterLink } from "./FooterLink";
import Logo from "../../assets/imgs/echelon-logo.png";
import { Testimonials } from "./Testimonials";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="footer py-5 shadow ">
      <div className="container">
        <div className="row">
          {/* Logo and button */}
          <div className="col-12 text-center mb-4">
            <p className="small mb-3 letter-spacing-6">THE</p>
            <img
              src={Logo}
              alt="The Echelon Scene - Gay Matchmaking London, New York, Toronto"
              className="footer__logo mb-3"
            />
            <p className="small letter-spacing-6 mb-0">SCENE</p>
          </div>

          <div className="col-12 text-center mb-4">
            <button className="btn btn-white shadow">ENQUIRE</button>
          </div>

          <Testimonials />

          {/* Social media icons */}
          <div className="col-12 mb-4">
            <div className="row d-flex flex-row justify-content-center">
              <a
                className="footer__icon mr-4"
                href="https://www.facebook.com/theechelonscene"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                className="footer__icon mr-4"
                href="https://twitter.com/TheEchelonScene"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="footer__icon mr-4"
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
            </div>
          </div>
          <div className="col-6 col-sm-4 mb-4 text-center">
            <FooterLink url="/" name="Home" />
            <FooterLink url="/clients" name="Clients" />
            <FooterLink url="/founder" name="Founder" />
            <FooterLink url="/levels" name="Levels" />
          </div>
          <div className="col-6 col-sm-4 mb-4 text-center">
            <FooterLink url="/locations" name="Locations" />
            <FooterLink url="/locations/london" name="London" />
            <FooterLink url="/locations/new-york" name="New York" />
            <FooterLink url="/locations/toronto" name="Toronto" />
          </div>
          <div className="col-10 col-sm-4 mb-4 text-center mx-auto">
            <FooterLink url="/how-we-work" name="How we work" />
            <FooterLink url="/faq" name="FAQ" />
            <FooterLink url="/contact" name="Contact" />
            <FooterLink url="/tc" name="Terms and Conditions" />
          </div>

          <div className="col-12">
            <p className="footer__name mb-3 text-center white-smoke">
              Copyright © 2018 The Echelon Scene
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
