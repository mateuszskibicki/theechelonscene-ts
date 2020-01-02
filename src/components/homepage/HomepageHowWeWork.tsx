import React from "react";
import hp1IMG from "../../assets/imgs/homepage/homepage1.jpg";
import hp2IMG from "../../assets/imgs/homepage/homepage2.jpg";
import hp3IMG from "../../assets/imgs/homepage/homepage3.jpg";
import hp4IMG from "../../assets/imgs/homepage/homepage4.jpg";
import { ImgSEO } from "../common/SEO/ImgSEO";

export const HomepageHowWeWork: React.FC = (): JSX.Element => {
  return (
    <div className="homepage__how-we-work">
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-xl-3 p-0">
            <div
              className="homepage__how-we-work-single"
              style={{ backgroundImage: `url(${hp1IMG})` }}
            >
              <ImgSEO
                url={hp1IMG}
                alt="How we work - The Echelon Scene Gay matchmaking agency"
              />
              <h3 className="mb-3">How we work</h3>
              <p className="mb-3">
                The Echelon Scene delivers a proactive and personal service to
                each of their Clients, that's why we have 85% success rate.
              </p>
              <button className="btn btn-white-outline btn--small shadow">
                READ MORE <i className="fas fa-arrow-right ml-3" />
              </button>
            </div>
          </div>
          {/* More about founder */}
          <div className="col-12 col-md-6 col-xl-3 p-0">
            <div
              className="homepage__how-we-work-single"
              style={{ backgroundImage: `url(${hp2IMG})` }}
            >
              <ImgSEO
                url={hp2IMG}
                alt="About founder - The Echelon Scene Gay matchmaking agency London Jacqueline"
              />
              <h3 className="mb-3">About founder</h3>
              <p className="mb-3">
                Jacqueline has been a well-known feature in both the gay world
                and the matchmaking world for the past 9 years.
              </p>
              <button className="btn btn-white-outline btn--small shadow">
                READ MORE <i className="fas fa-arrow-right ml-3" />
              </button>
            </div>
          </div>
          {/* More about founder */}
          <div className="col-12 col-md-6 col-xl-3 p-0">
            <div
              className="homepage__how-we-work-single"
              style={{ backgroundImage: `url(${hp3IMG})` }}
            >
              <ImgSEO
                url={hp3IMG}
                alt="Our Clietnele - The Echelon Scene Gay matchmaking agency London New York Toronto"
              />
              <h3 className="mb-3">Our clientele</h3>
              <p className="mb-3">
                The Echelon Scene meets on average two incredible single gay
                men, every single day.
              </p>
              <button className="btn btn-white-outline btn--small shadow">
                READ MORE <i className="fas fa-arrow-right ml-3" />
              </button>
            </div>
          </div>
          {/* Our locations */}
          <div className="col-12 col-md-6 col-xl-3 p-0">
            <div
              className="homepage__how-we-work-single"
              style={{ backgroundImage: `url(${hp4IMG})` }}
            >
              <ImgSEO
                url={hp4IMG}
                alt="Our Locations - We provide our service in London, New York, Toronto and we plan to expand.- The Echelon Scene Gay matchmaking agency London New York Toronto"
              />
              <h3 className="mb-3">Our locations</h3>
              <p className="mb-3">
                We provide our service in London, New York, Toronto and we plan
                to expand.
              </p>
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
