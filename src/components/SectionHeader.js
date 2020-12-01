import React from 'react';

const SectionHeader = ({ number, title, emoji }) => {
  return (
    <h1 className="flex flex-col flex-wrap items-start font-bold leading-loose md:items-end md:flex-row font-logo">
      <div className="inline-block w-20 py-1 text-lg md:text-2xl text-sienna-400">
        {number} /{' '}
      </div>
      <div className="">
        <div className="inline pr-6 text-3xl md:text-4xl text-kashmir-500">
          {title}
        </div>
        <div className="inline-block py-1 text-2xl transform -translate-y-1">
          {emoji}
        </div>
      </div>
    </h1>
  );
};

export default SectionHeader;
