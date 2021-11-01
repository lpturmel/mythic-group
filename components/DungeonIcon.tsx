import Image from "next/image";
import { FunctionComponent } from "react";
import { DungeonNames } from "../types/Dungeon";
import { covenants } from "../utils/Covenant";

export interface DungeonIconProps {
	dungeon: DungeonNames;
}

const DungeonIcon: FunctionComponent<DungeonIconProps> = ({ dungeon }) => {
	return (
		<Image
			width="16px"
			height="16px"
			src={covenants[dungeon].picture}
			className="w-8 h-8"
		/>
	);
};

export default DungeonIcon;
