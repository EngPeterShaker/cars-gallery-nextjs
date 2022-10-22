import { useState, useEffect } from "react";
// Define general type for useWindowSize hook, which includes width and height
export interface Size {
	width: number | undefined;
	height: number | undefined;
}

// Hook
export default function useWindowSize(): "Desktop" | "Tablet" | "Mobile" {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState<Size>({
		width: undefined,
		height: undefined,
	});
	const [windowWidth, setWindowWidth] = useState<number>(0);

	function handleResize() {
		// Set window width/height to state
		console.log(`window.innerWidth`, window.innerWidth);
		if (window.innerWidth !== windowSize.width)
			// setWindowSize({
			// 	width: window.innerWidth,
			// 	height: window.innerHeight,
			// });
			setWindowWidth(window.innerWidth);
	}
	useEffect(() => {
		// Handler to call on window resize

		// Add event listener
		window.addEventListener("resize", handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, [windowWidth]); // Empty array ensures that effect is only run on mount

	if (windowWidth > 1008) {
		return "Desktop";
	} else if (windowWidth > 640) {
		return "Tablet";
	} else {
		return "Mobile";
	}

	// return windowWidth;
}
