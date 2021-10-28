import Player from "../types/Player";
import { fetchPlayerData } from "./Api";
import colors from "./colors";

export function inRange(x: number, min: any, max: any) {
	return (x - min) * (x - max) <= 0;
}

export const getPlayerScoreColor = (player: Player) => {
	var hexColor: string = "";
	colors.forEach((color, index) => {
		if (
			inRange(
				Math.round(player.mythic_plus_scores.all),
				color.score,
				colors[index + 1] ? colors[index + 1].score : 0
			)
		) {
			hexColor = color.rgbHex;
		}
	});
	return hexColor;
};

const cache: any = {};
export default function useData(key: string, fetcher: Function) {
	if (!cache[key]) {
		let data: any;
		let promise: Function;
		cache[key] = () => {
			if (data !== undefined) return data;
			if (!promise) promise = fetcher().then((r: any) => (data = r));
			throw promise;
		};
	}
	return cache[key]();
}
export const fetchPlayers = async () => {
	return await Promise.all(
		playerList.map((player) => fetchPlayerData(player))
	);
};

export const playerList = [
	{
		realm: "Zul'Jin",
		characterName: "Feljester",
		region: "us",
	},
	{
		realm: "Zul'Jin",
		characterName: "Fashog",
		region: "us",
	},
	{
		realm: "Zul'Jin",
		characterName: "Xaviotron",
		region: "us",
	},
	{
		realm: "Zul'Jin",
		characterName: "Jahash",
		region: "us",
	},
	{
		realm: "Zul'jin",
		characterName: "Gniatsayle",
		region: "us",
	},
];
