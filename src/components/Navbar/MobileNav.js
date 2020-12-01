import React from 'react';
import GitHub from '../assets/GitHub';
import LinkedIn from '../assets/LinkedIn';
import ExternalLink from './ExternalLink';
import NavLink from './NavLink';
import ResumeLink from './ResumeLink';

const MobileNav = ({ handleClick }) => {
  return (
    <div className="fixed top-0 right-0 z-20 flex justify-end w-screen h-screen backdrop-blur">
      <nav className="h-full pt-24 bg-carrara">
        <div className="flex flex-col items-center justify-between w-full h-full px-8 pt-10 text-2xl font-bold pb-60 text-kashmir-500 font-logo">
          <NavLink number="1" text="about" handleClick={handleClick} />
          <NavLink number="2" text="projects" handleClick={handleClick} />
          <NavLink number="3" text="contact" handleClick={handleClick} />
          <ResumeLink text="resume" />
          <div className="flex items-center pl-1 space-x-6">
            <ExternalLink
              href="https://github.com/michaelwlu"
              ariaLabel="GitHub"
              className="text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
            >
              <GitHub className="w-7 h-7" />
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/michaelwlu/"
              ariaLabel="LinkedIn"
              className="text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
            >
              <LinkedIn className="w-7 h-7" />
            </ExternalLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
