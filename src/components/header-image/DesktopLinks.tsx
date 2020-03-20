import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  animation?: boolean;
}

export const DesktopLinks: React.FC<IProps> = ({ animation }): JSX.Element => {
  return (
    <div
      className={`container desktop-links d-none d-lg-block ${animation &&
        "animation-up-slow"}`}
    >
      <div className="row justify-content-around">
        <Link to="/">Home</Link>
        <Link to="/clients">Clientele</Link>
        <Link to="/founder">Founder</Link>
        <Link to="/how-we-work">How we work</Link>
        <Link to="/levels">Levels</Link>
        <Link to="/blog">Media</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/press">Press</Link>
        <Link to="/locations">Locations</Link>
      </div>
    </div>
  );
};
