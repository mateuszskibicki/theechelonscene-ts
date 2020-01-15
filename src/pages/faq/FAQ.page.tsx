import React from "react";
import { connect } from "react-redux";
import {
  loadingStart,
  loadingStop
} from "../../store/reducers/loading/loadingSlice";

interface IProps {
  loading: { loading: boolean };
  loadingStart: any;
  loadingStop: any;
}

const FAQPage: React.FC<any> = ({
  loading,
  loadingStart,
  loadingStop
}: IProps): JSX.Element => {
  return (
    <div>
      <h1>FAQ</h1>
      <button onClick={() => loadingStart()}>aa</button>
      <button onClick={() => loadingStop()}>aa</button>
    </div>
  );
};

const mapStateToProps = ({ loading }: { loading: boolean }) => loading;

const mapDispatchToProps = { loadingStart, loadingStop };

export default connect(mapStateToProps, mapDispatchToProps)(FAQPage);
