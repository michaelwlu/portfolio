import React from 'react';

const ExternalLink = ({ children, href, ariaLabel }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="block transition duration-200 ease-in-out transform cursor-pointer text-kashmir-500 hover:text-valencia-400 focus:text-valencia-400 group focus:outline-none "
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
