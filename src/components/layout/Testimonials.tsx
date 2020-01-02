import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTestimonials } from "../../store/actions/testimonials";
import { Spinner } from "../common/spinner/Spinner";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export const Testimonials: React.FC = (): JSX.Element => {
  // data from redux
  const { testimonials, loading } = useSelector(
    (state: any) => state.testimonials
  );
  // dispatch function
  const dispatch = useDispatch();
  // on load
  useEffect(() => {
    if (testimonials && testimonials.length === 0) {
      dispatch(fetchTestimonials());
    }
  }, [dispatch, testimonials]);

  // on loading
  if (loading) return <Spinner />;

  //component
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container py-4 shadow-sm my-4 testimonials text-center">
      <h3 className="text-white text-center letter-spacing-2 mb-3">
        Testimonials
      </h3>
      <Slider {...settings}>
        {testimonials.map(
          (
            item: { content: string; img: object },
            index: number
          ): JSX.Element | null => {
            if (index > 2) return null;
            return (
              <p
                className="testimonials__single small text-center text-white letter-spacing-05"
                key={index}
              >
                {item.content}
              </p>
            );
          }
        )}
      </Slider>
      <Link
        to="/testimonials"
        className="btn btn--small btn-white-outline shadow mt-5"
      >
        READ MORE
      </Link>
    </div>
  );
};
