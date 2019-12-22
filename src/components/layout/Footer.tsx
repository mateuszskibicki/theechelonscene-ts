import React from "react";
import { FooterLink } from "./FooterLink";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mb-3">
            <p className="footer__name mb-1 text-center d-md-none white-smoke">
              Copyright © 2018 The Echelon Scene
            </p>
            <p className="footer__name mb-1 d-none d-md-block white-smoke">
              Copyright © 2018 The Echelon Scene
            </p>
          </div>
          <div className="col-12 col-md-4 ml-auto">
            <div className="row d-flex flex-row justify-content-around">
              <FooterLink url="/" name="Facebook" />
              <FooterLink url="/" name="Twitter" />
              <FooterLink url="/" name="Linkedin" />
              <FooterLink url="/" name="Instagram" />
            </div>
          </div>
          <div className="col-6 col-sm-4 mt-3 text-center">
            <FooterLink url="/" name="Home" />
            <FooterLink url="/clients" name="Clients" />
            <FooterLink url="/founder" name="Founder" />
            <FooterLink url="/levels" name="Levels" />
          </div>
          <div className="col-6 col-sm-4 mt-3 text-center">
            <FooterLink url="/locations" name="Locations" />
            <FooterLink url="/locations/london" name="London" />
            <FooterLink url="/locations/new-york" name="New York" />
            <FooterLink url="/locations/toronto" name="Toronto" />
          </div>
          <div className="col-6 col-sm-4 mt-3 text-center mx-auto">
            <FooterLink url="/how-we-work" name="How we work" />
            <FooterLink url="/faq" name="FAQ" />
            <FooterLink url="/contact" name="Contact" />
            <FooterLink url="/tc" name="Terms and Conditions" />
          </div>
        </div>
      </div>
    </div>
  );
};
