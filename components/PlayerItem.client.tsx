import { FunctionComponent } from "react";
import Player, { DungeonRole } from "../types/Player";
import { RAIDER_IO_URL } from "../utils/Api";
import { getPlayerScoreColor } from "../utils/player";
import CovenantIcon from "./CovenantIcon";
import RoleIcon from "./RoleIcon";

import DungeonPanel from "./DungeonPanel.client";
export interface PlayerItemProps {
	player: Player;
}

const PlayerItem: FunctionComponent<PlayerItemProps> = ({ player }) => {
	const scoreColor = getPlayerScoreColor(player);

	return (
		<details>
			<summary>
				<div className="flex flex-col relative cursor-pointer transition-colors duration-200 hover:bg-gray-600 bg-gray-700 w-full sm:w-[400px] rounded-md shadow-lg p-4 justify-start border-2 border-gray-600">
					<p
						style={{ color: scoreColor }}
						className="absolute top-2 right-4 font-semibold bg-gray-900 px-2 py-1 min-w-[56px] border-2 border-gray-600 text-center rounded-md"
					>
						{Math.round(player.mythic_plus_scores.all)}
					</p>
					<div className="font-semibold absolute bottom-2 right-4 flex flex-row space-x-2">
						<p className="text-gray-200">weekly</p>
						<p className="text-white">
							{
								player.mythic_plus_weekly_highest_level_runs
									.length
							}
							/10
						</p>
					</div>
					<div className="absolute top-[-10px] left-[-10px]">
						<RoleIcon
							role={
								player.active_spec_role.toLowerCase() as DungeonRole
							}
						/>
					</div>
					<div className="flex flex-row space-x-4 text-xl  items-center">
						<img
							width="64px"
							height="64px"
							alt="player avatar"
							srcSet={player.thumbnail_url}
							className="rounded-full ring-2 ring-gray-600"
						/>

						<a
							href={
								RAIDER_IO_URL + player.realm + "/" + player.name
							}
							target="_blank"
							rel="noreferrer"
						>
							<p className="text-white transition-colors truncate duration-200 font-semibold hover:text-green-400">
								{player.name}
							</p>
						</a>
						<CovenantIcon covenant={player.covenant.name} />

						<div className="absolute left-20 bottom-2 flex flex-row space-x-4">
							<p className="text-gray-400 text-sm truncate font-semibold">
								Renown {player.covenant.renown_level}
							</p>
						</div>
					</div>
				</div>
			</summary>
			<main className="p-4">
				<DungeonPanel dungeons={player.mythic_plus_best_runs} />
			</main>
		</details>

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
