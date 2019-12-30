import React from "react";
import Logo from "../../assets/imgs/echelon-logo.png";

export const HeaderLogo = () => {
  return (
    <div className="header-logo mb-4">
      {/* Logo part */}
      <p className="mb-3 letter-spacing-6 text-white">THE</p>
      <img
        src={Logo}
        alt="The Echelon Scene - Gay Matchmaking London, New York, Toronto"
        className="header-logo__img img-fluid mb-4"
      />
      <p className="letter-spacing-6 text-white mb-4">SCENE</p>
    </div>
  );
};
