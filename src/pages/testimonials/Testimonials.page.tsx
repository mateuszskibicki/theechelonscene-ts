import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { ImgSEO } from "../../components/common/SEO/ImgSEO";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { Spinner } from "../../components/common/spinner/Spinner";
import bgIMG from "../../assets/imgs/contact.jpg";
import { fetchTestimonialsSEO, fetchTestimonials } from "../../store/actions";
import Slider from "react-slick";
import { NextArrowButton, PrevArrowButton } from "../../components/carousel";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <NextArrowButton />,
  prevArrow: <PrevArrowButton />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const TestimonialsPage: React.FC<any> = (): JSX.Element | null => {
  // data from redux
  const { testimonials, loading } = useSelector(
    (state: any) => state.testimonials
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (testimonials && testimonials.length === 0) {
      dispatch(fetchTestimonials());
      dispatch(fetchTestimonialsSEO());
    }
  }, [dispatch, testimonials]);

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
        <button className="btn btn--small btn-white-outline">ENQUIRE</button>
      </HeaderImage>
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
          <Slider {...settings}>
            {testimonials.map(
              (
                testimonial: {
                  content: string;
                },
                index: number
              ): JSX.Element => {
                return (
                  <div
                    key={index}
                    className="d-flex justify-content-center align-items-center carousel-single-wrapper"
                  >
                    <div className="py-3 px-3 h-100 text-center d-flex justify-content-center align-items-center">
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
                  </div>
                );
              }
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
