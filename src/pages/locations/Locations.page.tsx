import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocationsMainData } from "../../store/actions";
import { CommonPageLayout } from "../../components/common/page/CommonPageLayout";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { NextArrowButton, PrevArrowButton } from "../../components/carousel";

interface ILocationsArray {
  name: string;
  url: string;
  description: string;
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrowButton />,
  prevArrow: <PrevArrowButton />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 800,
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

const LocationsPage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, locationsMain } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!locationsMain.content) {
      dispatch(fetchLocationsMainData());
    }
  }, [locationsMain.content, dispatch]);

  return (
    <>
      <CommonPageLayout
        loading={loading}
        content={locationsMain.content}
        title="Locations"
      />
      <div className="container mt-5 mb-3">
        <div className="row justify-content-center">
          <div className="col-12 mb-3">
            <h2 className="text-white text-center letter-spacing-05">
              {locationsMain?.content?.title}
            </h2>
          </div>
        </div>
        <div className="col-12 px-4 mt-5 mb-5">
          <Slider {...settings}>
            {locationsMain?.content?.locations?.map(
              (location: ILocationsArray): JSX.Element => (
                <div
                  className="text-center carousel-single-wrapper px-3"
                  key={location.name}
                >
                  <h2 className="text-white letter-spacing-1 mb-3">
                    {location.name}
                  </h2>
                  <p className="text-small text-gray">{location.description}</p>
                  <Link
                    to={`/location/${location.url}`}
                    className="btn btn-white-outline btn--small text-white shadow"
                  >
                    Read more
                  </Link>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LocationsPage;
