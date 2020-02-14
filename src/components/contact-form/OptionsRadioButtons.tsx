import * as React from "react";

export interface IAppProps {}

export const OptionsRadioButton: React.FC<IAppProps> = (
  props: IAppProps
): JSX.Element => {
  return (
    <>
      <div className="contact-form__radio d-flex align-items-center">
        <button className="contact-form__radio-button" />
        <p className="letter-spacing-1 text-white ml-3"></p>
      </div>
    </>
  );
};
