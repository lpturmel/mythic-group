import { FunctionComponent } from "react";
import { fetchPlayerData } from "../utils/Api";
import useData from "../utils/player";
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

	return <PlayerItem player={playerData} />;
};
export default Players;
