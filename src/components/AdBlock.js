import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const AdBlock = ({ name, page, site, index }) => {
  // console.log('adblock', page, site, index, name)

  const textArray = [
     "SEO Optimized 🔎",
      "AI Content Generation 🤖",
      "Actually Free 🤑",
    // ... add as many messages as you want
  ];

  const [currentText, setCurrentText] = useState(textArray[0]);
  const [textIndex, setTextIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const variants = {
    // variant1: {
    //     // styling: "bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center",
    //     styling:"bg-neutral-content text-neutral p-8 text-center",
    //     header1:"Don't Just Browse The Web.",
    //     header2:"Create It.",
    //     subheader:"",
    //     body: "",
    //     cta1_link:"",
    //     cta2_link:"",
    //     cta1_text:"",
    //     cta2_text:""
    // },
    variant1: {
      // styling: "bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center",
      styling: "",
      header1: "Don't Just Browse The Web.",
      header2: "Create It.",
      subheader: "",
      body1: "Ever wonder what you could do with a website? ",
      body2:
        "Pagesake builds complete, monetizable websites for you in seconds. Actually Free.",
      cta1_link: "https://pagesake.com",
      cta2_link: "https://pagesake.com",
      cta1_text: "Start FREE",
      cta2_text: "How It Works",
      textArray: [
        "SEO Optimized 🔎",
        "AI Content Generation 🤖",
        "Actually Free 🤑",
        // ... add as many messages as you want
      ],
    },
    variant2: {
      styling: "",
      header1: "Revenue Generating Websites",
      header2: "Ready in seconds.",
      subheader: "Your Side Hustle is Calling.",
      body1:
        "Dreaming about a business? Our AI-powered website builder can get you from dream to done in seconds.",
      body2: "",
      cta1_link: "https://pagesake.com",
      cta2_link: "https://pagesake.com",
      cta1_text: "Start FREE 🚀",
      cta2_text: " How It Works 💡",
      textArray: [
        "Portfolio Websites 🎨",
        "Review Sites 🕵️‍♂️",
        "Small Businesses 🗃️",

        // ... add as many messages as you want
      ],
    },
  };

  const useVariant2 = index % 2 === 0;

  const variant = index % 2 === 1 ? "variant1" : "variant2";

  // useEffect(() => {
  //    const interval = setInterval(() => {
  //      setVisible(false);
  //      setTextIndex((prevIndex) => {
  //        const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;
  //        setTimeout(() => {
  //          setCurrentText(variants[variant].textArray[newIndex]);
  //          setVisible(true);
  //        }, 300); // This delay is for the fade-out effect to be noticeable before the text changes

  //        return newIndex;
  //      });
  //    }, 3500); // Giving some extra time for animations

  //    return () => {
  //      clearInterval(interval);
  //    };
  //  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Starts the fade-out

      setTimeout(() => {
        setTextIndex((prevIndex) => {
          const newIndex =
            prevIndex + 1 === variants[variant].textArray.length
              ? 0
              : prevIndex + 1;
          setCurrentText(variants[variant].textArray[newIndex]);
          return newIndex;
        });
      }, 300); // Wait for the fade-out to finish before changing text

      setTimeout(() => {
        setVisible(true); // Fade-in the new text after another delay
      }, 600); // Start the fade-in after the text has changed
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (site.ad_level === "no_ads") {
    return null;
  }

  return (


        <div
          data-theme="pagesake2"
          className={`font-sans  ${variants[variant].styling} flex flex-col items-center bg-neutral-content text-neutral space-y-4 pb-12`}
        >
          {/*<div  className="scroll-p-0 bg-gradient-to-r from-primary to-secondary text-white py-10 px-4">*/}
          <div  className=' self-end'>   <img src={"/pagesake_logo.svg"} className="w-36 p-2  " /></div>
        

              <h1 className={`text-4xl text-center `}>
                {" "}
                {variants[variant].header1} <br />
                <span
                  className="text-4xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary to-purple-300"
                >
                  {variants[variant].header2}
                </span>
              </h1>

           
   
        <div className="flex flex-row flex-reverse ">
               
           
            <div
              className={`text-xl   mt-4 py-2 bg-gray text-center ${
                visible ? "" : "transition-opacity duration-300 opacity-0"
              } ${
                textIndex === 0
                  ? "text-green-300"
                  : textIndex === 1
                  ? "text-blue-300"
                  : "text-red-300 "
              }   `}
            >
               <h1>{currentText}</h1>
            </div>
             </div>

         
             <p className='text-lg text-neutral text-center'>{variants[variant].body2}</p>
            <div
              className={"flex flex-col md:flex-row justify-center gap-2 my-4"}
            >
              <Link
                className="btn btn-primary btn-outline "
                rel="noopener noreferrer"
                target="_blank"
                href={"https://pagesake.com"}
                passHref
              >
                {variants[variant].cta2_text}
              </Link>
              <Link
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
                href={"https://pagesake.com/signup"}
                passHref
              >
                {variants[variant].cta1_text}
              </Link>
            </div>
              
          </div>
    
 
  );
};

export default AdBlock;
