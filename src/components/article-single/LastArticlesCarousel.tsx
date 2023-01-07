import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticlesData } from "../../store/actions";
import { Spinner } from "../../components/common/spinner/Spinner";
import { NextArrowButton, PrevArrowButton } from "../carousel";
import { Article } from "../../helpers/articles-page/articlesPageHelper";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  // fade: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextArrowButton />,
  prevArrow: <PrevArrowButton />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const LastArticlesCarousel: React.FC = (): JSX.Element => {
  // get state
  const { loading, articles } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!articles || articles.length === 0) {
      dispatch(fetchArticlesData());
    }
  }, [dispatch, articles]);

  if (loading.loading || !articles || articles.length === 0) return <Spinner />;

  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="col-12 mb-2">
          <h4 className="text-white text-center letter-spacing-05">
            Our last articles
          </h4>
        </div>
      </div>
      <div className="col-12 px-4 mt-2 mb-3">
        <Slider {...settings}>
          {articles.map(
            (article: Article, index: number): JSX.Element | null => {
              if (index < 9)
                return (
                  <div
                    className="text-center carousel-single-wrapper px-3"
                    key={index}
                  >
                    <h5 className="text-white letter-spacing-1 mb-3">
                      {article.title}
                    </h5>
                    <p className="text-small text-gray">
                      {article.description && article.description.length > 100
                        ? article.description.substr(0, 100) + "..."
                        : article.description || ""}
                    </p>
                    <Link
                      to={`/blog/${article.uid}`}
                      className="btn btn-white-outline btn--small text-white shadow"
                    >
                      Read more
                    </Link>
                  </div>
                );

              return null;
            }
          )}
        </Slider>
      </div>
    </div>
  );
};
