import React from 'react';
import SectionHeader from './SectionHeader';

const AboutMe = () => {
  return (
    <div id="about" className="pt-32 pb-32 mt-32">
      <SectionHeader number="1" title="who am i" />
      <div className="flex mt-12 ml-10 items-top">
        <div className="max-w-lg space-y-4 text-xl tracking-wide text-bastille-800">
          <p>
            I'm a self-taught programmer with a background in finance.
            Previously, I built the in-house financial systems that enabled us
            to sustain continuity of funding at the Neuroscience Institute of
            NYU Langone Health.
          </p>
          <p>
            Seeking new horizons, I decided to take my love of building things
            to code, where I find adventure in the fusion of technology and
            creativity that empowers so much of our modern world.
          </p>
          <p>
            I'm a proud Recurse Center and NYU Stern alumnus. To unwind, I clown
            around with my husky Iro and watch YouTube videos on everything
            ranging from culinary arts to the newest consumer tech.
          </p>
        </div>
        <img
          src="/myself_square.jpg"
          alt=""
          className="ml-12 rounded-full w-60 h-60"
        />
      </div>
    </div>
  );
};

export default AboutMe;
