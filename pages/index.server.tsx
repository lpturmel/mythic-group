import Head from "../components/Head.server";
import PlayerLoader from "../components/Player.client";
import { playerList } from "../utils/player";
import { Suspense } from "react";

import styles from "../styles/Index.module.css";

export default function Home() {
	return (
		<div>
			<Head />

			<div className={styles.vstack}>
				<p>Mythic+</p>
				<p className=""> Team </p>
			</div>
			<div className={styles.vstack}>
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
