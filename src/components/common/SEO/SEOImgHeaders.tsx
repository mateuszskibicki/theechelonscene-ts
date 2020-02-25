import React from "react";
import Helmet from "react-helmet";
import { ImgSEO } from "./ImgSEO";

interface IProps {
  title: string;
  img_url: string;
}

export const SEOImgHeaders: React.FC<IProps> = ({
  title,
  img_url
}): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 className="d-none">
        {title} - Gay Matchmaking Agency - London New York Berlin Toronto - The
        Echelon Scene
      </h1>
      <h2 className="d-none">
        {title} - Gay Matchmaking Agency - London New York Berlin Toronto - The
        Echelon Scene
      </h2>
      <h3 className="d-none">
        {title} - Gay Matchmaking Agency - London New York Berlin Toronto - The
        Echelon Scene
      </h3>
      <ImgSEO
        url={img_url}
        alt={
          title
            ? `${title} - Gay Matchmaking Agency - London New York Berlin Toronto - The
        Echelon Scene`
            : "Gay Matchmaking Agency - London New York Berlin Toronto - The Echelon Scene"
        }
      />
    </>
  );
};
