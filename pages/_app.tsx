import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextLink from "next/link";
import { ConfigProvider, StyleProvider, ThemePicker } from "vcc-ui";
import { Provider } from "react-redux";
import store from "@/store";
import config from "@/src/constants/Config";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ConfigProvider config={config}>
				<StyleProvider>
					<ThemePicker variant="light">
						<Component {...pageProps} />
					</ThemePicker>
				</StyleProvider>
			</ConfigProvider>
		</Provider>
	);
}

export default MyApp;
