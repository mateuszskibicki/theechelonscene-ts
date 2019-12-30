import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { ImgSEO } from "../../components/common/SEO/ImgSEO";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { Spinner } from "../../components/common/spinner/Spinner";
import { EnquireButton } from "../../components/common/enquire-button/EnquireButton";
import bgIMG from "../../assets/imgs/contact.jpg";
import testimonials1IMG from "../../assets/imgs/testimonials/testimonials1.jpg";
import { fetchTestimonialsSEO } from "../../store/actions";

export const Testimonials: React.FC<any> = (): JSX.Element | null => {
  // data from redux
  const { testimonials, loading } = useSelector(
    (state: any) => state.testimonials
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestimonialsSEO());
  }, [dispatch]);

  if (loading || !testimonials)
    return (
      <div className="bg-dark text-center py-5">
        <Spinner />
      </div>
    );

  return (
    <div className="testimonials-page">
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <HeaderImage img={bgIMG} size="medium" position="left">
        <HeaderLogo />
        <h1 className="text-center text-white letter-spacing-4 mb-4">
          Testimonials
        </h1>
        <button className="btn btn-white">ENQUIRE</button>
      </HeaderImage>
      <ImgSEO
        url={bgIMG}
        alt={
          "Testimonials, reviews, endorsements - gay matchmaking agency London - The Echelon Scene"
        }
      />
      <div className="testimonials-page__wrapper">
        <div className="container pt-5 pb-3">
          <div className="row">
            <div className="col-12">
              <div className="row testimonials-page__img mb-5">
                <div className="col-12 col-sm-8 col-md-7">
                  <img
                    className="img-fluid shadow"
                    src={testimonials1IMG}
                    alt="Testimonials, reviews - The Echelon Scene - Gay Matchmaking Agency London"
                  />
                </div>
                <div className="col-12 col-sm-8 testimonials-page__img-text">
                  <h3 className="text-center text-dark d-sm-none mb-5">
                    London
                    <br />
                    New York <br />
                    Toronto <br />
                    We're getting amazing reviews from all around the world!
                  </h3>
                  <h2 className="text-center text-dark d-none d-sm-block shadow rounded">
                    <span className="mb-2 d-inline-block">London</span>
                    <br />
                    <span className="mb-2 d-inline-block">New York</span>
                    <br />
                    <span className="mb-2 d-inline-block">Toronto</span> <br />
                    We're getting amazing reviews from all around the world!{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-12">
              {testimonials.map(
                (item: string, index: number): JSX.Element | null => {
                  return (
                    <p
                      className="testimonials-page__single py-4 shadow text-center text-dark letter-spacing-05"
                      key={index}
                    >
                      <span className="testimonials-page__single-quote">"</span>
                      {item}
                    </p>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <EnquireButton />
    </div>
  );
};
