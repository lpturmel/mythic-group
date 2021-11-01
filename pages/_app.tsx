import { AppProps } from "next/app";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* <Head /> */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
