import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const HeroBlock = ({
  header,
  subheader,
  body,
  cta1_text,
  cta2_text,
  cta1_link,
  cta2_link,
  image_link,
}) => {
  // const imageContainerClasses = "w-full h-auto mx-auto";
  // const headerClasses = "text-3xl font-bold mb-4 text-center";
  // const subheaderClasses = "text-lg mb-6 text-center";
  // const button1Classes = "btn "
  // const button2Classes = "btn  btn-accent";
  // const buttonContainerClasses = "flex justify-center gap-4 mt-4";
  // const bodyClasses = "text-lg mb-6 text-center whitespace-pre-line";

  return (
    <div
      className={` p-0  bg-primary text-primary-content `}
      // style={{backgroundImage: `url(${image_link})`}}
    >
      <div className="p-14 sm:pl-24 pt-10 mt-0 flex flex-col text-center md:text-left text-primary-content">
        <div className="flex flex-col lg:w-2/3">
          <h1 className="text-6xl sm:leading-snug">{header}</h1>
          <p className="max-w-xl text-2xl pt-5">{subheader}</p>
        </div>

        {cta1_text && cta1_link && (
          <div className="space-x-2 mt-10">
            <a
              href={cta1_link}
              className="font-sans normal-case btn btn-sm h-10 px-10 btn-secondary join-item"
            >
              {cta1_text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBlock;

{
  /*        */
}
{
  /*         <div className={buttonContainerClasses}> */
}
{
  /*         {cta2_link && ( */
}
{
  /*           <Link className="btn btn-secondary" href={cta2_link}> */
}
{
  /*             {cta2_text} */
}
{
  /*           </Link> */
}
{
  /*         )} */
}
{
  /*         {cta1_link && ( */
}
{
  /*           <Link className="btn btn-primary" href={cta1_link}> */
}
{
  /*             {cta1_text} */
}
{
  /*           </Link> */
}
{
  /*         )} */
}
{
  /*  */
}
{
  /*        */
}
{
  /*       </div> */
}
{
  /*
<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button><button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button><button className="btn btn-outline">Default</button>
<button className="btn btn-outline btn-primary">Primary</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button><button className="btn btn-outline btn-info">Info</button>
<button className="btn btn-outline btn-success">Success</button>
<button className="btn btn-outline btn-warning">Warning</button>
<button className="btn btn-outline btn-error">Error</button>
       */
}
