import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { fetchTCsData } from "../../store/actions";
import { HeaderImage } from "../../components/header-image/HeaderImage";

export const TC: React.FC<any> = (): JSX.Element => {
  // get state
  const { loading, tc } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!tc.content) {
      dispatch(fetchTCsData());
    }
  }, [fetchTCsData, tc.content]);

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
      <HeaderImage title="Terms and conditions" img={bg_image} size="xsmall" />
    </div>
  );
};
