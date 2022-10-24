import { useState, useEffect, useCallback } from "react";
// Define general type for useWindowSize hook, which includes width and height
export interface Size {
	width: number | undefined;
	height: number | undefined;
}

// Custom Hook
export default function useWindowSize(): "Desktop" | "Tablet" | "Mobile" {
	const [windowSize, setWindowSize] = useState<Size>({
		width: undefined,
		height: undefined,
	});
	const [windowWidth, setWindowWidth] = useState<number>(0);
	const handleResize = useCallback(() => {
		if (window.innerWidth !== windowSize.width)
			setWindowWidth(window.innerWidth);
	}, [windowSize.width]);

	useEffect(() => {
		// Add event listener
		window.addEventListener("resize", handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, [windowWidth, handleResize]); // Empty array ensures that effect is only run on mount

	if (windowWidth > 1008) {
		return "Desktop";
	} else if (windowWidth > 640) {
		return "Tablet";
	} else {
		return "Mobile";
	}
}
