import React from 'react';

const ResumeLink = ({ text }) => {
  return (
    <a
      href="/MichaelWLu_Resume.pdf"
      target="_blank"
      className="block transition duration-150 ease-in-out transform cursor-pointer group focus:outline-none"
    >
      <div className="inline-block transition duration-150 transform text-sienna-400 group-hover:-rotate-135 group-focus:-rotate-135">
        <svg
          className="w-3.5 h-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="ml-1 transition duration-150 ease-in-out text-kashmir-500 group-hover:text-kashmir-300 group-focus:text-kashmir-300">
        {text}
      </span>
    </a>
  );
};

export default ResumeLink;
