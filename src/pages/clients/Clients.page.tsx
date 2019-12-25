import React from "react";
import Helmet from "react-helmet";
// import { HomepageHeader } from "../../components/homepage/HomepageHeader";
// import { HomepageLocations } from "../../components/homepage/HomepageLocations";
// import { HomepageHowWeWork } from "../../components/homepage/HomepageHowWeWork";

export const Clients: React.FC<any> = (): JSX.Element => {
  return (
    <div className="clients">
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <h1>Clientelle</h1>
      {/* <HomepageHeader />
      <HomepageLocations />
      <HomepageHowWeWork /> */}
      {/* <HomepageLastBlog /> */}
      {/* <HomepageReviews /> */}
    </div>
  );
};
