import React from "react";
import { connect } from "react-redux";
import { fetchTCsData } from "../../store/actions";

interface IProps {
  loading: { loading: boolean };
  fetchTCsData: Function;
}

const HomepagePage: React.FC<any> = ({
  loading,
  fetchTCsData
}: IProps): JSX.Element => {
  return (
    <div>
      <h1>homepage</h1>
      <button onClick={() => fetchTCsData()}>aaaaaaaaaa</button>
    </div>
  );
};

const mapStateToProps = ({ loading }: { loading: boolean }) => loading;

const mapDispatchToProps = { fetchTCsData };

export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepagePage);
