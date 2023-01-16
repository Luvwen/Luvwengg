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
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { Link } from 'react-router-dom';

export const Champions = () => {
    const [championsData, setChampionsData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
        fetch(
            'https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json'
        )
            .then((res) => res.json())
            .then((data) => {
                setChampionsData(Object.values(data.data));
                setIsFetching(false);
            })
            .catch((err) => console.log(err));
    }, []);

    if (isFetching) return <LoadingScreen />;

    return (
        <Flex
            alignItems="center"
            as="main"
            bg="primary"
            flexDirection="column"
            height="auto"
            minHeight="100vh"
            width="100vw"
        >
            <Stack as="section" height="auto" mt="5vh" spacing="12">
                <Stack mt="100px">
                    <Heading as="h1" color="white" fontSize="5xl">
                        LoL Champions Search
                    </Heading>
                    <Heading as="h3" color="#BEC9DF" fontSize="2xl">
                        Discover the best builds for every champion
                    </Heading>
                </Stack>
                <Text
                    _after={{
                        // eslint-disable-next-line
                        content: `''`,
                        display: 'block',
                        borderRadius: '12',
                        height: '3px',
                        background: 'blue.500',
                        mt: '10px',
                        maxWidth: '9ch',
                    }}
                    color="#3B82F6"
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Champions
                </Text>
                <Grid
                    as="article"
                    bg="#17172E"
                    border="1px solid #2c2c40"
                    gridRowGap="10px"
                    gridTemplateColumns="repeat(8, 1fr)"
                    p="15px"
                    placeItems="center"
                    width="55vw"
                >
                    {championsData.map((champion) => {
                        return (
                            <Link key={champion.id} to={`./${champion.id}`}>
                                <VStack
                                    _hover={{
                                        fontWeight: 'bold',
                                    }}
                                    alignItems="left"
                                    color="white"
                                    cursor="pointer"
                                    position="relative"
                                    pt="10px"
                                >
                                    <Image
                                        alt={champion.id}
                                        border="1px solid #2c2c40"
                                        height="135px"
                                        outline="none"
                                        src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion.id}.png`}
                                        width="135px"
                                    />
                                    <Box
                                        _hover={{
                                            bg: 'white',
                                            transitionDuration: '0.2s',
                                            transitionTimingFunction: 'ease',
                                        }}
                                        bg=""
                                        height="135px"
                                        inset="0"
                                        opacity="0.1"
                                        position="absolute"
                                        width="100%"
                                        zIndex="15"
                                    />
                                    <Text>{champion.id}</Text>
                                </VStack>
                            </Link>
                        );
                    })}
                </Grid>
            </Stack>
        </Flex>
    );
};
