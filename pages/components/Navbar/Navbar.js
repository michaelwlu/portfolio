import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import ResumeLink from './ResumeLink';
import Logo from './Logo';
import LinkedIn from './LinkedIn';
import GitHub from './GitHub';
import ExternalLink from './ExternalLink';

const Navbar = () => {
  return (
    <div className="fixed z-10 shadow-2xl sm:relative bg-carrara">
      <div className="max-w-6xl px-3 mx-auto">
        <div className="flex items-center justify-between h-24">
          <Link href="/">
            <a className="p-1 transition duration-150 cursor-pointer group focus:outline-none">
              <Logo />
            </a>
          </Link>
          <nav className="flex items-center space-x-4 text-xl font-bold tracking-wide text-kashmir-500 font-logo">
            <NavLink number="1" text="about" />
            <NavLink number="2" text="projects" />
            <NavLink number="3" text="contact" />
            <ResumeLink />
            <div className="flex items-center space-x-3">
              <ExternalLink
                href="https://github.com/michaelwlu"
                ariaLabel="GitHub"
              >
                <GitHub />
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/in/michaelwlu/"
                ariaLabel="LinkedIn"
              >
                <LinkedIn />
              </ExternalLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
