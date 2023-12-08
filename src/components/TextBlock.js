import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";

const TextBlock = ({
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
  index,
}) => {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <div
      key={key}
      contentBlockId={contentBlockId}
      className={`bg-neutral sm:p-24 sm:py-12 sm:pt-24 rounded-none rounded-t-2xl card md:card-side ${
        index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse "
      }   `}
    >
      <img
          src={image_link}
          alt="Hero Image"
          className="sm:object-fill rounded-t-2xl sm:rounded-2xl h-64 sm:w-full"
        />

      <div className="flex flex-col text-neutral-content p-12 sm:p-0 sm:mr-20">
        {subheader && <h3 className="text-lg uppercase">{subheader}</h3>}
        <h2 className="text-4xl font-thin">{header}</h2>

        <div className="mt-5 font-thin">
          <ReactMarkdown plugins={[remarkGfm]} className="">
            {showFullText ? body : body.slice(0, 200) + "..."}
          </ReactMarkdown>
          <div className="link" onClick={() => setShowFullText(!showFullText)}>
            {showFullText ? "see less" : "see more"}
          </div>
        </div>
        {/* <div className='btn btn-primary'>Subscribe</div> */}
      </div>
    </div>
  );
};

export default TextBlock;
