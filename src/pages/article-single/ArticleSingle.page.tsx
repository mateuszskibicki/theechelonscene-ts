import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleSingleData } from "../../store/actions";
import { ArticleSingleLayout } from "../../components/article-single/ArticleSingleLayout";
import { useParams } from "react-router-dom";

const ArticleSinglePage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, articleSingle } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { uid } = useParams<{uid: string}>();

  const data = uid ? articleSingle[uid] : null;

  // fetch data
  useEffect(() => {
    if (uid && !articleSingle[uid]) {
      dispatch(fetchArticleSingleData(uid!));
    }
  }, [articleSingle, dispatch, uid]);

  return <ArticleSingleLayout loading={loading} content={data} />;
};

export default ArticleSinglePage;
