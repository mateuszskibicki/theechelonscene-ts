import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { SEOImgHeaders } from "../../components/common/SEO/SEOImgHeaders";
import HomepageBG from "../../assets/imgs/rsz_homepage.jpg";
import {
  OptionsRadioButton,
  SuccessResponseBlock,
} from "../../components/contact-form";
import axios from "axios";

const Contact: React.FC<any> = (): JSX.Element | null => {
  const api_token = "pjY7DkRfUrGzbYAXGpmt";

  // Captcha

  const [key, setKey] = useState<null | string>(null)

  // Form data
  const [formData, setFormData] = useState({
    api_token,
    first_name: "",
    last_name: "",
    phone_numbers: "",
    secondary_emails: "",
    country: "",
    custom_field_197950: "call",
  });

  // is pending
  const [pending, setPending] = useState(false);

  // Success request
  const [success, setSuccess] = useState(false);

  // Form errors
  const [formErrors, setFormErrors] = useState("");

  // On button option change
  const onOptionButtonChange = (option: string): void => {
    setFormErrors("");
    setFormData({ ...formData, custom_field_197950: option });
  };

  // On text input change
  const onTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormErrors("");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // On enquire click
  const onEnquireClick = async (): Promise<void> => {
    let error: string = "";
    setPending(true);

    if (formData.custom_field_197950 === "call") {
      (!formData.phone_numbers || formData.phone_numbers.length === 0) &&
        (error = "Please input your phone number.");
    }

    if (formData.custom_field_197950 === "email") {
      (!formData.secondary_emails || formData.secondary_emails.length === 0) &&
        (error = "Please input your email.");
    }

    if (formData.custom_field_197950 === "facetoface") {
      (!formData.secondary_emails || formData.secondary_emails.length === 0) &&
        (!formData.phone_numbers || formData.phone_numbers.length === 0) &&
        (error = "Please input your phone number or email.");
    }

    if (error || error.length > 0) {
      setPending(false);
      return setFormErrors(error);
    }

    try {
      try {
        const payload = {
          email: formData.secondary_emails,
          ...(formData.first_name && { firstName: formData.first_name }),
          ...(formData.last_name && { lastName: formData.last_name })
        };
        await axios.post('https://orange-cat-digital-emails.netlify.app/api/theechelonscene', payload);
      } catch (e) {
        // Do nothing if newsletter fails
      }

      const res = await axios.post(
        "https://app.karmacrm.com/api/v3/settings/form_submissions/69424/submit.json",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res && (res.status === 200 || res.status === 201)) {
        setPending(false);
        setSuccess(true);
      }
    } catch (e) {
      setPending(false);
      setFormErrors("Something went wrong, try again please.");
    }
  };

  return (
    <div className="contact-page">
      <SEOImgHeaders img_url={HomepageBG} title={"Contact The Echelon Scene"} />
      <HeaderImage img={HomepageBG} size="small" position="left">
        <HeaderLogo />
        <h1 className="text-center text-white letter-spacing-4 mb-4">
          Contact The Echelon Scene
        </h1>
      </HeaderImage>
      <div className="container">
        {success ? (
          <SuccessResponseBlock />
        ) : (
            <div className="row justify-content-center my-5">
              <div className="col-12 col-md-10 col-lg-8">
                <h4 className="letter-spacing-2 text-white mb-2">
                  Gain a better understanding of our service
              </h4>
                <p className="letter-spacing-1 text-white mb-4">
                  Please fill in the information below
              </p>
                <div className="contact-form">
                  {/* Inpu radio */}
                  <div className="form-group mb-4">
                    <OptionsRadioButton
                      onClick={onOptionButtonChange}
                      active={formData.custom_field_197950 === "call"}
                      name="Call"
                      value="call"
                    />
                    <OptionsRadioButton
                      onClick={onOptionButtonChange}
                      active={formData.custom_field_197950 === "email"}
                      name="Email"
                      value="email"
                    />
                    <OptionsRadioButton
                      onClick={onOptionButtonChange}
                      active={formData.custom_field_197950 === "facetoface"}
                      name="Meet with Jacqueline"
                      value="facetoface"
                    />
                  </div>
                  {/* Form inputs */}
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control letter-spacing-2"
                      name="first_name"
                      placeholder="First Name:"
                      onChange={onTextInputChange}
                    />
                    <input
                      type="text"
                      className="form-control letter-spacing-2"
                      name="last_name"
                      placeholder="Last Name:"
                      onChange={onTextInputChange}
                    />
                    <input
                      type="text"
                      className="form-control letter-spacing-2"
                      name="phone_numbers"
                      placeholder="Phone Number:"
                      onChange={onTextInputChange}
                    />
                    <input
                      type="email"
                      className="form-control letter-spacing-2"
                      name="secondary_emails"
                      placeholder="Email:"
                      onChange={onTextInputChange}
                    />
                    <input
                      type="text"
                      className="form-control letter-spacing-2"
                      name="country"
                      placeholder="Country:"
                      onChange={onTextInputChange}
                    />
                  </div>

                  <p className="letter-spacing-1 text-white mb-4">
                    The details are kept strictly confidential.
                </p>

                  {formErrors && (
                    <p className="letter-spacing-1 text-red mb-4">{formErrors}</p>
                  )}

                  <div className="mb-1">
                    <ReCAPTCHA
                      sitekey="6LfYwWIaAAAAAOErZXPr9k4WDtYsrlwleuw2xEA9"
                      onChange={(captcha) => setKey(captcha)}
                      theme="dark"
                    />
                  </div>

                  {pending && (
                    <button
                      className="btn btn-white-outline shadow rounded"
                      onClick={() => console.log("Pending...")}
                    >
                      Please wait...
                    </button>
                  )}

                  {!pending && key && (
                    <button
                      className="btn btn-white-outline shadow rounded"
                      onClick={onEnquireClick}
                    >
                      Enquire
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Contact;
