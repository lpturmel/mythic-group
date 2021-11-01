import { Dungeon } from "../types/Dungeon";
import { FunctionComponent } from "react";
import DungeonItem from "./DungeonItem.client";
import { sortDungeons } from "../utils/Dungeons";

export interface DungeonPanelProps {
	dungeons: Dungeon[];
}

const DungeonPanel: FunctionComponent<DungeonPanelProps> = ({ dungeons }) => {
	//const sortedDungeons = sortDungeons(dungeons);
	return (
		<div className="flex flex-col space-y-4">
			{dungeons.map((dungeon) => (
				<DungeonItem key={dungeon.zone_id} dungeon={dungeon} />
			))}
		</div>
	);
};

export default DungeonPanel;
