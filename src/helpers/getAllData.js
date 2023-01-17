import { useEffect, useState } from 'react';

export const getAllData = (summonerName) => {
    const APIKEY = import.meta.env.VITE_API_RIOT_KEY;
    const [summonerData, setSummonerData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [dataFromMatchHistory, setDataFromMatchHistory] = useState([]);

    useEffect(() => {
        getSummonerData(summonerName);
    }, []);

    const getSummonerData = async (summonerName) => {
        const response = await fetch(
            `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${APIKEY}`
        );
        const summonerInfo = await response.json();
        setSummonerData(summonerInfo);
        const { puuid } = summonerInfo;
        getMatchHistory(puuid);
        return summonerData;
    };

    const getMatchHistory = async (puuid) => {
        const response = await fetch(
            `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${APIKEY}`
        );
        const matchHistory = await response.json();
        getAllMatchHistoryStats(matchHistory);
        return matchHistory;
    };

    const getAllMatchHistoryStats = async (matchHistory) => {
        matchHistory.forEach((match) => {
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
        });
        setIsLoading(false);
        return [isLoading, dataFromMatchHistory];
    };
    return [isLoading, dataFromMatchHistory, summonerData];
};
