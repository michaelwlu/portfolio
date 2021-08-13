import React, { useEffect, useState } from "react";
import ScrollToTop from "../components/misc/ScrollToTop";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects";

const Index = () => {
	const [showScroll, setShowScroll] = useState(false);
	const [vh, setVh] = useState(0);

	useEffect(() => {
		setVh(
			Math.max(
				document.documentElement.clientHeight || 0,
				window.innerHeight || 0
			)
		);
	}, []);

	useEffect(() => {
		const checkScrollTop = () => {
			if (!showScroll && window.pageYOffset > vh) {
				setShowScroll(true);
			} else if (showScroll && window.pageYOffset <= vh) {
				setShowScroll(false);
			}
		};

		window.addEventListener("scroll", checkScrollTop);

		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};
	}, [showScroll, setShowScroll]);

	return (
		<div className="relative bg-carrara">
			<Navbar />
			<Hero />
			<div className="pl-6 pr-6 md:pl-8 md:pr-8">
				<main className="w-full max-w-5xl mx-auto">
					<AboutMe />
					<Projects />
					<Contact />
					<Footer />
				</main>
			</div>
			<ScrollToTop showScroll={showScroll} />
		</div>
	);
};

export default Index;
