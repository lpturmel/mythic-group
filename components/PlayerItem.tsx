import { Accordion, AccordionButton, Image, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, HStack, Link, Text, VStack, Center, Badge } from '@chakra-ui/react';
import React from 'react';
import Player from '../types/Player';
import urls from '../urls.json';
import scoreColors from '../score-colors.json';
export interface PlayerItemProps {
    player: Player
}

const PlayerItem: React.FunctionComponent<PlayerItemProps> = ({ player }) => {
    function inRange(x: number, min: any, max: any) {	      
        return ((x-min)*(x-max) <= 0);
    }
    const getScoreColor = () => {
            var hexColor;
            scoreColors.map((color, index) => {
                if(inRange(Math.round(player.mythic_plus_scores.all), color.score , scoreColors[index + 1] ? scoreColors[index + 1].score : 0)) {
                hexColor = color.rgbHex;
                }
            })
            return hexColor
        }
    return (
        <Accordion allowMultiple w="300px" maxWidth="600px">
            <AccordionItem w="100%" border="none"  >
                <AccordionButton w="100%" position="relative" p={3} bg="#333f57" boxShadow="md" minWidth="200px" borderRadius={5} >
                    <Box w="100%" d="flex" alignItems="center" justifyContent="space-between">
                        <Badge bg="#1A202C" position="absolute" top={1} right={2}>
                            <Text fontWeight="400" color={getScoreColor()} fontSize="xs" >
                                {Math.round(player.mythic_plus_scores.all)}
                            </Text>
                        </Badge>
                        
                        
                        
                        <HStack>
                            <Avatar src={player.thumbnail_url} mr={4} />
                            
                            <Link href={urls.raiderio + player.realm + "/" + player.name} isExternal>
                                {player.name}
                            </Link>

                        </HStack>
                        <Text textAlign="center" mr={10}>
                            ilvl: {player.gear.item_level_equipped}
                        </Text>
                        
                    </Box>
                    {/* <AccordionIcon /> */}
                </AccordionButton>
                <AccordionPanel pb={4} w="100%">
                    <Center>
                    <HStack wrap="wrap">
                                
                                {
                                    Object.keys(player.gear.items).map((slotType, index) => (
                                        <VStack key={index}>
                                            <Box d="flex" alignItems="center" justifyContent="center" flexDirection="column" >
                                                
                                                <Image w={9} h={9} size="sm" borderRadius={2}  src={`https://wow.zamimg.com/images/wow/icons/large/${player.gear.items[slotType].icon}.jpg`} />

                                                
                                                <Text color={! player.gear.items[slotType].is_legendary ? "#a335ee" : "#ff8000"}>
                                                    {player.gear.items[slotType].item_level}
                                                </Text>
                                            </Box>
                                            
                                        </VStack>
                                    ))
                                }                              
                                
                            </HStack>
                    </Center>
                    
                </AccordionPanel>
            </AccordionItem>

        </Accordion>
    );
}

export default PlayerItem;