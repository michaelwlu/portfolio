import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-center w-full pb-10 mx-auto mt-32 space-x-2 text-sm">
        <div>Designed and built by Michael W. Lu</div>
        <div>|</div>
        <div>
          Photo by{' '}
          <a
            href="https://unsplash.com/@roberthaverly?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            className="transition duration-200 ease-in-out text-kashmir-500 hover:text-kashmir-300 focus:outline-none focus:text-kashmir-300"
            target="_blank"
          >
            Robert Haverly
          </a>{' '}
          on{' '}
          <a
            href="https://unsplash.com/s/photos/lights?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            className="transition duration-200 ease-in-out text-kashmir-500 hover:text-kashmir-300 focus:outline-none focus:text-kashmir-300"
            target="_blank"
          >
            Unsplash
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
