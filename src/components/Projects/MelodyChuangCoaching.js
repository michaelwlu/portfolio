import React from "react";
import ProjectDisplay from "./ProjectDisplay";
import { MCB_REPO, MCB_SITE } from "../constants";

const MelodyChuangCoaching = () => {
	const projectDetails = {
		projectName: "Melody Chuang Coaching",
		projectDesc:
			"Life coaching business site with contact forms and social media widgets (currently inactive)",
		projectUrl: MCB_SITE,
		githubUrl: MCB_REPO,
		techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
		demo: {
			directory: "melodychuangcoaching",
			actions: ["Home", "Widgets", "Forms"],
			textColor: "text-gray-600",
		},
	};

	return <ProjectDisplay alignment="right" projectDetails={projectDetails} />;
};

export default MelodyChuangCoaching;
