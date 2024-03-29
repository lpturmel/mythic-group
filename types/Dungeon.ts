// Generated by https://quicktype.io

import { Affix } from "./Affix";

export interface Dungeon {
    dungeon: string;
    short_name: DungeonNames;
    mythic_level: number;
    completed_at: string;
    clear_time_ms: number;
    par_time_ms: number;
    num_keystone_upgrades: number;
    map_challenge_mode_id: number;
    zone_id: number;
    score: number;
    affixes: Affix[];
    url: string;
}

export type DungeonNames =
    | "DOS"
    | "TOP"
    | "SOA"
    | "SD"
    | "PF"
    | "NW"
    | "MISTS"
    | "HOA"
    | "STRT"
    | "GMBT";
