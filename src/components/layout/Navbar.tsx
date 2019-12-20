import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar-mobile">
      <button
        className="navbar-mobile__button shadow"
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className="navbar-mobile__main">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"></li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/clients">Clients</Link>
          </li>
          <li className="nav-item">
            <Link to="/founder">founder</Link>
          </li>
          <li className="nav-item">
            <Link to="/how-we-work">how-we-work</Link>
          </li>
          <li className="nav-item">
            <Link to="/levels">levels</Link>
          </li>
          <li className="nav-item">
            <Link to="/location">location</Link>
          </li>
          <li className="nav-item">
            <Link to="/tc">tc</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq">faq</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
