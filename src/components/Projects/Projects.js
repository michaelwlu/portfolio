import React from 'react';
import DefinitelyNotReddit from './DefinitelyNotReddit';
import MelodyChuangCoaching from './MelodyChuangCoaching';
import GitHub from '../assets/GitHub';
import ExternalLink from '../Navbar/ExternalLink';
import SectionHeader from '../SectionHeader';

const Projects = () => {
  return (
    <div id="projects" className="pt-24 pb-16 lg:pb-32 lg:pt-40">
      <SectionHeader number="2" title="what i've made" emoji="💡" />
      <div className="mt-10 space-y-20 lg:space-y-32 lg:space-y-48 lg:mt-20 md:ml-20 lg:ml-10 md:mr-2">
        <DefinitelyNotReddit />
        <MelodyChuangCoaching />
        <div className="flex justify-center text-base">
          <ExternalLink
            href="https://github.com/michaelwlu"
            ariaLabel="GitHub"
            className="text-lg flex items-center leading-none whitespace-no-wrap border-b-1.5 border-bastille-500 hover:border-bastille-300 text-bastille-500 hover:text-bastille-300 focus:text-bastille-300 group"
          >
            <div>See more on GitHub</div>
            <div className="transition duration-75 ease-in-out text-bastille-700 group-hover:text-bastille-500">
              <GitHub className="w-5 h-5 mb-1 ml-2" />
            </div>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Projects;
