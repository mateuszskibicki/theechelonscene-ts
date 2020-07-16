import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticlesData } from "../../store/actions";
import { Spinner } from "../../components/common/spinner/Spinner";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import img_BG from "../../assets/imgs/new2.jpg";
import { Article } from "../../helpers/articles-page/articlesPageHelper";
import { Link } from "react-router-dom";
import { SEOImgHeaders } from "../../components/common/SEO/SEOImgHeaders";

const MediaPage: React.FC<any> = (): JSX.Element | null => {
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
    <div className="aritcles-page">
      {/* SEO starts */}
      <SEOImgHeaders img_url={img_BG} title={"Media, blog, articles, gay"} />
      {/* SEO ends */}
      <HeaderImage img={img_BG} size="medium">
        <HeaderLogo />
        <h1 className="text-center text-white letter-spacing-4 mb-4">Media</h1>
        <Link to="/contact" className="btn btn--small btn-white-outline">
          CONTACT
        </Link>
      </HeaderImage>
      <div className="container py-4 px-3 text-white">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="row">
              <div className="col-12 mb-3">
                <h2 className="letter-spacing-1">Our latests blogs</h2>
              </div>
              {articles.map(
                (article: Article, index: number): JSX.Element => (
                  <div className="col-12 mb-5" key={index}>
                    <h4 className="letter-spacing-1">{article.title}</h4>
                    <p className="text-gray letter-spacing-1">
                      <i>{article.date}</i>
                    </p>
                    <p className="letter-spacing-1">{article.description}</p>
                    <Link
                      className="btn btn-white-outline rounded-pill shadow"
                      to={`/blog/${article.uid}`}
                    >
                      Read More
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
