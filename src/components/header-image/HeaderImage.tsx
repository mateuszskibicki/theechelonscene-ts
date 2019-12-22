import React from "react";

interface IProps {
  img: string;
  title: string;
  size: "xsmall" | "small" | "medium" | "big";
}

export const HeaderImage: React.FC<IProps> = ({
  img,
  title,
  size
}: IProps): JSX.Element => {
  let classes = "";
  size === "xsmall" && (classes = "header-img header-img__xsmall");
  size === "small" && (classes = "header-img header-img__small");
  size === "medium" && (classes = "header-img header-img__medium");
  size === "big" && (classes = "header-img header-img__big");

  return (
    <div className={classes} style={{ backgroundImage: `url(${img})` }}>
      <h1 className="header-img__title">{title}</h1>
    </div>
  );
};
