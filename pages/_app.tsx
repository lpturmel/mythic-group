import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title> Mythic+ Team </title>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="Casual Mythic + team tracking"
				/>
				<meta
					name="keywords"
					content="World of Warcraft, Dungeons, Mythic Plus, Mythic+"
				/>
				<meta name="author" content="Louis-Philippe Turmel" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
