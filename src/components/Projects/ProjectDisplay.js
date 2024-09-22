import Image from "next/image";
import { useState } from "react";
import DemoButton from "./DemoButton";
import ProjectLinks from "./ProjectLinks";
import TechnologyLink from "./TechnologyLink";
import Video from "./Video";

const ProjectDisplay = ({ alignment, projectDetails }) => {
	const { projectName, projectDesc, projectUrl, githubUrl, techStack, demo } =
		projectDetails;

	const { directory, actions, textColor } = demo;

	const [activeDemo, setActiveDemo] = useState("banner");
	// const [activeHover, setActiveHover] = useState('none');
	const [played, setPlayed] = useState(0);

	return (
		<section>
			<div // container for demo section and info section
				className={`${
					alignment === "left"
						? "lg:flex-row-reverse lg:space-x-reverse"
						: "lg:flex-row"
				} flex items-start flex-col lg:space-x-13`}
			>
				<div // info section
					className="w-full lg:w-1/3"
				>
					<div
						className={`${
							alignment === "right" ? "lg:text-right lg:items-end" : ""
						} flex items-start text-left flex-col`}
					>
						<div className="flex items-center justify-between w-full md:items-end md:justify-start">
							<div>
								<h4 // 'Featured Project'
									className={`${
										alignment === "right"
											? "lg:flex-row-reverse lg:space-x-reverse"
											: ""
									} flex flex-row items-center space-x-1.5 text-sm md:text-base font-medium text-bastille-500`}
								>
									<div>Featured Project</div>{" "}
									<div className="pb-0.5 text-xs opacity-75">⭐</div>
								</h4>
								<h2 // Project name
									className="mt-2 text-2xl font-bold leading-snug lg:text-3xl text-valencia-400"
								>
									{projectName}
								</h2>
							</div>
							<div className="inline-block ml-8 md:mb-1 md:ml-6 lg:hidden">
								<ProjectLinks
									projectName={projectName}
									githubUrl={githubUrl}
									projectUrl={projectUrl}
									variant="small"
								/>
							</div>
						</div>
						<p // Project description
							className="mt-4 text-base md:text-lg text-bastille-800"
						>
							{projectDesc}
						</p>
						<ul // Technology links
							className={`${
								alignment === "right" ? "items-end" : "items-start"
							} flex flex-wrap lg:space-x-0 lg:flex-col mt-4 text-sm md:text-lg lg:space-y-0.5`}
						>
							{techStack.map((el) => {
								return (
									<TechnologyLink
										key={el}
										name={el}
										alignment={alignment}
										className="mb-1 lg:mb-0"
									/>
								);
							})}
						</ul>
						<div className="hidden mt-6 lg:block">
							<ProjectLinks
								projectName={projectName}
								githubUrl={githubUrl}
								projectUrl={projectUrl}
							/>
						</div>
					</div>
				</div>
				<div className="flex-shrink-0 w-full max-w-3xl pb-4 mt-6 md:mt-8 lg:w-2/3 group">
					<div className="flex flex-col w-full">
						<div
							className="relative bg-white rounded-md shadow-lg"
							style={{ paddingBottom: "56.25%" }}
						>
							<div className="absolute overflow-hidden rounded-md">
								{activeDemo === "banner" ? (
									<div className="relative">
										<Image
											src={`/images/${directory}/banner.png`}
											width={1280}
											height={720}
											className="rounded-md"
											priority="true"
											style={{
												maxWidth: "100%",
												height: "auto",
											}}
										/>
										<Image
											src={`/images/${directory}/screenshot.png`}
											className="absolute top-0 left-0 transition-all duration-200 ease-in-out delay-75 rounded-md opacity-100 md:opacity-0 group-hover:opacity-100"
											fill
											sizes="100vw"
										/>
									</div>
								) : (
									<Video
										key={activeDemo}
										source={`${directory}/${activeDemo}`}
										setActiveDemo={setActiveDemo}
										setPlayed={setPlayed}
									/>
								)}
							</div>
						</div>
						<div className="flex flex-col items-center justify-center w-full mt-4 md:mt-6">
							<div className="mb-1.5 text-xs italic text-center lg:hidden text-bastille-500">
								Tap to play demos
							</div>
							<div className="relative inline-flex justify-center max-w-full -space-x-px text-xs rounded-md shadow-md lg:text-sm">
								{actions.map((name) => {
									return (
										<DemoButton
											key={name}
											action={name.toLowerCase().replace(" ", "-")}
											played={played}
											setPlayed={setPlayed}
											activeDemo={activeDemo}
											setActiveDemo={setActiveDemo}
											className="first:rounded-l-md last:rounded-r-md first:pl-0.5 last:pr-0.5"
										>
											{name}
										</DemoButton>
									);
								})}
							</div>
							<div
								className={`text-bastille-500 hidden lg:block text-xs transition-all duration-200 ease-in-out delay-75 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 mt-3 italic w-full text-center`}
							>
								Click to play demos
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectDisplay;
