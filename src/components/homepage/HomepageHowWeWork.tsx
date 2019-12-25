import React from "react";
import HoweWeWorkIMG from "../../assets/imgs/how-we-work/how-we-work.jpg";
import AboutIMG from "../../assets/imgs/how-we-work/about.jpg";
import ClientelleIMG from "../../assets/imgs/how-we-work/clientelle.jpg";
import { ImgSEO } from "../common/SEO/ImgSEO";

export const HomepageHowWeWork: React.FC = (): JSX.Element => {
  return (
    <div className="homepage__how-we-work">
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 p-0">
            <div
              className="homepage__how-we-work-single"
              style={{ backgroundImage: `url(${HoweWeWorkIMG})` }}
            >
              <ImgSEO
                url={HoweWeWorkIMG}
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
          <div className="col-12 col-md-4 p-0">
            <div
              className="homepage__how-we-work-single"
              style={{ backgroundImage: `url(${AboutIMG})` }}
            >
              <ImgSEO
                url={HoweWeWorkIMG}
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
          <div className="col-12 col-md-4 p-0">
            <div
              className="homepage__how-we-work-single"
              style={{ backgroundImage: `url(${ClientelleIMG})` }}
            >
              <ImgSEO
                url={HoweWeWorkIMG}
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
        </div>
      </div>
    </div>
  );
};
