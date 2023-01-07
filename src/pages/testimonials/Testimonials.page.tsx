import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { ImgSEO } from "../../components/common/SEO/ImgSEO";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { Spinner } from "../../components/common/spinner/Spinner";
import bgIMG from "../../assets/imgs/new3.jpeg";
import { fetchTestimonialsSEO, fetchTestimonials } from "../../store/actions";
import { Link } from "react-router-dom";

const TestimonialsPage: React.FC<any> = (): JSX.Element | null => {
  // data from redux
  const { testimonials, loading } = useSelector(
    (state: any) => state.testimonials
  );

  const [fadeNumber, setFadeNumber] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (testimonials && testimonials.length === 0) {
      dispatch(fetchTestimonials());
      dispatch(fetchTestimonialsSEO());
    } else {
      setTimeout(() => {
        if (fadeNumber + 1 === testimonials.length) {
          setFadeNumber(0);
        } else {
          setFadeNumber(fadeNumber + 1);
        }
      }, 9000);
    }
  }, [dispatch, fadeNumber, testimonials]);

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
      <HeaderImage img={bgIMG} size="medium" position="center">
        <HeaderLogo />
        <h1 className="text-center text-white letter-spacing-4 mb-4">
          Reviews
        </h1>
        <Link to="/contact" className="btn btn--small btn-white-outline">
          ENQUIRE
        </Link>
      </HeaderImage>
      <h1 className="d-none">
        Reviews The Echelon Scene - Gay Matchmaking Agency - London New York
        Berlin Toronto
      </h1>
      <h2 className="d-none">
        Reviews The Echelon Scene - Gay Matchmaking Agency - London New York
        Berlin Toronto
      </h2>
      <ImgSEO
        url={bgIMG}
        alt={
          "Testimonials, reviews, endorsements - gay matchmaking agency London - The Echelon Scene"
        }
      />
      <div className="testimonials-page__wrapper">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="text-white text-center mb-4">
                Our services are getting amazing reviews from all around the
                world!
              </h2>
            </div>
          </div>
          <div className="testimonials-page__wrapper-group">
            {testimonials.map(
              (
                testimonial: {
                  content: string;
                },
                index: number
              ): JSX.Element | null => {
                if (index === fadeNumber)
                  return (
                    <div
                      className="py-5 px-4 h-100 text-center testimonials-page__single"
                      key={index}
                    >
                      <p className="text-white text-center mb-0">
                        <span className="testimonials-page__single-quote">
                          "
                        </span>
                        {testimonial.content}
                        <span className="testimonials-page__single-quote testimonials-page__single-quote--last">
                          ”
                        </span>
                      </p>
                    </div>
                  );
                return null;
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
