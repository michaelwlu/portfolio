import React from 'react';
import ProjectDisplay from './ProjectDisplay';

const DefinitelyNotReddit = () => {
  const projectDetails = {
    projectName: 'Definitely Not Reddit',
    projectDesc:
      'Full-stack Reddit clone web application with user accounts, posts, comments, and upvotes / downvotes',
    projectUrl: 'https://definitelynotreddit.com',
    githubUrl: 'https://github.com/michaelwlu/definitely-not-reddit',
    techStack: [
      'Next.js',
      'TypeScript',
      'GraphQL',
      'PostgreSQL',
      'TypeORM',
      'Apollo',
    ],
    demo: {
      directory: 'definitelynotreddit',
      actions: ['Sign up', 'Create post', 'Comment'],
      textColor: 'text-white',
    },
  };

  return <ProjectDisplay alignment="left" projectDetails={projectDetails} />;
};

export default DefinitelyNotReddit;
