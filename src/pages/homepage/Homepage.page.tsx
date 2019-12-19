import React from "react";
import { connect } from "react-redux";
import { getTCs } from "../../store/actions";

interface IProps {
  loading: { loading: boolean };
  getTCs: Function;
}

const HomepagePage: React.FC<any> = ({
  loading,
  getTCs
}: IProps): JSX.Element => {
  return (
    <div>
      <h1>homepage</h1>
      <button onClick={() => getTCs()}>aaaaaaaaaa</button>
    </div>
  );
};

const mapStateToProps = ({ loading }: { loading: boolean }) => loading;

const mapDispatchToProps = { getTCs };

export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepagePage);
