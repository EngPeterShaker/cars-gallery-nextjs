import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { Provider } from "react-redux";
import store from "@/store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<StyleProvider>
				<ThemePicker variant="light">
					<Component {...pageProps} />
				</ThemePicker>
			</StyleProvider>
		</Provider>
	);
}

export default MyApp;
