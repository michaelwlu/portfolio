import React from 'react';

const DemoButton = ({
  children,
  action,
  played,
  setPlayed,
  activeDemo,
  setActiveDemo,
  className,
}) => {
  return (
    <a
      onClick={() => {
        setPlayed(0);
        setActiveDemo(action);
      }}
      tabIndex={0}
      className={`${
        activeDemo === action
          ? 'text-white bg-kashmir-500'
          : 'bg-white text-kashmir-500 focus-visible:text-white focus-visible:bg-kashmir-400'
      } ${className} relative flex overflow-hidden transition duration-75 ease-in-out cursor-pointer hover:text-white hover:bg-kashmir-400 focus:outline-hidden whitespace-no-wrap border border-gray-300 justify-center h-7 md:h-8`}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div
          style={{
            width: `${(100 - played * 100) * (activeDemo === action ? 1 : 0)}%`,
          }}
          className="absolute right-0 h-full bg-linear-to-bl from-kashmir-500 to-kashmir-600"
        ></div>
      </div>
      <div className="z-10 flex items-center justify-center pl-2 pr-3 md:pl-5 md:pr-6">
        <div className="text-kashmir-300">
          <svg
            className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="md:mt-px">{children}</div>
      </div>
    </a>
  );
};

export default DemoButton;
