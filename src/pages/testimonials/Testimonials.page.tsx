import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { ImgSEO } from "../../components/common/SEO/ImgSEO";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { Spinner } from "../../components/common/spinner/Spinner";
import bgIMG from "../../assets/imgs/contact.jpg";
// import testimonials1IMG from "../../assets/imgs/testimonials/testimonials2.jpg";
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
        <Helmet>
          <meta property="og:type" content="website" />
        </Helmet>
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
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h2 className="text-white text-center mb-4">
                Our services are getting amazing reviews from all around the
                world!
              </h2>
            </div>
            {testimonials.map(
              (
                testimonial: {
                  content: string;
                  img: { url: string; alt: string };
                },
                index: number
              ): JSX.Element | null => {
                if (!testimonial.img) return null;

                return (
                  <div className="col-12 col-md-6 mb-4" key={index}>
                    <ImgSEO
                      url={testimonial.img.url}
                      alt={testimonial.img.alt}
                    />
                    <div
                      className="testimonials-page__single shadow py-5 h-100 d-flex justify-content-center align-items-center"
                      style={{ backgroundImage: `url(${testimonial.img.url})` }}
                    >
                      <p className="text-white text-center mb-0">
                        <span className="testimonials-page__single-quote">
                          "
                        </span>
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* <div className="container pt-5 pb-3">
          <div className="row">
            <div className="col-12">
              <div className="row testimonials-page__img mb-5">
                <div className="col-12 col-sm-8 col-md-8">
                  <img
                    className="img-fluid shadow"
                    src={testimonials1IMG}
                    alt="Testimonials, reviews - The Echelon Scene - Gay Matchmaking Agency London"
                  />
                </div>
                <div className="col-12 col-sm-8 testimonials-page__img-text">
                  <h4 className="text-center text-white d-md-none mb-1 px-2">
                    London
                    <br />
                    New York <br />
                    Toronto <br />
                    We're getting amazing reviews from all around the world!
                  </h4>
                  <h3 className="text-center text-white py-5 d-none d-md-block shadow rounded">
                    <span className="mb-1 d-inline-block">London</span>
                    <br />
                    <span className="mb-1 d-inline-block">New York</span>
                    <br />
                    <span className="mb-1 d-inline-block">Toronto</span> <br />
                    We're getting amazing reviews from all around the world!{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12">
              {testimonials.map(
                (item: string, index: number): JSX.Element | null => {
                  return (
                    <p
                      className="testimonials-page__single py-4 shadow text-center text-white letter-spacing-05"
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
        </div> */}
      </div>
    </div>
  );
};
