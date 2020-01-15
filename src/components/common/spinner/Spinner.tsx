import React from "react";

interface IProps {
  dark?: boolean;
}

export const Spinner: React.FC<IProps> = ({ dark }: IProps): JSX.Element => {
  return (
    <div className="text-center py-5">
      <div className="container my-4">
        <div className="row">
          <div className="col-12 text-center">
            <div className="fa-3x">
              {dark ? (
                <i className="fas fa-spinner fa-spin text-dark"></i>
              ) : (
                <i className="fas fa-spinner fa-spin text-white"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
