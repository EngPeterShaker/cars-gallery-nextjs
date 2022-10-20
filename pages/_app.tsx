import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<StyleProvider>
			<ThemePicker variant="light">
				<Component {...pageProps} />
			</ThemePicker>
		</StyleProvider>
	);
}

export default MyApp;
