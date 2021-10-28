import Player from "../types/Player";

export const RAIDER_IO_BASE_URL = "https://raider.io/api/v1/";
export const RAIDER_IO_URL = "https://raider.io/characters/us/";

interface RaiderIoRequest {
	realm: string;
	characterName: string;
	region: string;
}
export const fetchPlayerData = async (
	options: RaiderIoRequest
): Promise<Player> => {
	return fetch(
		RAIDER_IO_BASE_URL +
			`characters/profile?region=${options.region}&realm=${options.realm}&name=${options.characterName}&fields=mythic_plus_scores,mythic_plus_weekly_highest_level_runs,gear`
	).then((res) => res.json());
};
