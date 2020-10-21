import React from 'react';

const ResumeLink = () => {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      className="block transition duration-200 ease-in-out transform cursor-pointer group focus:outline-none"
    >
      <div className="inline-block text-base transition duration-200 transform text-sienna-400 group-hover:rotate-66 group-focus:rotate-66">
        \
      </div>
      <div className="inline-flex items-center ml-1">
        <span className="transition duration-200 ease-in-out text-kashmir-500 group-hover:text-kashmir-300 group-focus:text-kashmir-300">
          resume
        </span>
        {/* <span className="text-base transition duration-200 ease-in-out opacity-0 text-kashmir-300 group-hover:opacity-100 group-focus:opacity-100 ">
          ↓
        </span> */}
      </div>
    </a>
  );
};

export default ResumeLink;
