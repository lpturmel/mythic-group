import { AppProps } from "next/app";
import Head from "../components/Head";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{" "}
			<Head /> <Component {...pageProps} />{" "}
		</>
	);
}

export default MyApp;
