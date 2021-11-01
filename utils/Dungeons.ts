import { Dungeon } from "../types/Dungeon";

// Sort dungeons by shortname
export const sortDungeons = (dungeons: Dungeon[]) => {
	return dungeons.sort((a, b) => {
		if (a.short_name < b.short_name) {
			return -1;
		}
		if (a.short_name > b.short_name) {
			return 1;
		}
		return 0;
	});
};
