import React from 'react';
import SectionHeader from './SectionHeader';
import TechnologyLink from './TechnologyLink';

const Projects = () => {
  return (
    <div id="projects" className="pt-32 pb-32">
      <SectionHeader number="2" title="what i've made" />
      <div className="max-w-xl mt-16 ml-10 space-y-32 text-xl">
        <section>
          <h2 className="text-2xl text-valencia-500">Definitely Not Reddit</h2>
          <p className="mt-4 text-bastille-800">
            Full-stack Reddit clone web application with user account
            functionality, posts, comments, and upvotes/downvotes
          </p>
          <div className="mt-4 text-lg">
            <ul className="flex space-x-3">
              <TechnologyLink name="Next.js" />
              <TechnologyLink name="TypeScript" />
              <TechnologyLink name="GraphQL" />
              <TechnologyLink name="PostgreSQL" />
              <TechnologyLink name="TypeORM" />
              <TechnologyLink name="Apollo" />
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl text-valencia-500">Melody Chuang Coaching</h2>
          <p className="mt-4 text-bastille-800">
            Life coach business website with contact and application forms and
            social media/content widgets
          </p>
          <div className="mt-4 text-lg text-kashmir-500">
            <ul className="flex space-x-3">
              <TechnologyLink name="React" />
              <TechnologyLink name="Node.js" />
              <TechnologyLink name="Express" />
              <TechnologyLink name="MongoDB" />
              <TechnologyLink name="TailwindCSS" />
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
