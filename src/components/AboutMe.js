import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import myself from "@/images/myself.jpg";

const AboutMe = () => {
	return (
		<div id="about" className="pt-24 pb-16 mt-10 lg:pb-32 lg:pt-24">
			<SectionHeader number="1" title="who am i" emoji="😀" />
			<div className="flex flex-col-reverse justify-between mt-12 md:flex-row md:ml-20 items-top">
				<div className="w-full mt-10 space-y-4 text-base leading-relaxed md:mt-0 md:w-2/3 lg:text-lg text-bastille-800 md:pr-4">
					<p>
						In my past life, I built the in-house financial systems that enabled
						the NYU Neuroscience Institute to sustain continuity of funding.
					</p>
					<p>
						Seeking new horizons, I took my love of building things to
						programming, where I found adventure in the fusion of technology and
						creativity that empowers so much of our modern world.
					</p>
					<p>
						These days, I work in front-end web development at{" "}
						<a
							href="http://spatialfront.com/"
							className="underline transition duration-75 ease-in-out text-kashmir-500 hover:text-kashmir-300 focus:outline-none focus-visible:text-kashmir-300"
							target="_blank"
						>
							Spatial Front, Inc.
						</a>{" "}
						My work strives to make it easier for our country's farmers,
						ranchers, and forest landowners to access{" "}
						<a
							href="https://efotg.sc.egov.usda.gov/"
							className="underline transition duration-75 ease-in-out text-kashmir-500 hover:text-kashmir-300 focus:outline-none focus-visible:text-kashmir-300"
							target="_blank"
						>
							technical resources
						</a>{" "}
						on voluntary conservation practices.
					</p>
					<p>
						I'm a proud alumnus of NYU Stern as well as the{" "}
						<a
							href="https://www.recurse.com/"
							className="underline transition duration-75 ease-in-out text-kashmir-500 hover:text-kashmir-300 focus:outline-none focus-visible:text-kashmir-300"
							target="_blank"
						>
							Recurse Center
						</a>
						. To unwind, I clown around with{" "}
						<a
							href="https://www.instagram.com/uhoh_its_iro/"
							className="underline transition duration-75 ease-in-out text-kashmir-500 hover:text-kashmir-300 focus:outline-none focus-visible:text-kashmir-300"
							target="_blank"
						>
							my husky Iro
						</a>
						, learn new culinary skills, and try to pick up heavier weights than
						I did the week before.
					</p>
				</div>

				<div className="w-full md:ml-12 md:w-1/3">
					<div className="flex w-3/4 max-w-xs mx-auto md:w-full">
						<Image
							src={myself}
							className="rounded-full shadow-md"
							priority="true"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
