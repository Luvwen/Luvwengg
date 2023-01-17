import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

export const SummonerInfo = () => {
    const { summonerName } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [summonerData, setSummonerData] = useState({});
    const [dataFromMatchHistory, setDataFromMatchHistory] = useState([]);

    const APIKEY = import.meta.env.VITE_API_RIOT_KEY;

    const getSummonerData = async () => {
        const response = await fetch(
            `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${APIKEY}`
        );
        const summonerInfo = await response.json();
        const { puuid } = summonerInfo;
        setSummonerData(summonerInfo);
        setIsLoading(false);
        getMatchHistory(puuid);
    };

    const getMatchHistory = async (puuid) => {
        const response = await fetch(
            `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${APIKEY}`
        );
        const matchHistory = await response.json();
        getAllMatchHistoryStats(matchHistory);
    };

    const getAllMatchHistoryStats = (matchHistory) => {
        matchHistory.map((match) => {
            fetch(
                `https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${APIKEY}`
            )
                .then((resp) => resp.json())
                .then((data) => {
                    setDataFromMatchHistory((prevState) => [
                        ...prevState,
                        data,
                    ]);
                });
            return true;
        });
    };

    useEffect(() => {
        getSummonerData();
    }, []);

    if (isLoading) return <LoadingScreen />;
    return (
        <Stack height="100vh" m="5vh auto 0" width="55vw">
            <Stack
                as="article"
                color="white"
                direction="row"
                p="150px 0 0 150px"
            >
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
                    <Stack>
                        {dataFromMatchHistory.map((game, index) => {
                            console.log(game);
                            return (
                                <Text key={index}>{game.metadata.matchId}</Text>
                            );
                        })}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
