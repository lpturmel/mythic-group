import { FunctionComponent } from "react";
import { Dungeon } from "../types/Dungeon";
import DungeonIcon from "./DungeonIcon.client";

export interface DungeonItemProps {
	dungeon: Dungeon;
}

const DungeonItem: FunctionComponent<DungeonItemProps> = ({ dungeon }) => {
	return (
		<div className="flex  flex-row space-x-4 text-white">
			{/* <DungeonIcon dungeon={dungeon.short_name} /> */}
			<p className="font-bold">{dungeon.short_name} </p>
			<p>{dungeon.mythic_level}</p>
		</div>
	);
};

export default DungeonItem;
