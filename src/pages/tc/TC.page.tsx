import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { fetchTCsData } from "../../store/actions";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { ImgSEO } from "../../components/common/SEO/ImgSEO";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { RichTextComponent } from "../../components/rich-text/RichText";
import { Spinner } from "../../components/common/spinner/Spinner";
import { EnquireButton } from "../../components/common/enquire-button/EnquireButton";

export const TC: React.FC<any> = (): JSX.Element => {
  // get state
  const { loading, tc } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!tc.content) {
      dispatch(fetchTCsData());
    }
  }, [tc.content, dispatch]);

  // Get bg_image
  const bg_image =
    tc && tc.content && tc.content.bg_image && tc.content.bg_image.url
      ? tc.content.bg_image.url
      : null;

  return (
    <div>
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      {/* <HeaderImage title="Terms and conditions" img={bg_image} size="small" /> */}
      <HeaderImage img={bg_image} size="medium">
        <HeaderLogo />
        <h1 className="text-center text-white letter-spacing-4">
          Terms and Conditions
        </h1>
      </HeaderImage>
      <ImgSEO
        url={bg_image}
        alt="Terms and Conditions - The Echelon Scene Gay matchmaking agency London"
      />
      <div className="bg-white m-auto">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              {loading.loading ? (
                <Spinner dark={true} />
              ) : (
                <RichTextComponent
                  content={tc.content ? tc.content.content : null}
                  color="dark"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <EnquireButton />
    </div>
  );
};
