import React from 'react';

const TechnologyLink = ({ name, className, alignment = 'left' }) => {
  const icons = {
    code: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
    database: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    ),
    server: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    ),
    link: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    ),
    css: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
      />
    ),
  };

  const technologies = {
    'Next.js': { type: 'code', link: 'https://nextjs.org/' },
    TypeScript: { type: 'code', link: 'https://www.typescriptlang.org/' },
    GraphQL: { type: 'link', link: 'https://graphql.org/' },
    PostgreSQL: { type: 'database', link: 'https://www.postgresql.org/' },
    TypeORM: { type: 'database', link: 'https://typeorm.io/#/' },
    Apollo: { type: 'server', link: 'https://www.apollographql.com/' },
    React: { type: 'code', link: 'https://reactjs.org/' },
    'Node.js': { type: 'server', link: 'https://nodejs.org/' },
    Express: { type: 'server', link: 'https://expressjs.com/' },
    MongoDB: { type: 'database', link: 'https://www.mongodb.com/' },
    TailwindCSS: { type: 'css', link: 'https://tailwindcss.com/' },
  };

  const href = technologies[name].link;
  const icon = icons[technologies[name].type];

  return (
    <li>
      <a
        href={href}
        className={`${
          alignment === 'right' ? 'lg:flex-row-reverse lg:space-x-reverse' : ''
        } ${className} flex-row flex space-x-1 lg:space-x-2 items-center transition duration-75 ease-in-out text-kashmir-500 focus:outline-hidden focus:underline group w-max-content lg:no-underline underline hover:underline`}
        target="_blank"
      >
        <div className="transition duration-75 ease-in-out text-kashmir-300 lg:text-kashmir-200 group-hover:text-kashmir-400 group-focus:text-kashmir-400">
          <svg
            className="w-3 h-3 lg:w-4 lg:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {icon}
          </svg>
        </div>
        <div className="pr-3.5 lg:pr-0">{name}</div>
      </a>
    </li>
  );
};

export default TechnologyLink;
