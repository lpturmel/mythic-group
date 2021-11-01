import { FunctionComponent } from "react";
import { Dungeon } from "../types/Dungeon";
import DungeonIcon from "./DungeonIcon.client";

export interface DungeonItemProps {
	dungeon: Dungeon;
}

const DungeonItem: FunctionComponent<DungeonItemProps> = ({ dungeon }) => {
	const weeklyAffix = dungeon.affixes.find(
		(affix) => affix.id === 9 || affix.id === 10
	);
	return (
		<div className="flex flex-row space-x-4 text-white items-center">
			<DungeonIcon dungeon={dungeon.short_name} />
			<p className="font-bold min-w-[50px]">{dungeon.short_name} </p>
			<p>{dungeon.mythic_level}</p>
			<p>{weeklyAffix?.name}</p>
		</div>
	);
};

export default DungeonItem;
