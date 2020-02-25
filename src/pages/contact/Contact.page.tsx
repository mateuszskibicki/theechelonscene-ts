// import React, { Component } from "react"

// export default class ContactForm extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       selectedOption: "call",
//       email: "",
//       name: "",
//       contry: "",
//       success: false,
//       validate_msg: "",
//       data: props.data,
//     }
//   }

//   handleSubmit = e => {
//     e.preventDefault()

//     let validate = true
//     let validate_msg = ""
//     if (this.state.selectedOption === "call") {
//       validate = !!this.number.value
//       validate_msg = "Please input your phone number"
//     }
//     if (this.state.selectedOption === "email") {
//       validate = !!this.email.value
//       validate_msg = "Please input your email"
//     }
//     if (this.state.selectedOption === "facetoface") {
//       validate = !!this.number.value || !!this.email.value
//       validate_msg = "Please input your phone number or email"
//     }

//     if (validate) {
//       const data = {
//         api_token: "pjY7DkRfUrGzbYAXGpmt",
//         first_name: this.fname.value,
//         last_name: this.lname.value,
//         phone_numbers: this.number.value,
//         secondary_emails: this.email.value,
//         country: this.country.value,
//         custom_field_197950: this.state.selectedOption,
//       }
//       let baseurl =
//         "https://app.karmacrm.com/api/v3/settings/form_submissions/69424/submit.json"

//       fetch(baseurl, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(data),
//       })
//         .then(res => res.json())
//         .then(res => {
//           this.setState({
//             success: true,
//           })
//         })
//         .catch(err => {})
//     } else {
//       this.setState({ validate_msg: validate_msg })
//     }
//   }

//   handleOptionChange = e => {
//     this.setState({
//       validate_msg: "",
//       selectedOption: e.target.value,
//     })
//     this.fname.value = ""
//     this.lname.value = ""
//     this.number.value = ""
//     this.email.value = ""
//     this.country.value = ""
//   }

//   initValidation = e => {
//     this.setState({
//       validate_msg: "",
//     })
//   }

//   render() {
//     return (
//       <div className="prefooter-wrapper">
//         <div className="inner">
//           <div className="ContactForm">
//             {!this.state.success ? (
//               <div>
//                 <h3 className="white" style={{ marginBottom: "0px" }}>
//                   {this.state.data.openingline.text}
//                 </h3>
//                 <p style={{ marginTop: "0px" }}>
//                   {this.state.data.text_below_opening_line.text}
//                 </p>
//                 {!!this.state.validate_msg && (
//                   <p style={{ color: "red" }}>{this.state.validate_msg}</p>
//                 )}
//                 <form onSubmit={this.handleSubmit}>
//                   <label
//                     className={
//                       this.state.selectedOption === "call"
//                         ? "checked radio"
//                         : "radio"
//                     }
//                   >
//                     <input
//                       type="radio"
//                       value="call"
//                       checked={this.state.selectedOption === "call"}
//                       onChange={this.handleOptionChange}
//                     />
//                     Call
//                   </label>
//                   <label
//                     className={
//                       this.state.selectedOption === "email"
//                         ? "checked radio"
//                         : "radio"
//                     }
//                   >
//                     <input
//                       type="radio"
//                       value="email"
//                       checked={this.state.selectedOption === "email"}
//                       onChange={this.handleOptionChange}
//                     />
//                     Email
//                   </label>
//                   <label
//                     className={
//                       this.state.selectedOption === "facetoface"
//                         ? "checked radio"
//                         : "radio"
//                     }
//                   >
//                     <input
//                       type="radio"
//                       value="facetoface"
//                       checked={this.state.selectedOption === "facetoface"}
//                       onChange={this.handleOptionChange}
//                     />
//                     Meet with Jacqueline
//                   </label>
//                   <div className="text-input-wrapper">
//                     <input
//                       className="text-input text-input-top"
//                       type="text"
//                       name="fname"
//                       placeholder="First Name:"
//                       ref={i => (this.fname = i)}
//                     />
//                     <input
//                       className="text-input"
//                       type="text"
//                       name="lname"
//                       placeholder="Last Name:"
//                       ref={i => (this.lname = i)}
//                     />
//                     <input
//                       className="text-input"
//                       type="text"
//                       name="number"
//                       placeholder="Phone Number:"
//                       ref={i => (this.number = i)}
//                       onChange={this.initValidation}
//                     />
//                     <input
//                       className="text-input"
//                       type="email"
//                       name="email"
//                       placeholder="Email"
//                       ref={i => (this.email = i)}
//                       onChange={this.initValidation}
//                     />
//                     <input
//                       className="text-input"
//                       type="country"
//                       name="country"
//                       placeholder="Country"
//                       ref={i => (this.country = i)}
//                     />
//                   </div>
//                   <p className="confidential">
//                     {this.state.data.line_below_form.text}
//                   </p>
//                   <input className="btn" type="submit" value="Enquire" />
//                 </form>
//                 <p>{this.state.data.contact_line.text}</p>
//               </div>
//             ) : (
//               <div>
//                 <p>Jacqueline will be in touch shortly</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

import React, { useState } from "react";
import { HeaderImage } from "../../components/header-image/HeaderImage";
import { HeaderLogo } from "../../components/header-image/HeaderLogo";
import { SEOImgHeaders } from "../../components/common/SEO/SEOImgHeaders";
import HomepageBG from "../../assets/imgs/rsz_homepage.jpg";
import { OptionsRadioButton } from "../../components/contact-form";

const Contact: React.FC<any> = (): JSX.Element | null => {
  // const api_token = "pjY7DkRfUrGzbYAXGpmt";

  // Form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_numbers: "",
    secondary_emails: "",
    country: "",
    custom_field_197950: "call"
  });

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
      return setFormErrors(error);
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

              <button
                className="btn btn-white-outline shadow rounded"
                onClick={onEnquireClick}
              >
                Enquire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
