import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocationSingleData } from "../../store/actions";
import { CommonPageLayout } from "../../components/common/page/CommonPageLayout";
import { useParams } from "react-router-dom";

const LocationSinglePage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, locationSingle } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { uid } = useParams();

  const data = uid ? locationSingle[uid] : null;

  // fetch data
  useEffect(() => {
    if (uid && !locationSingle[uid]) {
      dispatch(fetchLocationSingleData(uid!));
    }
  }, [locationSingle, dispatch, uid]);

  return (
    <CommonPageLayout
      loading={loading}
      content={data}
      title={data?.header_title}
    />
  );
};

export default LocationSinglePage;
