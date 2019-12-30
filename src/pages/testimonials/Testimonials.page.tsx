import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { fetchClientsData } from "../../store/actions";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { ImgSEO } from "../../components/common/SEO/ImgSEO";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { Spinner } from "../../components/common/spinner/Spinner";
import { RichTextComponent } from "../../components/rich-text/RichText";
import { EnquireButton } from "../../components/common/enquire-button/EnquireButton";

export const Testimonials: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, clients } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!clients.content) {
      dispatch(fetchClientsData());
    }
  }, [clients.content, dispatch]);

  if (loading.loading || !clients.content)
    return (
      <div className="bg-dark text-center py-5">
        <Spinner />
      </div>
    );

  // Get bg_image
  const bg_image =
    clients &&
    clients.content &&
    clients.content.bg_image &&
    clients.content.bg_image.url
      ? clients.content.bg_image.url
      : null;
  // Get bg_image alt
  const bg_image_alt =
    clients &&
    clients.content &&
    clients.content.bg_image &&
    clients.content.bg_image.alt
      ? clients.content.bg_image.alt
      : null;

  const {
    left_block_content,
    left_block_bg,
    right_block_1_content,
    right_block_1_bg,
    right_block_2_content,
    right_block_2_bg
  } = clients.content.content;

  return (
    <div className="clients">
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
      <ImgSEO url={bg_image} alt={bg_image_alt} />
      <div className="container-fluid">
        <div className="row">
          {/* left part */}
          <div
            className="col-12 col-md-6 clients__block text-dark letter-spacing-1"
            style={{ backgroundImage: `url(${left_block_bg.url})` }}
          >
            <ImgSEO url={left_block_bg.url} alt={left_block_bg.alt} />
            <RichTextComponent content={left_block_content} color="dark" />
          </div>
          {/* right part */}
          <div className="col-12 col-md-6">
            <div className="row">
              {/* top part */}
              <div
                className="col-12 clients__block text-dark"
                style={{ backgroundImage: `url(${right_block_1_bg.url})` }}
              >
                <ImgSEO url={right_block_1_bg.url} alt={right_block_1_bg.alt} />
                <RichTextComponent
                  content={right_block_1_content}
                  color="dark"
                />
              </div>
              {/* bottom part */}
              <div
                className="col-12 clients__block text-dark"
                style={{ backgroundImage: `url(${right_block_2_bg.url})` }}
              >
                <ImgSEO url={right_block_2_bg.url} alt={right_block_2_bg.alt} />
                <RichTextComponent
                  content={right_block_2_content}
                  color="dark"
                />
              </div>
            </div>
          </div>
          <EnquireButton />
        </div>
      </div>
    </div>
  );
};
