import { FunctionComponent } from "react";

export interface CovenantIconProps {
	covenant: "Kyrian" | "Necrolord" | "Venthyr" | "Night Fae";
}

const CovenantIcon: FunctionComponent<CovenantIconProps> = ({ covenant }) => {
	const urls = {
		Kyrian: "https://cdnassets.raider.io/images/sl/covenants/sigil_1.png",
		Venthyr: "https://cdnassets.raider.io/images/sl/covenants/sigil_2.png",
		"Night Fae":
			"https://cdnassets.raider.io/images/sl/covenants/sigil_3.png",
		Necrolord:
			"https://cdnassets.raider.io/images/sl/covenants/sigil_4.png",
	};
	return (
		<img
			width="30px"
			height="30px"
			alt={covenant}
			srcSet={urls[covenant]}
		/>
	);
};

export default CovenantIcon;
