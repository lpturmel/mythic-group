import { FunctionComponent } from "react";
import Player, { DungeonRole } from "../types/Player";
import { RAIDER_IO_URL } from "../utils/Api";
import { getPlayerScoreColor } from "../utils/player";
import RoleIcon from "./RoleIcon";

export interface PlayerItemProps {
	player: Player;
}

const PlayerItem: FunctionComponent<PlayerItemProps> = ({ player }) => {
	const scoreColor = getPlayerScoreColor(player);

	return (
		<div className="relative cursor-pointer transition-colors duration-200 hover:bg-gray-600 flex flex-row bg-gray-700 w-full sm:w-[400px] rounded-md shadow-lg p-4 justify-start border-2 border-gray-600">
			<p
				style={{ color: scoreColor }}
				className="absolute top-2 right-4 font-semibold"
			>
				{Math.round(player.mythic_plus_scores.all)}
			</p>
			<div className="font-semibold absolute bottom-2 right-4 flex flex-row space-x-2">
				<p className="text-gray-500">Weekly:</p>
				<p className="text-white">
					{player.mythic_plus_weekly_highest_level_runs.length}/10
				</p>
			</div>
			<div className="absolute top-[-10px] left-[-10px]">
				<RoleIcon
					role={player.active_spec_role.toLowerCase() as DungeonRole}
				/>
			</div>
			<div className="flex flex-row space-x-4 text-xl  items-center">
				<img
					src={player.thumbnail_url}
					className="rounded-full w-16 h-16 ring-2 ring-gray-600"
				/>
				<a
					href={RAIDER_IO_URL + player.realm + "/" + player.name}
					target="_blank"
					className=""
				>
					<p className="text-white transition-colors truncate duration-200 font-semibold hover:text-green-400">
						{player.name}
					</p>
				</a>
			</div>
		</div>
		// <Accordion allowMultiple w="300px" maxWidth="600px">
		// 	<AccordionItem w="100%" border="none">
		// 		<AccordionButton
		// 			w="100%"
		// 			position="relative"
		// 			p={3}
		// 			bg="#333f57"
		// 			boxShadow="md"
		// 			minWidth="200px"
		// 			borderRadius={5}
		// 		>
		// 			{/* <Box
		// 				w="100%"
		// 				d="flex"
		// 				alignItems="center"
		// 				justifyContent="space-between"
		// 			>
		// 				<Badge
		// 					bg="#1A202C"
		// 					position="absolute"
		// 					top={1}
		// 					right={2}
		// 				>
		// 					<Text
		// 						fontWeight="400"
		// 						color={getPlayerScoreColor(player)}
		// 						fontSize="xs"
		// 					>
		// 						{Math.round(player.mythic_plus_scores.all)}
		// 					</Text>
		// 				</Badge>

		// 				<HStack>
		// 					<Avatar src={player.thumbnail_url} mr={4} />

		// 					<Link
		// 						href={
		// 							RAIDER_IO_BASE_URL +
		// 							player.realm +
		// 							"/" +
		// 							player.name
		// 						}
		// 						isExternal
		// 					>
		// 						{player.name}
		// 					</Link>
		// 				</HStack>
		// 				<Text textAlign="center" mr={10}>
		// 					ilvl: {player.gear.item_level_equipped}
		// 				</Text>
		// 			</Box> */}
		// 			{/* <AccordionIcon /> */}
		// 		</AccordionButton>
		// 		<AccordionPanel pb={4} w="100%">
		// 			{/* <Center>
		// 				<HStack wrap="wrap">
		// 					{itemSlots.map((slotType, index) => (
		// 						<VStack key={index}>
		// 							<Box
		// 								d="flex"
		// 								alignItems="center"
		// 								justifyContent="center"
		// 								flexDirection="column"
		// 							>
		// 								<Image
		// 									w={9}
		// 									h={9}
		// 									size="sm"
		// 									borderRadius={2}
		// 									src={`https://wow.zamimg.com/images/wow/icons/large/${player.gear.items[slotType].icon}.jpg`}
		// 								/>

		// 								<Text
		// 									color={
		// 										!player.gear.items[slotType]
		// 											.is_legendary
		// 											? "#a335ee"
		// 											: "#ff8000"
		// 									}
		// 								>
		// 									{
		// 										player.gear.items[slotType]
		// 											.item_level
		// 									}
		// 								</Text>
		// 							</Box>
		// 						</VStack>
		// 					))}
		// 				</HStack>
		// 			</Center>*/}
		// 		</AccordionPanel>
		// 	</AccordionItem>
		// </Accordion>
	);
};

export default PlayerItem;
