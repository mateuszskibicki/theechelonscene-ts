import React from "react";
import { LastArticlesCarousel } from "../article-single/LastArticlesCarousel";

export const SuccessResponseBlock: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="row justify-content-center my-5 d-lg-none">
        <h5 className="text-center text-white letter-spacing-4">
          Thank you for contacting us.
        </h5>
        <h5 className="text-center text-white letter-spacing-4">
          Jacqueline will be in touch shortly
        </h5>
      </div>
      <div className="row justify-content-center my-5 d-none d-lg-flex">
        <div className="col-12 mb-4">
          <h5 className="text-center text-white letter-spacing-4">
            Thank you for contacting us.
          </h5>
          <h5 className="text-center text-white letter-spacing-4">
            Jacqueline will be in touch shortly
          </h5>
          <h5 className="text-center text-white letter-spacing-4">
            In the meantime your welcome to check our latest blog articles.
          </h5>
        </div>
        <LastArticlesCarousel />
      </div>
    </div>
  );
};
