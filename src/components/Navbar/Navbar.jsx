import {
    BellIcon,
    EmailIcon,
    SearchIcon,
    SettingsIcon,
} from '@chakra-ui/icons';
import {
    Box,
    Button,
    FormControl,
    Heading,
    Input,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [inputValue, setInputValue] = useState({
        search: '',
    });

    const currentLocation = useLocation().pathname;
    const navigate = useNavigate();

    const APIKEY = import.meta.env.VITE_API_RIOT_KEY;

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

    return (
        <Box
            alignItems="center"
            as="header"
            bg="#090924"
            height="5vh"
            position="fixed"
            top="0"
            width="100vw"
            zIndex="150"
        >
            <Stack
                alignItems="center"
                as="nav"
                bg="primary"
                color="white"
                display="flex"
                flexDirection="row"
                height="calc(100% - 1px)"
                justifyContent="space-between"
                zIndex="15"
            >
                <Heading ml="100px">LuvwenGG</Heading>
                {/* eslint-disable-next-line */}
                {currentLocation !== '/' ? (
                    <Stack
                        alignItems="center"
                        direction="row"
                        position="relative"
                        spacing="5"
                    >
                        <FormControl>
                            <form onSubmit={handleSubmit}>
                                <Input
                                    _hover={{ bg: 'secondary' }}
                                    bg="secondary"
                                    color="#BEC9DF"
                                    name="search"
                                    onChange={handleInputChange}
                                    placeholder="Search Summoner or Champion"
                                    variant="filled"
                                    width="20vw"
                                />
                            </form>
                        </FormControl>
                        <Stack
                            alignItems="center"
                            direction="row"
                            position="absolute"
                            right="5"
                            spacing="5"
                        >
                            <Text bg="highlight" p="0 6px">
                                LAS
                            </Text>
                            <SearchIcon />
                        </Stack>
                    </Stack>
                ) : (
                    ''
                )}
                <Stack
                    alignItems="center"
                    as={UnorderedList}
                    flexDirection="row"
                    justifyContent="space-evenly"
                    minWidth="350px"
                    spacing="0"
                >
                    <BellIcon
                        as="li"
                        cursor="pointer"
                        height="20px"
                        width="20px"
                    />
                    <SettingsIcon
                        as="li"
                        cursor="pointer"
                        height="20px"
                        width="20px"
                    />
                    <EmailIcon
                        as="li"
                        cursor="pointer"
                        height="20px"
                        width="20px"
                    />
                    <Button
                        _hover={{ bg: 'danger' }}
                        bg="highlight"
                        color="white"
                        p="12px 12px"
                        variant="solid"
                        width="35%"
                    >
                        Click Here
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};
