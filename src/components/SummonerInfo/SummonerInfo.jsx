import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { getAllData } from '../../helpers/getAllData';

export const SummonerInfo = () => {
    const { summonerName } = useParams();
    const [isLoading, dataFromMatchHistory, summonerData] =
        getAllData(summonerName);

    if (isLoading) return <LoadingScreen />;

    return (
        <Stack
            height="100vh"
            m="5vh auto 0"
            p="150px 0 0 150px"
            spacing="24"
            width="55vw"
        >
            <Stack as="article" color="white" direction="row">
                <Stack direction="row" spacing="10">
                    <Image
                        border="3px solid gray"
                        borderRadius="7px"
                        height="150px"
                        src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${summonerData.profileIconId}.png`}
                        width="150px"
                    />
                    <Stack spacing="2">
                        <Heading fontSize="5xl" lineHeight="1">
                            {summonerName}
                        </Heading>
                        <Text fontSize="2xl">
                            Nivel: {summonerData.summonerLevel}
                        </Text>
                        <Button
                            _hover={{ bg: 'danger' }}
                            bg="highlight"
                            size="lg"
                        >
                            Refresh
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" spacing="4">
                <Stack spacing="4">
                    <Stack bg="secondary" height="5vh" width="15vw"></Stack>
                    <Stack bg="secondary" height="5vh" width="15vw"></Stack>
                    <Stack bg="secondary" height="25vh" width="15vw"></Stack>
                </Stack>
                <Stack bg="secondary" width="35vw">
                    {dataFromMatchHistory.map((game) => {
                        return (
                            <Stack
                                // bg={ ? '#1E2B5E' : '#301F3A'}
                                color="white"
                                key={game.metadata.matchId}
                            >
                                <Text>{game.metadata.matchId}</Text>
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>
        </Stack>
    );
};
