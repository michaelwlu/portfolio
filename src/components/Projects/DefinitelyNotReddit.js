import React from "react";
import ProjectDisplay from "./ProjectDisplay";
import { DNR_REPO, DNR_SITE } from "../constants";

const DefinitelyNotReddit = () => {
	const projectDetails = {
		projectName: "Definitely Not Reddit",
		projectDesc:
			"Full-stack Reddit clone web application with user authentication, content posts (text, embedded media, meta link previews), upvotes/downvotes, and comments",
		projectUrl: DNR_SITE,
		githubUrl: DNR_REPO,
		techStack: [
			"Next.js",
			"TypeScript",
			"GraphQL",
			"PostgreSQL",
			"TypeORM",
			"Apollo",
		],
		demo: {
			directory: "definitelynotreddit",
			actions: ["Sign up", "Create post", "Comment"],
			textColor: "text-white",
		},
	};

	return <ProjectDisplay alignment="left" projectDetails={projectDetails} />;
};

export default DefinitelyNotReddit;
