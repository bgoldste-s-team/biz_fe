import React, { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ContactFormBackground } from "./ContactFormBackground";

const ContactFormBlock = ({
  key,
  contentBlockId,
  header,
  subheader,
  body,
  cta1_text,
  cta2_text,
  cta1_link,
  cta2_link,
  image_link,
  site_id,
}) => {
  const imageContainerClasses = "w-full h-auto mx-auto";
  const headerClasses = "text-3xl font-bold mb-4 text-center";
  const subheaderClasses = "text-xl mb-6 text-center";
  const bodyClasses = "text-lg prose space-y-2 px-2";
  const bodyContainerClasses = "max-w-2xl"; // Adjust this width as needed
  const buttonClasses = " rounded-md";
  const buttonContainerClasses = "flex justify-center gap-4 mt-4";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [feedback, setFeedback] = useState("");
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    if (!formData.email) {
      setFeedback("Email is required!");
      setFeedbackSuccess(false);
      return;
    }

    // Make a POST request
    try {
      // GET THIS NOT HARDCODED TODO
      let url = `https://csbe.onrender.com/api/sites/${site_id}/contact/`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback("Thanks for contacting us. We will be in touch soon!");
        setFeedbackSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          message: "",
        });
      } else {
        setFeedback("Error submitting form.");
        setFeedbackSuccess(false);
      }
    } catch (error) {
      setFeedback("Error submitting form.");
      setFeedbackSuccess(false);
    }
  };

  if (!site_id) {
    return <h1> NO SITE ID</h1>;
    // return null;
  }

  const svgString = encodeURIComponent(
    renderToStaticMarkup(<ContactFormBackground stroke={"currentColor"} />)
  );
  const dataUri = `url("data:image/svg+xml,${svgString}") no-repeat`;

  return (
    <div
      key={key}
      id="contact"
      contentBlockId={contentBlockId}
      style={{ background: dataUri, backgroundRepeat: "no-repeat!important;" }}
      className={`scroll-p-0 space-y-4 flex flex-col items-center bg-primary text-primary-content bg-no-repeat pt-20 pb-20`}
    >
      <div
        className={`hero p-0  `}
        // style={{backgroundImage: `url(${image_link})`}}
      >
        {/* <div className="hero-overlay bg-opacity-0"></div> */}

        <div className="hero-content p-0 mt-0 flex flex-col text-center w-full">
          <div className="flex flex-col space-y-2 max-w-xl ">
            <h1 className="text-5xl font-thin">{header} </h1>
          </div>

          <p className="max-w-2xl text-lg font-sans px-2">
            {subheader?.slice(0, 200)}
          </p>

          <div className="space-x-2 w-2/3">
            <div className="form-control w-full mt-2">
              <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center sm:items-start flex-col
                
                  gap-4"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="input font-sans  bg-white text-neutral  input input-bordered w-full"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  className="input font-sans  bg-white text-neutral input-bordered w-full"
                  value={formData.email}
                  placeholder="Email Address"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  type="phone"
                  placeholder="Phone Number"
                  className="input font-sans  bg-white text-neutral  input input-bordered w-full"
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData({ ...formData, phone_number: e.target.value })
                  }
                />

                <textarea
                  className=" font-sans  bg-white text-neutral  textarea textarea-bordered textarea-lg w-full"
                  placeholder="Message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>

                <button
                  type="submit"
                  className="font-sans normal-case btn btn-sm h-10 px-10 btn-secondary mt-1 w-full"
                >
                  {cta1_text ? cta1_text : "Submit"}
                </button>
              </form>
              {feedback && (
                <div
                  className={`alert font-bold text-neutral ${
                    feedbackSuccess ? "text-green-700" : "text-red-600"
                  } my-4 w-full`}
                >
                  {feedback}
                </div>
              )}
            </div>
            {/* <input className="input input-bordered join-item text-black" placeholder="Email"/> */}
            {/* <button className="btn  btn-secondary join-item ">Request Access</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormBlock;
