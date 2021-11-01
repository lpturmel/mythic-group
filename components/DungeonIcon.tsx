import { FunctionComponent } from "react";
import { DungeonNames } from "../types/Dungeon";
import { covenants } from "../utils/Covenant";

export interface DungeonIconProps {
	dungeon: DungeonNames;
}

const DungeonIcon: FunctionComponent<DungeonIconProps> = ({ dungeon }) => {
	return <img width="32px" src={covenants[dungeon].picture} />;
};

export default DungeonIcon;
