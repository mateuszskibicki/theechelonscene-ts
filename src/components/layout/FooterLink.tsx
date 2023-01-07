import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  url: string;
  name: string;
}

export const FooterLink: React.FC<IProps> = ({
  url,
  name
}: IProps): JSX.Element => {
  return (
    <Link className="footer__link white-smoke mb-1 d-block" to={url}>
      {name}
    </Link>
  );
};
