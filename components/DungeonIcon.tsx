import Image from "next/image";

export interface DungeonIconProps {
	dungeon: "dos" | "top" | "soa" | "sd" | "plague" | "nw" | "mots" | "hoa";
}

const DungeonIcon: React.FunctionComponent<DungeonIconProps> = ({
	dungeon,
}) => {
	return <Image width="16px" height="16px" src={dungeon} />;
};

export default DungeonIcon;
