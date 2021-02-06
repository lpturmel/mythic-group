import { Avatar, Box, Center, Link, Text, VStack, Image, HStack } from '@chakra-ui/react';
import { generateKeyPair } from 'crypto';
import React from 'react';
import Player from '../types/Player';
import urls from '../urls.json';
import PlayerItem from './PlayerItem';

export interface PlayersProps {
    players: Array<Player>
}

const Players: React.FunctionComponent<PlayersProps> = ({ players }) => {
    return (
        <Box>
            <Center>
                <VStack spacing={5}>
                    {
                        players.map((player: Player, index) => (
                            <PlayerItem key={index} player={player} />

                        ))
                    }
                </VStack>

            </Center>
        </Box>
    );
}
export default Players;