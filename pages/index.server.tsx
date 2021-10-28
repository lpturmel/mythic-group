import Head from "../components/Head.server";
import PlayerLoader from "../components/Player.client";
import { playerList } from "../utils/player";
import { Suspense } from "react";

export default function Home() {
	return (
		<div className="bg-gray-900 w-full h-screen flex flex-col justify-center items-center space-y-8 p-4">
			<Head />

			<div className="flex flex-row space-x-2 text-3xl font-bold">
				<p className="text-white">Mythic+</p>
				<p className="text-green-400"> Team </p>
			</div>
			<div className="flex flex-col w-full space-y-4 items-center">
				{playerList.map((player) => (
					<Suspense
						fallback={<p>Loading...</p>}
						key={player.characterName}
					>
						<PlayerLoader player={player} />
					</Suspense>
				))}
			</div>
		</div>
	);
}
