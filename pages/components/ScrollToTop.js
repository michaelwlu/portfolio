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
      } transition-all z-10 transform duration-500 ease-in-out fixed right-8 bottom-8 `}
    >
      <a
        className="flex items-end transition-all duration-200 ease-in-out transform cursor-pointer hover:-translate-y-0.5 hover:text-valencia-500 text-kashmir-500 tracking-wide px-1 focus:outline-none outline-none focus:text-valencia-500 focus:-translate-y-0.5"
        onClick={scrollTop}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            scrollTop();
          }
        }}
        tabIndex={0}
      >
        <div className="mb-1 text-xl">shortcut</div>
        <div className="inline-block ml-2 text-4xl">↑</div>
      </a>
    </div>
  );
};

export default ScrollToTop;
