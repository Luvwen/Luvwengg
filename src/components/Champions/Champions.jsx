import React, { useEffect, useState } from 'react';
import {
    Box,
    Flex,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';

export const Champions = () => {
    const [championsData, setChampionsData] = useState([]);

    useEffect(() => {
        fetch(
            'https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json'
        )
            .then((res) => res.json())
            .then((data) => setChampionsData(Object.values(data.data)))
            .catch((err) => console.log(err));
    }, []);
    return (
        <Flex
            alignItems="center"
            as="main"
            bg="primary"
            flexDirection="column"
            height="auto"
            width="100vw"
        >
            <Stack as="section" height="auto" mt="5vh" spacing="5">
                <Stack>
                    <Heading as="h1">LoL Champions Search</Heading>
                    <Heading as="h3">
                        Discover the best builds for every champion
                    </Heading>
                </Stack>
                <Text>Champions</Text>
                <Grid
                    as="article"
                    bg="#17172E"
                    border="1px solid #2c2c40"
                    gridRowGap="10px"
                    gridTemplateColumns="repeat(8, 1fr)"
                    p="15px 0"
                    placeItems="center"
                    width="50vw"
                >
                    {championsData.map((champion) => {
                        return (
                            <VStack
                                _hover={{
                                    fontWeight: 'bold',
                                }}
                                alignItems="left"
                                color="white"
                                cursor="pointer"
                                key={champion.id}
                                position="relative"
                                pt="10px"
                            >
                                <Stack>
                                    <Image
                                        alt={champion.id}
                                        border="1px solid #2c2c40"
                                        height="120px"
                                        src={`https://ddragon.canisback.com/img/champion/splash/${champion.id}_0.jpg`}
                                        width="120px"
                                    />
                                    <Box
                                        _hover={{
                                            bg: 'white',
                                            transitionDuration: '0.2s',
                                            transitionTimingFunction: 'ease',
                                        }}
                                        bg=""
                                        height="120px"
                                        inset="0"
                                        opacity="0.1"
                                        position="absolute"
                                        width="100%"
                                        zIndex="15"
                                    />
                                </Stack>
                                <Text>{champion.id}</Text>
                            </VStack>
                        );
                    })}
                </Grid>
            </Stack>
        </Flex>
    );
};
