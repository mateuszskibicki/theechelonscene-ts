import React, { useState } from "react";
import { NavbarLink } from "./NavbarLink";

export const Navbar: React.FC = (): JSX.Element => {
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  const onClickURL = (name: string): void => {
    setActive(name);
    setVisible(false);
  };

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
        <i className="fas fa-bars"></i>
      </button>

      <div
        className={
          visible
            ? "navbar-mobile__main navbar-mobile__main--visible"
            : "navbar-mobile__main"
        }
      >
        <ul className="navbar-nav mr-auto">
          <NavbarLink
            url="/"
            name="Home"
            onClick={onClickURL}
            active={active === "Home"}
          />
          <NavbarLink
            url="/clients"
            name="Clients"
            onClick={onClickURL}
            active={active === "Clients"}
          />
          <NavbarLink
            url="/founder"
            name="Founder"
            onClick={onClickURL}
            active={active === "Founder"}
          />
          <NavbarLink
            url="/how-we-work"
            name="How we work"
            onClick={onClickURL}
            active={active === "How we work"}
          />
          <NavbarLink
            url="/levels"
            name="Levels"
            onClick={onClickURL}
            active={active === "Levels"}
          />
          <NavbarLink
            url="/location"
            name="Location"
            onClick={onClickURL}
            active={active === "Location"}
          />
          <NavbarLink
            url="/tc"
            name="Terms and conditions"
            onClick={onClickURL}
            active={active === "Terms and conditions"}
          />
          <NavbarLink
            url="/faq"
            name="FAQ"
            onClick={onClickURL}
            active={active === "FAQ"}
          />
          <NavbarLink
            url="/contact"
            name="Contact"
            onClick={onClickURL}
            active={active === "Contact"}
          />
        </ul>
      </div>
    </nav>
  );
};
