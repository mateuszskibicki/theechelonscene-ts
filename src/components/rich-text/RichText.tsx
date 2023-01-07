import React from "react";
//@ts-ignore
import { RichText } from "prismic-reactjs";

interface IProps {
  content: any[];
  color: "white" | "dark";
}

export const RichTextComponent: React.FC<IProps> = ({
  content,
  color
}): JSX.Element | null => {
  if (!content) return null;

  const classes =
    color === "dark" ? "rich-text text-dark" : "rich-text text-white";

  return (
    <div className={classes}>
      {content && content.length > 0 && RichText.render(content)}
    </div>
  );
};
