import React from "react";

interface IProps {
  url: string;
  alt: string;
}

export const ImgSEO: React.FC<IProps> = ({ url, alt }: IProps): JSX.Element => {
  return <img src={url} className="d-none" alt={alt} />;
};
