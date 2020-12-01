import React from 'react';
import ExternalLink from '../components/Navbar/ExternalLink';
import GitHub from './assets/GitHub';
import LinkedIn from './assets/LinkedIn';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full pb-6 mx-auto mt-24 text-sm md:mt-32 md:pb-10 text-bastille-700">
      <div className="flex items-center pl-1 space-x-6">
        <ExternalLink
          href="https://github.com/michaelwlu"
          ariaLabel="GitHub"
          className="text-kashmir-500 hover:text-kashmir-400 focus-visible:text-kashmir-400"
        >
          <GitHub className="w-6 h-6" />
        </ExternalLink>
        <ExternalLink
          href="https://www.linkedin.com/in/michaelwlu/"
          ariaLabel="LinkedIn"
          className="text-kashmir-500 hover:text-kashmir-400 focus-visible:text-kashmir-400"
        >
          <LinkedIn className="w-6 h-6" />
        </ExternalLink>
      </div>
      <div className="mt-6">
        Made with 🤔 by{' '}
        <ExternalLink
          href="https://github.com/michaelwlu/portfolio"
          className="underline text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
        >
          Michael W. Lu
        </ExternalLink>
      </div>

      <div className="flex flex-wrap justify-center mt-2">
        <div className="mb-2">
          Design inspired by{' '}
          <ExternalLink
            href="https://brittanychiang.com/"
            className="underline text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
          >
            Brittany Chiang
          </ExternalLink>
          <div className="inline-block mx-1.5">|</div>
        </div>

        <div className="mb-2">
          Photo by{' '}
          <ExternalLink
            href="https://unsplash.com/@roberthaverly?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            className="underline text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
          >
            Robert Haverly
          </ExternalLink>{' '}
          on{' '}
          <ExternalLink
            href="https://unsplash.com/s/photos/lights?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            className="underline text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
          >
            Unsplash
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
