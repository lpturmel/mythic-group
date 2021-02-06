import { Box, Center, VStack } from '@chakra-ui/react';
import React from 'react';
import Player from '../types/Player';
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