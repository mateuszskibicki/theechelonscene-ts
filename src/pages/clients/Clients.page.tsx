import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchClientsData } from "../../store/actions";
import { CommonPageLayout } from "../../components/common/page/CommonPageLayout";

const Clients: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, clients } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!clients.content) {
      dispatch(fetchClientsData());
    }
  }, [clients.content, dispatch]);

  return (
    <CommonPageLayout
      loading={loading}
      content={clients.content}
      title="Clientele"
    />
  );
};

export default Clients;
