import Link from "next/link";
import { FaFacebook, FaEnvelope, FaShareAlt } from "react-icons/fa";

const Footer = ({ site, pages }) => {
  // console.log(site)
  return (
    <div className="flex flex-col">
      <footer className="min-h-[40vh] footer p-10 bg-neutral text-neutral-content">
        <aside>
          <h1 className="text-2xl font-thin">{site.name}</h1>
          <h4 className="flex flex-row space-x-4 mt-5">
            <FaFacebook size={"20px"} /> <FaEnvelope size={"20px"} />{" "}
            <FaShareAlt size={"20px"} />
          </h4>
        </aside>

        <nav>
          <p className="p-2 pl-0 text-sm font-thin">
            725 Broad St <br /> Los Angeles, CA 90291
          </p>
          <p className="p-2 pl-0 text-sm font-thin">
            info@busiconsu.com <br />
            (310) 384-9902
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
        <div className="p-12 self-center  ">
          <div data-theme="pagesake" className="card max-w-2xl p-4 bg-black">
            <figure>
              <img className="w-64 p-4" src="/pagesake_logo.png" />
            </figure>
            <div className="card-body">
              <h4 className="card-title">Built With Pagesake </h4>
              <p>
                Create revenue-generating websites for free, in seconds, with
                Pagesake. What could you do with a free website?
              </p>
            </div>
            <div className="card-actions justify-center">
              <Link href="https://pagesake.com/how-it-works" className="btn">
                Learn More
              </Link>
              <Link href="https://pagesake.com" className="btn btn-primary">
                Start Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Footer;
