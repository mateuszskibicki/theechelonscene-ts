import React from "react";
//@ts-ignore
import { RichText } from "prismic-reactjs";

interface IProps {
  content: any[];
}

export const RichTextComponent: React.FC<IProps> = ({
  content
}): JSX.Element | null => {
  if (!content) return null;
  return (
    <div className="rich-text text-dark">
      {content && content.length > 0 && RichText.render(content)}
    </div>
  );
};
