import React from "react";
import LondonImage from "../../assets/imgs/hp-london.jpg";
import NewYorkImage from "../../assets/imgs/hp-ny.jpg";
import TorontoImage from "../../assets/imgs/hp-toronto.jpg";

export const HomepageLocations: React.FC = (): JSX.Element => {
  return (
    <div className="homepage__locations">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 mb-4">
            <h2 className="text-center text-white">
              Find your perfect location
            </h2>
          </div>

          {/* London */}
          <div className="col-12 col-lg-4 d-flex homepage__locations-single homepage__locations-single--1 mb-4">
            <img
              src={LondonImage}
              alt="The Echelon Scene - gay matchmaking agency in London"
              className="homepage__locations-image img-fluid shadow-md"
            />
            <div className="homepage__locations-name-wrapper flex-column">
              <h4 className="homepage__locations-name mb-0">London</h4>
              <button className="btn btn-white-outline btn--small shadow">
                READ MORE <i className="fas fa-arrow-right ml-3" />
              </button>
            </div>
          </div>

          {/* NY */}
          <div className="col-12 col-lg-4 d-flex homepage__locations-single homepage__locations-single--2 mb-4">
            <img
              src={NewYorkImage}
              alt="The Echelon Scene - gay matchmaking agency in New York"
              className="homepage__locations-image img-fluid shadow-md"
            />
            <div className="homepage__locations-name-wrapper homepage__locations-name-wrapper--right flex-column">
              <h4 className="homepage__locations-name mb-0">New York</h4>
              <button className="btn btn-white-outline btn--small shadow">
                READ MORE <i className="fas fa-arrow-right ml-3" />
              </button>
            </div>
          </div>

          {/* Toronto */}
          <div className="col-12 col-lg-4 d-flex homepage__locations-single homepage__locations-single--3 mb-4">
            <img
              src={TorontoImage}
              alt="The Echelon Scene - gay matchmaking agency in Toronto"
              className="homepage__locations-image img-fluid shadow-md"
            />
            <div className="homepage__locations-name-wrapper flex-column">
              <h4 className="homepage__locations-name mb-0">Toronto</h4>
              <button className="btn btn-white-outline btn--small shadow">
                READ MORE <i className="fas fa-arrow-right ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
