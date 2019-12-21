import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="footer container">
      <div className="d-flex justify-content-between">
        <div className="col">
          <p>footer</p>
        </div>
        <div className="col">some more sasdsa</div>
      </div>
    </div>
  );
};
