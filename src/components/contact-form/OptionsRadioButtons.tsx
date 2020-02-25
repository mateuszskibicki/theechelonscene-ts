import * as React from "react";

export interface IProps {
  onClick: any;
  name: string;
  active: boolean;
  value: string;
}

export const OptionsRadioButton: React.FC<IProps> = ({
  onClick,
  name,
  active,
  value
}): JSX.Element => {
  return (
    <div
      className="contact-form__radio d-flex align-items-center mb-3 cursor-pointer"
      onClick={() => onClick(value)}
    >
      <button
        className={`contact-form__radio-button ${active &&
          "contact-form__radio-button--active"}`}
      />
      <p className="letter-spacing-1 text-white ml-3 mb-0">{name}</p>
    </div>
  );
};
