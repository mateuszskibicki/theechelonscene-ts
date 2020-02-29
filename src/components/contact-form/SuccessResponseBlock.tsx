import React from "react";
import { LastArticlesCarousel } from "../article-single/LastArticlesCarousel";

export const SuccessResponseBlock: React.FC = (): JSX.Element => {
  return (
    <div className="row justify-content-center my-5">
      <div className="col-12">
        <h4 className="text-center text-white letter-spacing-4">
          Thank you for contacting us.
        </h4>
        <h4 className="text-center text-white letter-spacing-4">
          Jacqueline will be in touch shortly
        </h4>
        <h4 className="text-center text-white letter-spacing-4">
          In the meantime your welcome to check our latest blog articles.
        </h4>
      </div>
      <LastArticlesCarousel />
    </div>
  );
};
