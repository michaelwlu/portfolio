import React from 'react';

const SectionHeader = ({ number, title }) => {
  return (
    <h1 className="font-bold font-logo">
      <span className="text-2xl text-sienna-400">{number} / </span>
      <span className="text-3xl text-kashmir-500">{title}</span>
    </h1>
  );
};

export default SectionHeader;
