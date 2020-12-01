import React from 'react';
import SectionHeader from './SectionHeader';
import Image from './misc/Image';

const AboutMe = () => {
  return (
    <div id="about" className="pt-24 pb-16 mt-10 lg:pb-32 lg:pt-40">
      <SectionHeader number="1" title="who am i" emoji="😀" />
      <div className="flex flex-col-reverse justify-between mt-12 md:flex-row md:ml-20 items-top">
        <div className="w-full mt-10 space-y-4 text-base leading-relaxed md:mt-0 md:w-2/3 lg:text-xl text-bastille-800">
          <p>
            I'm a self-taught programmer with a background in finance. In my
            past life, I built the in-house financial systems that enabled us at
            the Neuroscience Institute of NYU Langone Health to sustain
            continuity of funding.
          </p>
          <p>
            Seeking new horizons, I decided to take my love of building things
            to programming, where I find adventure in the fusion of technology
            and creativity that empowers so much of our modern world.
          </p>
          <p>
            I'm a proud Recurse Center and NYU Stern alumnus. To unwind, I clown
            around with{' '}
            <a
              href="https://www.instagram.com/uhoh_its_iro/"
              className="underline transition duration-75 ease-in-out text-kashmir-500 hover:text-kashmir-300 focus:outline-none focus-visible:text-kashmir-300"
              target="_blank"
            >
              my husky Iro 🐺
            </a>{' '}
            and watch YouTube videos on everything ranging from culinary
            experiments to fitness science to the latest consumer tech.
          </p>
        </div>

        <div className="w-full md:ml-12 md:w-1/3">
          <div className="flex w-3/4 max-w-xs mx-auto md:w-full">
            <Image src="myself.jpg" className="rounded-full shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
