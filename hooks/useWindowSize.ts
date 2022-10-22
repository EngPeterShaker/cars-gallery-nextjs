import { useState, useEffect } from "react";
export default function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});
	const [windowType, setWindowType] = useState("");
	useEffect(() => {
		const ua = navigator.userAgent;
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});

			// if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			// 	return "tablet";
			// }
			// if (
			// 	/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
			// 		ua
			// 	)
			// ) {
			// 	return "mobile";
			// }
			return windowSize;
		}
		// Add event listener
		window.addEventListener("resize", handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
}
