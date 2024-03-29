import { DungeonRole } from "../types/Player";
export interface RoleIconProps {
	role: DungeonRole;
}

const RoleIcon: React.FunctionComponent<RoleIconProps> = ({ role }) => {
	const urls = {
		DPS: "https://cdnassets.raider.io/assets/img/role_dps-eb25989187d4d3ac866d609dc009f090.png",
		HEALING:
			"https://cdnassets.raider.io/assets/img/role_healer-984e5e9867d6508a714a9c878d87441b.png",
		TANK: "https://cdnassets.raider.io/assets/img/role_tank-6cee7610058306ba277e82c392987134.png",
	};
	return <img width="24px" height="24px" alt={role} srcSet={urls[role]} />;
};

export default RoleIcon;
