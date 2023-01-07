import React from "react";
import profileImg from "../../assets/imgs/profile.jpg";
import { Link } from "react-router-dom";

export const BlockAboutFounder: React.FC = (): JSX.Element => {
  return (
    <div className="col-12">
      <div className="row justify-content-center align-items-center pt-4">
        <div className="col-8 col-sm-6 col-md-3 col-lg-2 mb-3">
          <img
            src={profileImg}
            alt="Jacqueline Burns - Gay Matchmaker - The Echelon Scene"
            className="shadow rounded-circle img-fluid"
          />
        </div>
        <div className="col-12 col-sm-8 col-md-7 col-lg-6">
          <p className="text-white letter-spacing-1 mb-2">
            By Jacqueline Burns
          </p>
          <p className="text-white letter-spacing-1 mb-2">
            Founder of
            <span className="text-red ml-2">The Echelon Scene</span>
          </p>
          <p className="text-white letter-spacing-1 mb-3">
            The Echelon Scene is an offline gay matchmaking agency for eligible
            gay men seeking a long term partner
          </p>
          <Link to="/contact" className="btn btn--small btn-white-outline">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
