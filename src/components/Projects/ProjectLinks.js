import ExternalLink from "../Navbar/ExternalLink";

const ProjectLinks = ({ projectName, githubUrl, projectUrl, variant }) => {
	return (
		<div className="flex flex-col items-center space-y-2 md:space-y-0 md:space-x-3 md:flex-row">
			<ExternalLink
				href={githubUrl}
				ariaLabel={`GitHub | ${projectName}`}
				className={`${
					variant === "small"
						? "bg-white text-kashmir-400"
						: "bg-white text-kashmir-400 hover:text-valencia-400 focus-visible:text-valencia-400"
				} p-1.5 rounded-full shadow-md`}
			>
				<svg
					className={variant === "small" ? "w-5 h-5" : "w-6 h-6"}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Visit GitHub</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2.6}
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
			</ExternalLink>

			<ExternalLink
				href={projectUrl}
				ariaLabel={`Visit site | ${projectName}`}
				className={`${
					variant === "small"
						? "bg-white text-kashmir-400"
						: "bg-white text-kashmir-400 hover:text-valencia-400 focus-visible:text-valencia-400"
				} p-1.5 rounded-full shadow-md`}
			>
				<svg
					className={variant === "small" ? "w-5 h-5" : "w-6 h-6"}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Visit website</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2.5}
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</ExternalLink>
		</div>
	);
};

export default ProjectLinks;
