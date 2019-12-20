import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTCsData } from "../../store/actions";

interface IProps {
  loading: { loading: boolean };
  tc: { content: any };
  fetchTCsData: Function;
}

const TCpage: React.FC<any> = ({
  loading,
  tc,
  fetchTCsData
}: IProps): JSX.Element => {
  // fetch data
  useEffect(() => {
    if (!tc.content) {
      fetchTCsData();
    }
  }, []);

  return (
    <div>
      <h1>TCpage</h1>
    </div>
  );
};

const mapStateToProps = ({
  loading,
  tc
}: {
  loading: boolean;
  tc: { content: any };
}) => ({ loading, tc });

const mapDispatchToProps = { fetchTCsData };

export const TC = connect(mapStateToProps, mapDispatchToProps)(TCpage);
