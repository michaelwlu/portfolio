import React from 'react';
import { Link } from 'react-scroll';

const NavLink = ({ number, text, handleClick }) => {
  return (
    <Link
      activeClass="active"
      to={text}
      smooth="easeInOutCubic"
      className="block transition duration-100 ease-in-out transform cursor-pointer group focus:outline-none"
      href={`#${text}`}
      hashSpy={true}
      onClick={handleClick}
    >
      <span className="text-base text-sienna-400">{number}</span>
      <div className="inline-block text-base transition duration-100 transform text-sienna-400 group-hover:-rotate-66 group-focus:-rotate-66">
        /
      </div>
      <span className="pl-1 transition duration-100 ease-in-out text-kashmir-500 group-hover:text-kashmir-300 group-focus:text-kashmir-300">
        {text}
      </span>
    </Link>
  );
};

export default NavLink;
