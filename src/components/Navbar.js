import Link from "next/link";
import { useState } from "react";

const Navbar = ({ site }) => {
  const [isOpen, setIsOpen] = useState(false);
  const siteName = site.name;
  const pages = site.pages;
  const determineFontSize = (text) => {
    const length = text.length;

    if (length < 10) return "text-2xl leading-snug";
    if (length < 20) return "text-xl leading-snug";
    if (length < 30) return "text-base leading-snug";
    return "text-md leading-snug";
  };
  const dynamicFontSize = determineFontSize(siteName);

  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:pr-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link
            href="/"
            className={`sm:ml-20 font-medium text-left btn btn-ghost hover:bg-inherit normal-case ${dynamicFontSize}`}
          >
            {siteName}
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block focus:outline-none"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
              ;
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } px-2 pt-2 pb-4 sm:flex sm:p-0 text-center`}
      >
        {site.nav1_text && site.nav1_url ? (
          <Link
            href={site.nav1_url}
            className={`text-lg block px-2 py-2 rounded hover:opacity-50`}
          >
            {site.nav1_text}
          </Link>
        ) : null}

        {site.nav2_text && site.nav2_url ? (
          <Link
            href={site.nav2_url}
            className={`text-lg block px-2 py-2 rounded hover:opacity-50`}
          >
            {site.nav2_text}
          </Link>
        ) : null}

        {site.nav3_text && site.nav3_url ? (
          <Link
            href={site.nav3_url}
            className={`text-lg block px-2 py-2 rounded hover:opacity-50`}
          >
            {site.nav3_text}
          </Link>
        ) : null}

        {site.nav4_text && site.nav4_url ? (
          <Link
            href={site.nav4_url}
            className={`text-lg block px-2 py-2 rounded hover:opacity-50`}
          >
            {site.nav4_text}
          </Link>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
