import { FunctionComponent, Suspense } from "react";
import Player from "../types/Player";
import { fetchPlayerData } from "../utils/Api";
import useData, { playerList } from "../utils/player";
import PlayerItem from "./PlayerItem.client";

export interface PlayersProps {
	player: {
		realm: string;
		characterName: string;
		region: string;
	};
}

const Players: FunctionComponent<PlayersProps> = ({ player }) => {
	const playerData = useData(player.characterName, () =>
		fetchPlayerData({
			characterName: player.characterName,
			realm: player.realm,
			region: player.region,
		})
	);
	console.log(playerData);
	return (
		<div>
			<PlayerItem player={playerData} />
		</div>
	);
};
export default Players;
