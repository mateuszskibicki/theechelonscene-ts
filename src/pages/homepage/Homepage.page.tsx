import React from "react";
import Helmet from "react-helmet";
import { HomepageHeader } from "../../components/homepage/HomepageHeader";
import { HomepageLocations } from "../../components/homepage/HomepageLocations";
import { HomepageHowWeWork } from "../../components/homepage/HomepageHowWeWork";

export const Homepage: React.FC<any> = (): JSX.Element => {
  return (
    <div className="homepage">
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <HomepageHeader />
      <HomepageHowWeWork />
      <HomepageLocations />
      {/* <HomepageLastBlog /> */}
      {/* <HomepageReviews /> */}
    </div>
  );
};
