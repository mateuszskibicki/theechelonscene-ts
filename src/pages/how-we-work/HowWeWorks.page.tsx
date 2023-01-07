import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHowWeWork } from "../../store/actions";
import { CommonPageLayout } from "../../components/common/page/CommonPageLayout";

const HowWeWorkPage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, howWeWork } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!howWeWork.content) {
      dispatch(fetchHowWeWork());
    }
  }, [howWeWork.content, dispatch]);

  return (
    <CommonPageLayout
      loading={loading}
      content={howWeWork.content}
      title="How we work"
      bgPosition="right"
    />
  );
};

export default HowWeWorkPage;
