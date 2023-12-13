import { HiBadgeCheck } from "react-icons/hi";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
const FeaturesBlock = ({
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
  cb_children
}) => {

  return (
    <div
      key={key}
      contentBlockId={contentBlockId}
      className={`bg-neutral sm:p-24 sm:py-12 sm:pt-0 rounded-none md:card-side  ${
        index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse "
      }   `}
    >
      <div className="flex flex-col text-neutral-content p-12 sm:p-0 sm:mr-2 sm:pt-24">
        <h2 className="text-left justify-start basis-0 text-4xl text-neutral-content font-thin">
          How we help: 
        </h2>
        <div className="text-primary-content text-center space-y-16 sm:space-y-0 sm:space-x-32 flex flex-col sm:flex-row pt-16 sm:p-12 sm:p-0 sm:mr-2 sm:pt-12">
        {cb_children?.map((child) => 

            <div className="basis-1/3 p-8 bg-primary rounded-2xl flex flex-col justify-between">
              <p className="text-2xl">{child.header}</p>
              {/* <p className="mb-auto pt-8 text-lg prose"> */}
              {/* {child.body} */}
              {/* </p> */}
              <ReactMarkdown
                plugins={[remarkGfm]}
                className="mb-auto pt-8 text-lg prose text-neutral"
              >
                {child.body}
              </ReactMarkdown>
              <div className="h-10 pb-10 flex justify-center pt-10 text-primary-content">
                <HiBadgeCheck className="relative fill-secondary" size={"36px"} />
              </div>
            </div>

          )}
        
  
        </div>
      </div>
    </div>
  );
};

export default FeaturesBlock;
