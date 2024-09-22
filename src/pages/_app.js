import { FormspreeProvider } from "@formspree/react";
import "focus-visible";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";
import { inter, major_mono_display } from "./fonts";

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<main
			className={`${inter.variable} ${major_mono_display.variable} font-sans`}
		>
			<FormspreeProvider project="1528110468047043877">
				<Component {...pageProps} />
			</FormspreeProvider>
		</main>
	);
};

export default MyApp;
