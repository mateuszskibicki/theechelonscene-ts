import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  url: string;
  name: string;
  active: boolean;
  onClick: Function;
}

export const NavbarLink: React.FC<IProps> = ({
  url,
  name,
  active,
  onClick
}: IProps): JSX.Element => {
  return (
    <li
      className={
        active
          ? "navbar-mobile__item navbar-mobile__item--active"
          : "navbar-mobile__item"
      }
      onClick={() => onClick(name)}
    >
      <Link to={url}>{name}</Link>
    </li>
  );
};
