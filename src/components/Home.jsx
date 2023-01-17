import {
    Button,
    FormControl,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoImage from '../assets/images/ugg.svg';

export const Home = () => {
    const [background, setBackground] = useState({});
    const [inputValue, setInputValue] = useState({
        search: '',
    });

    const navigate = useNavigate();
    const APIKEY = import.meta.env.VITE_API_RIOT_KEY;
    const SERVERS = [
        'NA',
        'EUW',
        'EUN',
        'RU',
        'PH',
        'SG',
        'TH',
        'TW',
        'VN',
        'KR',
        'OCE',
        'LAS',
        'LAN',
        'BR',
        'TR',
        'JP',
    ];

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const response = await fetch(
            `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inputValue.search}?api_key=${APIKEY}`
        );
        const summonerInfo = await response.json();
        navigate(`/summoner/${summonerInfo.name}`);
    };
    const changeBackgroundColor = (index) => () => {
        setBackground((state) => ({
            ...state,
            [index]: !state[index],
        }));
    };

    return (
        <Stack
            alignItems="center"
            as="main"
            background="primary"
            display="flex"
            height="calc(100vh)"
            justifyContent="center"
            width="100%"
        >
            <Stack
                alignItems="center"
                as="section"
                color="white"
                justifyContent="center"
                spacing="45"
                width="100%"
            >
                <HStack
                    justifyContent="center"
                    mb="35"
                    spacing="10"
                    width="40%"
                >
                    <Image src={logoImage} width="350px" />
                    <Stack
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <Heading as="h1" fontSize="5xl">
                            THE APP IS HERE.
                        </Heading>
                        <Button
                            _hover={{ bg: 'danger' }}
                            bg="highlight"
                            borderRadius="8px"
                            color="white"
                            fontSize="xl"
                            p="25px 20px"
                            size="md"
                            width="50%"
                        >
                            Get Started
                        </Button>
                    </Stack>
                </HStack>
                <FormControl width="40%">
                    <form onSubmit={handleSubmit}>
                        <Input
                            borderRadius="50"
                            fontSize="2xl"
                            name="search"
                            onChange={handleInputChange}
                            p="35px"
                            placeholder="Search Yourself or a Champion"
                            size="lg"
                            value={inputValue.search}
                            variant="filled"
                        />
                    </form>
                </FormControl>
                <HStack justifyContent="center" spacing="25" width="55%">
                    {SERVERS.map((server, index) => {
                        return (
                            <Text
                                bg={
                                    background[index]
                                        ? 'highlight'
                                        : 'secondary'
                                }
                                borderRadius="4px"
                                color="white"
                                cursor="pointer"
                                fontWeight="bold"
                                key={index}
                                onClick={changeBackgroundColor(index)}
                                p="6px 14px"
                            >
                                {server}
                            </Text>
                        );
                    })}
                </HStack>
            </Stack>
        </Stack>
    );
};
