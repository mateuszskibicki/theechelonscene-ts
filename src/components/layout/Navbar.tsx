import React, { useState } from "react";
import { NavbarLink } from "./NavbarLink";
import { MenuIcon, MenuCloseIcon } from "../common/icons/Icons";

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
        {visible ? <MenuCloseIcon /> : <MenuIcon />}
      </button>

      <div
        className={
          visible
            ? "navbar-mobile__main shadow-xl navbar-mobile__main--visible"
            : "navbar-mobile__main shadow-xl"
        }
      >
        <ul className="navbar-nav px-5">
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
            url="/testimonials"
            name="Testimonials"
            onClick={onClickMenuButton}
          />
          <NavbarLink url="/faq" name="FAQ" onClick={onClickMenuButton} />
          <button className="btn btn--small btn-white-outline shadow w-auto navbar-mobile__contact-button">
            CONTACT
          </button>
        </ul>
      </div>
    </nav>
  );
};
