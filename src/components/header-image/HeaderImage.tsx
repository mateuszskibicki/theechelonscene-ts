import React from "react";

interface IProps {
  img: string;
  title?: string;
  description?: string;
  children?: any;
  position?: "left" | "right";
  size: "xsmall" | "small" | "medium" | "big";
}

export const HeaderImage: React.FC<IProps> = ({
  img,
  title,
  description,
  children,
  position,
  size
}: IProps): JSX.Element => {
  let classes = "";
  size === "xsmall" && (classes = "header-img header-img__xsmall");
  size === "small" && (classes = "header-img header-img__small");
  size === "medium" && (classes = "header-img header-img__medium");
  size === "big" && (classes = "header-img header-img__big");

  if (children)
    return (
      <div
        className={classes}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: position ? position : "center"
        }}
      >
        {children}
      </div>
    );

  return (
    <div className={classes} style={{ backgroundImage: `url(${img})` }}>
      <h1 className="header-img__title">{title}</h1>
      {description && (
        <h2 className="header-img__description">{description}</h2>
      )}
    </div>
  );
};
