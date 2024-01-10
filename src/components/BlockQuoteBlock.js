import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoRemoveOutline } from "react-icons/io5";

const BlockQuoteBlock = ({
  header,
  subheader,
  cta1_text,
  cta2_text,
  cta1_link,
  cta2_link,
  image_link,
  children,
}) => {
  return (
    <div className="bg-neutral p-12 lg:p-24 h-screen flex flex-row items-center justify-center">
      <div className="flex flex-row items-start w-full lg:w-8/12">
        <RiDoubleQuotesL
          className="relative text-neutral-content"
          size={"75px"}
        />
        <div className="ml-5 mt-10 bg-neutral">
          <div className="text-thin text-3xl text-neutral-content">
            {header}
          </div>
          <div className="text-right mt-10 text-thin text-neutral-content flex flex-row justify-end">
            <IoRemoveOutline
              className="w-16 relative right-0 bottom-2"
              size={"55px"}
            />
            <span className="text-right text-xl sm:text-2xl w-32 lg:w-auto">{subheader}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockQuoteBlock;
