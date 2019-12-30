import React from "react";

export const EnquireButton: React.FC = (): JSX.Element => {
  return (
    <div className="col-12 py-4 d-flex justify-content-around align-items-center text-center enquire-button">
      <h4 className="px-3 mb-0">Find your perfect match</h4>
      <button className="btn btn--small btn-white shadow">ENQUIRE</button>
    </div>
  );
};
