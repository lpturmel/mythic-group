import { playerList } from "../utils/Player";
import { Suspense, FunctionComponent } from "react";
import { fetchPlayerData } from "../utils/Api";
import useData from "../utils/Player";
import PlayerItem from "../components/PlayerItem.client";
import Spinner from "../components/Spinner";

export default function Home() {
	return (
	<div className="bg-gray-900 w-full min-h-screen flex flex-col justify-center items-center space-y-8 p-4">
			<div className="flex flex-row space-x-2 text-3xl font-bold">
				<p className="text-white">Mythic+</p>
				<p className="text-green-400"> Team </p>
			</div>

			<div className="flex flex-col w-full space-y-4 items-center min-h-[684px]">
				{playerList.map((player) => (
					<Suspense fallback={<Spinner />} key={player.characterName}>
						<PlayerLoader player={player} />
					</Suspense>
				))}
			</div>
		</div>
	);
}

export interface PlayersProps {
	player: {
		realm: string;
		characterName: string;
		region: string;
	};
}

const PlayerLoader: FunctionComponent<PlayersProps> = ({ player }) => {
	const playerData = useData(player.characterName, () =>
		fetchPlayerData({
			characterName: player.characterName,
			realm: player.realm,
			region: player.region,
		})
	);
	return (
		<Suspense fallback={<Spinner />}>
			<PlayerItem player={playerData} />
		</Suspense>
	);
};
