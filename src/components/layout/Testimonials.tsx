import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTestimonials } from "../../store/actions/testimonials";
import { Spinner } from "../common/spinner/Spinner";
import Slider from "react-slick";

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
    <div className="container py-5 testimonials">
      <h2 className="text-white text-center letter-spacing-2 mb-4">
        Testimonials
      </h2>
      <Slider {...settings}>
        {testimonials.map(
          (item: string, index: number): JSX.Element => (
            <p
              className="testimonials__single text-center text-white letter-spacing-05"
              key={index}
            >
              {item}
            </p>
          )
        )}
      </Slider>
    </div>
  );
};
