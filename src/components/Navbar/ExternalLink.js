import React from 'react';

const ExternalLink = ({ children, href, ariaLabel, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${className} transition duration-75 ease-in-out transform cursor-pointer group focus:outline-hidden`}
      aria-label={ariaLabel}
      rel="noopener"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
