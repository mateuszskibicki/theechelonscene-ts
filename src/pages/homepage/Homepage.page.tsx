import React from "react";
import Helmet from "react-helmet";
import { HomepageHeader } from "../../components/homepage/HomepageHeader";

export const Homepage: React.FC<any> = (): JSX.Element => {
  return (
    <div className="homepage">
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <HomepageHeader />
    </div>
  );
};
