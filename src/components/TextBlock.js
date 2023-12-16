import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from 'next/link';
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
  return (
    <div
      key={key}
      contentBlockId={contentBlockId}
      className={`bg-neutral lg:p-24 lg:pr-0 lg: mr-0 lg:py-12 lg:pt-0 rounded-none rounded-t-2xl card md:card-side items-end ${
        index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse "
      }   `}
    >
      {image_link ? (
        <img
          src={image_link}
          alt="Hero Image"
       
          className="lg:mt-24 lg:mr-12 lg:ml-12 lg:object-fill rounded-t-2xl lg:rounded-2xl h-64 w-full"
        />
      ) : (
        <img
          src={"/textblock_bg.svg"}
          alt="Hero Image"
          className="h-3/6 relative top-0 float-right rounded-t-2xl lg:rounded-2xl lg:w-4/6"
        />
      )}

      <div className="flex flex-col text-neutral-content p-12 lg:p-0 lg:mr-2 lg:pt-24">
        <h2 className="text-4xl font-thin">{header}</h2>

        <div className="mt-5 font-thin">
          <ReactMarkdown
            plugins={[remarkGfm]}
            className="prose text-neutral-content marker:text-neutral-content"
          >
            {body}
          </ReactMarkdown>
        </div>
       {cta1_text && cta1_link && (
          <div className="space-x-2 mt-10 ">
            <Link
              href={cta1_link}
              className="font-sans normal-case text-neutral  btn btn-secondary join-item"
            >
              {cta1_text}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
