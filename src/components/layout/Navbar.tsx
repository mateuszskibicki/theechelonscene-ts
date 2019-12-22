import React, { useState } from "react";
import { NavbarLink } from "./NavbarLink";

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
        <ul className="navbar-nav mr-auto">
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
          <NavbarLink url="/faq" name="FAQ" onClick={onClickMenuButton} />
          <NavbarLink
            url="/contact"
            name="Contact"
            onClick={onClickMenuButton}
          />
        </ul>
      </div>
    </nav>
  );
};
