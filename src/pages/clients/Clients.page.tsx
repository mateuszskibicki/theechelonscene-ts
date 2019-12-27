import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { fetchClientsData } from "../../store/actions";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { ImgSEO } from "../../components/common/SEO/ImgSEO";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { RichTextComponent } from "../../components/rich-text/RichText";
import { Spinner } from "../../components/common/spinner/Spinner";

export const Clients: React.FC<any> = (): JSX.Element => {
  // get state
  const { loading, clients } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!clients.content) {
      dispatch(fetchClientsData());
    }
  }, [clients.content, dispatch]);

  // Get bg_image
  const bg_image =
    clients &&
    clients.content &&
    clients.content.bg_image &&
    clients.content.bg_image.url
      ? clients.content.bg_image.url
      : null;

  return (
    <div>
      <Helmet>
        <meta property="og:type" content="website" />
      </Helmet>
      <HeaderImage img={bg_image} size="medium" position="left">
        <HeaderLogo />
        <h1 className="text-center text-white letter-spacing-4 mb-4">
          Clientele
        </h1>
        <button className="btn btn-white">ENQUIRE</button>
      </HeaderImage>
      <ImgSEO
        url={bg_image}
        alt="Clientele - The Echelon Scene Gay matchmaking agency London"
      />
      <div className="bg-dark m-auto">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              {loading.loading ? (
                <Spinner dark={true} />
              ) : (
                <RichTextComponent
                  content={clients.content ? clients.content.content : null}
                  color="white"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
