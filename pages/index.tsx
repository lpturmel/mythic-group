import Head from '../components/Head';
import { Center, Heading, HStack, Text } from '@chakra-ui/react';
import Players from '../components/Players';
import playersData from '../players.json';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import urls from '../urls.json';
import React from 'react';

export default function Home({ players }) {
  console.log(players);
  return (
    <div>
      <Head />
      <Center>
        <HStack marginY={5} spacing={2}>
        <Heading>
          Mythic+ 
        </Heading>
        <Heading color="#64b3b0"> Team </Heading>
        </HStack>
       
      </Center>
      
      <Players players={players} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const resArray = await Promise.all( playersData.players.map(async player => {
    const res = await fetch(urls.raiderio_api + `characters/profile?region=us&realm=${player.realm}&name=${player.characterName}&fields=mythic_plus_scores,gear`)
    
    return res.json();
  }));

 
  return {
      props: {
          players: resArray
      },
      revalidate: 300
  }
}
