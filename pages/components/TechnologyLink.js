import React from 'react';

const TechnologyLink = ({ name }) => {
  const technologies = {
    'Next.js': 'https://nextjs.org/',
    TypeScript: 'https://www.typescriptlang.org/',
    GraphQL: 'https://graphql.org/',
    PostgreSQL: 'https://www.postgresql.org/',
    TypeORM: 'https://typeorm.io/#/',
    Apollo: 'https://www.apollographql.com/',
    React: 'https://reactjs.org/',
    'Node.js': 'https://nodejs.org/',
    Express: 'https://expressjs.com/',
    MongoDB: 'https://www.mongodb.com/',
    TailwindCSS: 'https://tailwindcss.com/',
  };
  return (
    <li>
      <a
        href={technologies[name]}
        className="transition duration-200 ease-in-out text-kashmir-500 hover:text-kashmir-300 focus:outline-none focus:text-kashmir-300"
        target="_blank"
      >
        {name}
      </a>
    </li>
  );
};

export default TechnologyLink;
