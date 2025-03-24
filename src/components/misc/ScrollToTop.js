import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = ({ showScroll }) => {
  const scrollTop = () => {
    scroll.scrollToTop({
      smooth: 'easeInOutCubic',
      ignoreCancelEvents: true,
      delay: 100,
    });
  };
  return (
    <div
      className={`${
        showScroll ? 'opacity-100' : 'opacity-0 translate-y-6 invisible'
      } transition-all z-10 transform duration-300 ease-in-out fixed right-8 bottom-8 md:block hidden`}
    >
      <a
        className="hover:-translate-y-0.5 hover:shadow-md focus:shadow-md focus:-translate-y-0.5 group transform duration-300 ease-in-out flex items-center outline-hidden cursor-pointer text-kashmir-500 focus:outline-hidden bg-white bg-opacity-50 rounded-lg px-3.5 py-1 text-lg hover:bg-opacity-75 focus:opacity-75"
        onClick={scrollTop}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            scrollTop();
          }
        }}
        tabIndex={0}
      >
        <div className="hidden pr-2 lg:block">back to top</div>
        <div>🔝</div>
      </a>
    </div>
  );
};

export default ScrollToTop;
