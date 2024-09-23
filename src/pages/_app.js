import { FormspreeProvider } from "@formspree/react";
import "focus-visible";
import { Inter, Major_Mono_Display } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const major_mono_display = Major_Mono_Display({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-logo",
	weight: "400",
});

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
