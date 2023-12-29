import React from "react";
import {
  GalleryBlockDefaultImage1,
  GalleryBlockDefaultImage2,
  GalleryBlockDefaultImage3,
  GalleryBlockDefaultImage4,
} from "./GalleryBlockDefaultImages";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const GalleryBlock = ({
  header,
  subheader,
  cta1_text,
  cta2_text,
  cta1_link,
  cta2_link,
  image_link,
  children,
}) => {
  const defaultText = [
    {
      header: "Lorem ipsum dolor sit amet consectetur.",
      subheader: `Lorem ipsum dolor sit amet consectetur. Habitasse mi velit proin pulvinar. Eleifend maecenas vitae vestibulum dis augue ac pharetra venenatis. Nam ac eleifend libero quam sed posuere volutpat. In ornare sed metus aliquet.

            Lorem ipsum dolor sit amet consectetur. Habitasse mi velit proin pulvinar. Eleifend maecenas vitae vestibulum dis augue ac pharetra venenatis. Nam ac eleifend libero quam sed posuere volutpat. In ornare sed metus aliquet.`,
    },
    {
      header: "Lorem ipsum dolor sit amet consectetur.",
      subheader: `Lorem ipsum dolor sit amet consectetur. Habitasse mi velit proin pulvinar. Eleifend maecenas vitae vestibulum`,
    },
    {
      header: "Lorem ipsum dolor sit amet consectetur.",
      subheader: `Lorem ipsum dolor sit amet consectetur. Habitasse mi velit proin pulvinar. Eleifend maecenas vitae vestibulum dis augue ac pharetra venenatis. Nam ac eleifend libero quam sed posuere volutpat. In ornare sed metus aliquet.`,
    },
    {
      header: "Lorem ipsum dolor sit amet consectetur.",
      subheader: `Lorem ipsum dolor sit amet consectetur. Ornare nulla volutpat tortor est lacus aenean platea massa. Consequat feugiat a egestas luctus cursus suspendisse laoreet nisl neque. Porttitor ut viverra orci habitant. Mi ac nunc phasellus fusce dui blandit. Ut tincidunt rhoncus suspendisse cursus vulputate semper ipsum id augue. Morbi iaculis viverra pretium arcu. At mauris sit elit est justo pharetra mi.

            Lorem ipsum dolor sit amet consectetur. Ornare nulla volutpat tortor est lacus aenean platea massa. Consequat feugiat a egestas luctus cursus suspendisse laoreet nisl neque. Porttitor ut viverra orci habitant. Mi ac nunc phasellus fusce dui blandit. Ut tincidunt rhoncus suspendisse cursus vulputate semper ipsum id augue. Morbi iaculis viverra pretium arcu. At mauris sit elit est justo pharetra mi.`,
    },
  ];

  const imageBlocks = children.map((child, i) => {
    let image;
    switch (i % 4) {
      case 0:
        image = <GalleryBlockDefaultImage1 />;
        break;
      case 1:
        image = <GalleryBlockDefaultImage2 />;
        break;
      case 2:
        image = <GalleryBlockDefaultImage3 />;
        break;
      case 3:
        image = <GalleryBlockDefaultImage4 />;
        break;
    }

    return (
      <div key={`gallery-item-${i}`}>
        <div className="flex lg:flex-row flex-col my-10 lg:my-20 items-center lg:items-start">
          <div className="grow w-9/12">{image}</div>
          <div className="grow text-left px-0 lg:px-20 py-10">
            <div className="mt-5 text-2xl">{defaultText[i].header}</div>
            <div className="mt-5 font-sans prose text-neutral-content">
              {defaultText[i].subheader}
            </div>
          </div>
        </div>
        {i == children.length - 1 ? null : (
          <hr class="h-px my-8 bg-primary border-0" />
        )}
      </div>
    );
  });

  return (
    <div className="bg-neutral text-neutral-content px-12 py-24 lg:p-24 h-full w-full flex flex-col justify-start items-center">
      <div className="text-thin text-5xl">{header}</div>
      <div className="flex flex-col w-full">{imageBlocks}</div>
    </div>
  );
};

export default GalleryBlock;
