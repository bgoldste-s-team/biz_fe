import React from "react";
import Link from "next/link";

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
    <div className="bg-neutral p-12 lg:p-24 h-screen flex flex-col items-center justify-center">
      <div className="w-full lg:w-7/12 text-thin text-4xl text-neutral-content">
        {header}
      </div>
      <div className="mt-10 w-full lg:w-7/12 text-right text-thin text-3xl text-neutral-content">
        {subheader}
      </div>
    </div>
  );
};

export default BlockQuoteBlock;
