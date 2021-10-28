import { FunctionComponent } from "react";
import Player from "../types/Player";
import { RAIDER_IO_URL } from "../utils/Api";
import { getPlayerScoreColor } from "../utils/player";
import Link from "next/link";
export interface PlayerItemProps {
	player: Player;
}

const PlayerItem: FunctionComponent<PlayerItemProps> = ({ player }) => {
	const scoreColor = getPlayerScoreColor(player);
	console.log(player);
	return (
		<div>
			<img src={player.thumbnail_url} />
			<p style={{ color: scoreColor }}>
				{Math.round(player.mythic_plus_scores.all)}
			</p>
			<Link href={RAIDER_IO_URL + player.realm + "/" + player.name}>
				{player.name}
			</Link>
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
