import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleSingleData } from "../../store/actions";
import { CommonPageLayout } from "../../components/common/page/CommonPageLayout";
import { useParams } from "react-router-dom";

const ArticleSinglePage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, articleSingle } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { uid } = useParams();

  const data = uid ? articleSingle[uid] : null;

  // fetch data
  useEffect(() => {
    if (uid && !articleSingle[uid]) {
      dispatch(fetchArticleSingleData(uid!));
    }
  }, [articleSingle, dispatch, uid]);

  return (
    <CommonPageLayout
      loading={loading}
      content={data}
      title={data?.header_title}
    />
  );
};

export default ArticleSinglePage;
