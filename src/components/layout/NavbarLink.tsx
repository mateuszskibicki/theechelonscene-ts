import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  url: string;
  name: string;
  onClick: Function;
  ml?: boolean;
}

export const NavbarLink: React.FC<IProps> = ({
  url,
  name,
  onClick,
  ml
}: IProps): JSX.Element => {
  return (
    <li
      className={ml ? "navbar-mobile__item ml-3" : "navbar-mobile__item"}
      onClick={() => onClick(name)}
    >
      <Link to={url}>{name}</Link>
    </li>
  );
};
