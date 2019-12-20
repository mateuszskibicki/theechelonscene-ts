import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTCsData } from "../../store/actions";

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

  return (
    <div>
      <h1>TCpage</h1>
    </div>
  );
};
