import React, { useState } from "react";
import { NavbarLink } from "./NavbarLink";
import { MenuIcon, MenuCloseIcon } from "../common/icons/Icons";
import { Link } from "react-router-dom";
import { NewsletterModal } from "../newsletter-modal";
import { useNewsletterModal } from "../../hooks/useNewsletterModal";

export const Navbar: React.FC = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  const { isOpen, openModal, closeModal } = useNewsletterModal();

  const onClickMenuButton = (): void => {
    setVisible(!visible);
  };

  return (
    <>
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
            name="Clientele"
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
          <NavbarLink url="/blog" name="Blog" onClick={onClickMenuButton} />
          <NavbarLink
            url="/reviews"
            name="Reviews"
            onClick={onClickMenuButton}
          />
          <NavbarLink url="/press" name="Press" onClick={onClickMenuButton} />
          <NavbarLink
            url="/locations"
            name="Locations"
            onClick={onClickMenuButton}
          />
          <Link
            to="/contact"
            className="btn btn--small btn-white-outline shadow w-auto navbar-mobile__contact-button"
            onClick={onClickMenuButton}
          >
            CONTACT
          </Link>
          <button
            onClick={() => {
              openModal();
              onClickMenuButton();
            }}
            className="btn btn--small btn-white-outline shadow w-auto navbar-mobile__contact-button mt-3 newsletter-trigger"
          >
            JOIN THE NEWSLETTER
          </button>
        </ul>
      </div>

      <NewsletterModal isOpen={isOpen} onClose={closeModal} />
    </nav>
    </>
  );
};
