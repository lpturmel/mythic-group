import Gear from "./Gear";
import { Dungeon } from "./Dungeon";

export default interface Player {
	achievement_points: number;
	active_spec_name: string;
	active_spec_role: string;
	class: string;
	faction: string;
	gear: Gear;
	gender: string;
	honorable_kills: number;
	last_crawled_at: string;
	mythic_plus_best_runs: Dungeon[];
	covenant: {
		id: number;
		name: "Kyrian" | "Necrolord" | "Venthyr" | "Night Fae";
		renown_level: number;
	};

	mythic_plus_scores: {
		all: number;
		dps: number;
		healer: number;
		spec_0: number;
		spec_1: number;
		spec_2: number;
		spec_3: number;
		tank: number;
	};
	name: string;
	profile_banner: string;
	mythic_plus_weekly_highest_level_runs: Dungeon[];
	profile_url: string;
	race: string;
	realm: string;
	region: string;
	thumbnail_url: string;
}

export type DungeonRole = "TANK" | "HEALING" | "DPS";
