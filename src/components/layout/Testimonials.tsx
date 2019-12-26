import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTestimonials } from "../../store/actions/testimonials";

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
  }, [dispatch, fetchTestimonials, testimonials]);

  // on loading
  if (loading) return <h1>LOADING</h1>;

  //component
  return <div>testimonials</div>;
};
