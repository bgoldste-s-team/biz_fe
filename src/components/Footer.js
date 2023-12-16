import Link from "next/link";
import { FaFacebook, FaEnvelope, FaShareAlt } from "react-icons/fa";

const Footer = ({ site, pages }) => {
  // console.log(site)
  return (
    
<div>





      <footer className="min-h-[40vh] footer p-10 bg-neutral text-neutral-content">
        <aside>
          <h1 className="text-2xl font-thin">{site.name}</h1>
          <h4 className="flex flex-row space-x-4 mt-5">
            <FaFacebook size={"20px"} /> <FaEnvelope size={"20px"} />{" "}
            <FaShareAlt size={"20px"} />
          </h4>
        </aside>

        <nav>
          <p className="p-2 pl-0 text-sm font-thin text-neutral-content">
            {site.footer_body}
          </p>
       
        </nav>
        <nav>
          {site.nav1_text && site.nav1_url ? (
            <Link href={site.nav1_url} className={`underline`}>
              {site.nav1_text}
            </Link>
          ) : null}

          {site.nav2_text && site.nav2_url ? (
            <Link href={site.nav2_url} className={`underline pt-2`}>
              {site.nav2_text}
            </Link>
          ) : null}

          {site.nav3_text && site.nav3_url ? (
            <Link href={site.nav3_url} className={`underline pt-2`}>
              {site.nav3_text}
            </Link>
          ) : null}

          {site.nav4_text && site.nav4_url ? (
            <Link href={site.nav4_url} className={`underline pt-2`}>
              {site.nav4_text}
            </Link>
          ) : null}
        </nav>
      </footer>




      {site.ad_level === "no_ads" ||
      site.ad_level === "no_ads_with_amazon" ? null : (
  
          <div data-theme="pagesake2" className=" min-h-[20vh] flex flex-col items-center font-sans bg-neutral-content text-neutral py-12">
              <div  className=' self-center'>   <img src={"/pagesake_logo.svg"} className="w-80 p-2  " /></div>

        <div className='max-w-xl space-y-2'>
              <h4 className=" text-3xl text-center">Built With Pagesake </h4>
              <p className=" text-lg  text-center ">
                Create revenue-generating websites for free with AI in seconds.
                Pagesake. What could you do with a free website?
              </p>
          </div>
            <div className="flex flex-col space-y-2 pt-12 self-justify-end">
              <Link href="https://pagesake.com/how-it-works" className="btn btn-lg">
                Learn More
              </Link>
              <Link href="https://pagesake.com" className="btn btn-primary btn-lg">
                Start Free
              </Link>
            </div>
      
        </div>
      )}

</div>
  );
};
export default Footer;
