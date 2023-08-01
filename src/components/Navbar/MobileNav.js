import React from "react";
import GitHub from "../assets/GitHub";
import LinkedIn from "../assets/LinkedIn";
import ExternalLink from "./ExternalLink";
import NavLink from "./NavLink";
import ResumeLink from "./ResumeLink";
import { motion, AnimatePresence } from "framer-motion";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";

const MobileNav = ({ isVisible, handleClick }) => {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					key="container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ oapcity: 0 }}
					transition={{ duration: 0.15 }}
					className="fixed top-0 right-0 z-20 flex justify-end w-screen h-screen backdrop-blur"
				>
					<motion.nav
						key="nav"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ duration: 0.15 }}
						className="h-full pt-24 bg-carrara"
					>
						<div className="flex flex-col items-center justify-between w-full h-full px-8 pt-10 text-2xl font-bold pb-60 text-kashmir-500 font-logo">
							<NavLink number="1" text="about" handleClick={handleClick} />
							<NavLink number="2" text="projects" handleClick={handleClick} />
							<NavLink number="3" text="contact" handleClick={handleClick} />
							<ResumeLink text="resume" />
							<div className="flex items-center pl-1 space-x-6">
								<ExternalLink
									href={GITHUB_URL}
									ariaLabel="GitHub"
									className="text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
								>
									<GitHub className="w-7 h-7" />
								</ExternalLink>
								<ExternalLink
									href={LINKEDIN_URL}
									ariaLabel="LinkedIn"
									className="text-kashmir-500 hover:text-kashmir-300 focus-visible:text-kashmir-300"
								>
									<LinkedIn className="w-7 h-7" />
								</ExternalLink>
							</div>
						</div>
					</motion.nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MobileNav;
