import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">
        Navbar
      </a> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
