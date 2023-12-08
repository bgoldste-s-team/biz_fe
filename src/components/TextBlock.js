import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      className={`bg-neutral sm:p-24 lg:pr-0 lg: mr-0 sm:py-12 sm:pt-0 rounded-none rounded-t-2xl card md:card-side items-end ${
        index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse "
      }   `}
    >
      {image_link ? (
        <img
          src={image_link}
          alt="Hero Image"
          className="sm:mt-24 sm:mr-12 sm:ml-12 sm:object-fill rounded-t-2xl sm:rounded-2xl h-64 w-full"
        />
      ) : (
        <img
          src={"/textblock_bg.svg"}
          alt="Hero Image"
          className="h-3/6 relative top-0 float-right rounded-t-2xl sm:rounded-2xl sm:w-4/6"
        />
      )}

      <div className="flex flex-col text-neutral-content p-12 sm:p-0 sm:mr-2 sm:pt-24">
        {subheader && <h3 className="text-lg uppercase">{subheader}</h3>}
        <h2 className="text-4xl font-thin">{header}</h2>

        <div className="mt-5 font-thin">
          <ReactMarkdown plugins={[remarkGfm]} className="">
            {body.slice(0, 2000)}
          </ReactMarkdown>
        </div>
        {/* <div className='btn btn-primary'>Subscribe</div> */}
      </div>
    </div>
  );
};

export default TextBlock;
