import React, { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    if (!formData.email) {
      setFeedback("Email is required!");
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
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          message: "",
        });
      } else {
        setFeedback("Error submitting form.");
      }
    } catch (error) {
      setFeedback("Error submitting form.");
    }
  };

  if (!site_id) {
    return <h1> NO SITE ID</h1>;
    // return null;
  }
  return (
    <div
      key={key}
      contentBlockId={contentBlockId}
      className="scroll-p-0 space-y-4 flex flex-col items-center bg-primary text-primary-content pt-28"
    >
      <div
        className={`hero min-h-[90vh] p-0  `}
        // style={{backgroundImage: `url(${image_link})`}}
      >
        {/* <div className="hero-overlay bg-opacity-0"></div> */}

        <div className="hero-content p-0  mt-0 flex flex-col text-center ">
          <div className="flex flex-col space-y-2 max-w-xl ">
            <h1 className="text-5xl font-thin">{header} </h1>
          </div>

          <p className="max-w-2xl px-2">{subheader?.slice(0, 200)}</p>

          <div className="space-x-2">
            <div className="form-control w-full mt-20">
              <form onSubmit={handleSubmit} className="flex justify-center justify-center items-center sm:items-start flex-col sm:flex-row gap-7 sm:gap-14">
                <input
                  type="email"
                  className="input  bg-white text-neutral input-bordered w-80 sm:w-96"
                  value={formData.email}
                  placeholder="me@awesomeidea.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <button type="submit" className="btn btn-md mb-48 sm:px-10 btn-secondary font-sans normal-case w-36">
                  Sign Up
                </button>
              </form>
              {feedback && (
                <div className="alert bg-neutral-content text-neutral  my-4">
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
