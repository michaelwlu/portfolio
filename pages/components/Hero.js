import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-fixed bg-no-repeat bg-cover min-h-80s bg-custom bg-hero-pattern">
      <div className="w-5/12 pt-24 pb-24 ml-6/12">
        <div className="text-xl tracking-wide text-carrara">Hi, my name is</div>
        <div className="mt-3 -ml-1 text-7xl text-goldenhour">Michael W. Lu</div>
        <div className="mt-5 mb-12 space-y-1 text-xl tracking-wide text-carrara">
          <p>I'm a software engineer based in New York City.</p>
          <p>I build web experiences that are engaging and effortless.</p>
        </div>
        <button className="flex items-center justify-center px-5 py-2 leading-7 tracking-wide whitespace-no-wrap transition duration-200 ease-in-out rounded-xl focus:outline-none text-carrara bg-valencia-500 hover:bg-valencia-400 hover:shadow-inner active:bg-valencia-400 focus:bg-valencia-400">
          <Link to="contact" smooth="easeInOutCubic">
            Get In Touch
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
