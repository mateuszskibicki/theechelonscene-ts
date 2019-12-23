import React from "react";
import Helmet from "react-helmet";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchTCsData } from "../../store/actions";
import { HomepageHeader } from "../../components/homepage/HomepageHeader";
import LondonImage from "../../assets/imgs/hp-london.jpg";
import NewYorkImage from "../../assets/imgs/hp-ny.jpg";
import TorontoImage from "../../assets/imgs/hp-toronto.jpg";

export const Homepage: React.FC<any> = (): JSX.Element => {
  return (
    <div className="homepage">
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <HomepageHeader />
      <div className="homepage__locations">
        <div className="container my-4">
          <div className="row">
            <div className="col-12 mb-3">
              <h3 className="text-center">Find your perfect location</h3>
            </div>
            <div className="col-12 col-sm-4 mb-3 homepage__locations-single">
              <img
                src={LondonImage}
                alt="The Echelon Scene - gay matchmaking agency in London"
                className="img-fluid shadow rounded"
              />
            </div>
            <div className="col-12 col-sm-4 mb-3 homepage__locations-single">
              <img
                src={NewYorkImage}
                alt="The Echelon Scene - gay matchmaking agency in New York"
                className="img-fluid shadow rounded"
              />
            </div>
            <div className="col-12 col-sm-4 mb-3 homepage__locations-single">
              <img
                src={TorontoImage}
                alt="The Echelon Scene - gay matchmaking agency in Toronto"
                className="img-fluid shadow rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
