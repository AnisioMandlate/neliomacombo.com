import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <nav className="flex flex-row items-center fixed z-10 top-0 right-0 left-0 justify-between max-w-7xl w-full mx-auto px-10 md:px-12 py-6 bg-white dark:bg-gray-900">
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <a className="text-gray-800 dark:text-gray-50 no-underline">
            <Image
              src="/assets/logo-blue.png"
              width={100}
              height={100}
              alt="Nélio Macombo logo"
            />
          </a>
        </Link>

        {open ? (
          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 transition-all duration-500 hover:text-custom-dark-green dark:hover:text-[#4c7efc]"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
        ) : (
          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-line-join="round"
              className="w-4 h-4 transition-all duration-500 hover:text-custom-dark-green dark:hover:text-[#4c7efc]"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </span>
        )}
      </div>

      <ul
        className={`md:flex md:items-center md:justify-evenly z-[-1] md:z-auto md:static absolute bg-white dark:bg-[#101827] md:w-full left-0 md:py-12 py-12 w-full md:pl-0 pl-12 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${
          open ? "top-[80px] opacity-100" : ""
        }`}
      >
        <li>
          <Link href="/about-me/">
            <a
              className={`no-underline text-sm transition-all duration-500 hover:text-custom-dark-green dark:hover:text-[#4c7efc] ${
                router.pathname === "/about-me"
                  ? "text-custom-dark-green dark:text-[#4c7efc]"
                  : "text-gray-800 dark:text-gray-50"
              } `}
            >
              About Me
            </a>
          </Link>
        </li>
        <li className="invisible md:visible">
          <div className="text-gray-300 dark:text-gray-500 mx-7">•</div>
        </li>
        <li>
          <Link href="/work/">
            <a
              className={`no-underline text-sm transition-all duration-500 hover:text-custom-dark-green dark:hover:text-[#4c7efc] ${
                router.pathname === "/work"
                  ? "text-custom-dark-green dark:text-[#4c7efc]"
                  : "text-gray-800 dark:text-gray-50"
              } `}
            >
              Work
            </a>
          </Link>
        </li>
        <li className="invisible md:visible">
          <div className="text-gray-300 dark:text-gray-500 mx-7">•</div>
        </li>
        <li>
          <Link href="/contact/">
            <a
              className={`no-underline text-sm transition-all duration-500 hover:text-custom-dark-green dark:hover:text-[#4c7efc] ${
                router.pathname === "/contact"
                  ? "text-custom-dark-green dark:text-[#4c7efc]"
                  : "text-gray-800 dark:text-gray-50"
              } `}
            >
              Contact
            </a>
          </Link>
        </li>
        <li className="invisible md:visible">
          <div className="text-gray-300 dark:text-gray-500 mx-7">•</div>
        </li>
        <li>
          <button
            aria-label="Toggle dark mode"
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 transition-all duration-500 hover:text-custom-dark-green dark:hover:text-[#4c7efc]"
            >
              {resolvedTheme === "dark" ? (
                <>
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </>
              ) : (
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              )}
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
