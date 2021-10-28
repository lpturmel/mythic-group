import Head from "next/head";

export interface CustomHeadProps {}

const CustomHead: React.FunctionComponent<CustomHeadProps> = () => {
	return (
		<Head>
			<title> Mythic+ Team </title>
			<meta charSet="UTF-8" />
			<meta name="description" content="Casual Mythic + team tracking" />
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
	);
};

export default CustomHead;
