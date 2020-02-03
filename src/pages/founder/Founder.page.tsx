import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFounderData } from "../../store/actions";
import { CommonPageLayout } from "../../components/common/page/CommonPageLayout";

const FounderPage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, founder } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!founder.content) {
      dispatch(fetchFounderData());
    }
  }, [founder.content, dispatch]);

  return (
    <CommonPageLayout
      loading={loading}
      content={founder.content}
      title="Founder"
    />
  );
};

export default React.memo(FounderPage);
