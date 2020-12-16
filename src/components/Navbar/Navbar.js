import Link from 'next/link';
import React, { useState } from 'react';
import GitHub from '../assets/GitHub';
import LinkedIn from '../assets/LinkedIn';
import ExternalLink from './ExternalLink';
import Logo from './Logo';
import MobileNav from './MobileNav';
import NavLink from './NavLink';
import ResumeLink from './ResumeLink';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div // background container
        className="fixed top-0 left-0 z-30 w-full pl-6 pr-5 shadow-md h-18 md:h-24 md:relative bg-carrara"
      >
        <div // width container
          className="flex items-center justify-center h-full mx-auto max-w-7xl"
        >
          <div // height container
            className="flex items-center justify-between w-full pt-1 my-auto md:items-end "
          >
            <Link href="/">
              <a className="p-1 transition duration-75 cursor-pointer group focus:outline-none">
                <Logo />
              </a>
            </Link>
            <nav // desktop nav
              className="hidden md:flex items-center font-bold space-x-3 lg:space-x-4 text-lg lg:text-1.5xl text-kashmir-500 font-logo"
            >
              <NavLink number="1" text="about" />
              <NavLink number="2" text="projects" />
              <NavLink number="3" text="contact" />
              <ResumeLink text="resume" />
              <div className="flex items-center pl-1 space-x-5">
                <ExternalLink
                  href="https://github.com/michaelwlu"
                  ariaLabel="GitHub"
                  className="text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
                >
                  <GitHub className="w-5 h-5 lg:w-6 lg:h-6" />
                </ExternalLink>
                <ExternalLink
                  href="https://www.linkedin.com/in/michaelwlu/"
                  ariaLabel="LinkedIn"
                  className="text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
                >
                  <LinkedIn className="w-5 l-5 lg:w-6 lg:h-6" />
                </ExternalLink>
              </div>
            </nav>
            <div // mobile nav button
              className="flex items-center space-x-2 md:hidden"
            >
              <button
                onClick={() => setDropdown(!dropdown)}
                className={`inline-flex text-kashmir-500 rounded-md focus:outline-none focus:bg-opacity-25 ${
                  dropdown ? 'bg-gray-300 bg-opacity-25 ' : 'shadow-none'
                }`}
              >
                <svg // open menu icon
                  className={`w-10 h-10 ${dropdown ? 'hidden' : 'block'}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg // close menu icon
                  className={`w-10 h-10 ${dropdown ? 'block' : 'hidden'}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <MobileNav
          isVisible={dropdown}
          handleClick={() => setDropdown((dropdown) => !dropdown)}
        />
      </div>
    </>
  );
};

export default Navbar;
