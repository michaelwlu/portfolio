import React from 'react';
import ProjectDisplay from './ProjectDisplay';

const MelodyChuangCoaching = () => {
  const projectDetails = {
    projectName: 'Melody Chuang Coaching',
    projectDesc:
      'Life coaching business site with forms attached to email / database storage and social media / content widgets',
    projectUrl: 'https://melodychuang.com',
    githubUrl: 'https://github.com/michaelwlu/melody-chuang-coaching',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    demo: {
      directory: 'melodychuangcoaching',
      actions: ['Home', 'Widgets', 'Forms'],
      textColor: 'text-gray-600',
    },
  };

  return <ProjectDisplay alignment="right" projectDetails={projectDetails} />;
};

export default MelodyChuangCoaching;
