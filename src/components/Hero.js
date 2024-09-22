import { Link } from "react-scroll";
// import Image from './misc/Image.js';
import backgroundMobile from "@/images/background-mobile.jpg";
import background from "@/images/background.jpg";
import Image from "next/legacy/image";

const Hero = () => {
	return (
		<div className="relative">
			<div
				className="hidden min-h-screen md:block md:-mt-24"
				style={{ clipPath: "inset(0)" }}
			>
				<Image
					src={background}
					layout="fill"
					objectFit="cover"
					objectPosition="bottom"
					className="fixed top-0 left-0"
					priority="true"
				/>
			</div>
			<div className="h-screen md:hidden" style={{ clipPath: "inset(0)" }}>
				<Image
					src={backgroundMobile}
					layout="fill"
					objectFit="cover"
					className="filter-dark-2/3"
					priority="true"
				/>
			</div>

			<div className="absolute items-center justify-start w-full h-full px-6 md:flex top-20 md:top-24">
				<div className="flex flex-col justify-center max-w-full mx-auto mt-32 w-max-content md:pl-7 md:w-6/12 md:-mt-24 md:ml-6/12">
					<div className="text-lg md:text-xl text-carrara">Hi, my name is</div>
					<div className="mt-4 text-5xl font-semibold leading-tight md:leading-tight md:mt-6 md:font-normal md:text-6xl lg:text-7xl text-goldenhour">
						Michael W. Lu
					</div>
					<div className="mt-8 mb-12 space-y-2 text-base md:text-lg lg:text-xl text-carrara">
						<p>I'm a software engineer based in San Francisco.</p>
						<p>I build web experiences that are engaging and effortless.</p>
					</div>
					<div className="flex flex-wrap items-center text-sm lg:text-base">
						<Link to="about" smooth="easeInOutCubic">
							<button className="flex items-center justify-center py-2 pl-4 pr-5 mb-3 mr-3 leading-8 text-white whitespace-no-wrap transition duration-75 ease-in-out md:pl-5 md:pr-6 rounded-xl focus:outline-none bg-valencia-500 hover:bg-valencia-400 active:bg-valencia focus-visible:bg-valencia-400">
								🔍 Learn More
							</button>
						</Link>
						<Link to="contact" smooth="easeInOutCubic">
							<button className="flex items-center justify-center py-2 pl-4 pr-5 mb-3 leading-7 text-gray-200 whitespace-no-wrap transition duration-75 ease-in-out bg-opacity-25 border-2 border-white border-opacity-50 md:pl-5 hover:bg-opacity-75 md:pr-6 rounded-xl focus:outline-none bg-bastille-800 hover:bg-bastille-700 active:bg-bastille-700 focus-visible:bg-bastille-700">
								👋 Get In Touch
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
