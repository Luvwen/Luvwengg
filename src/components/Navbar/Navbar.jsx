import {
    BellIcon,
    EmailIcon,
    SearchIcon,
    SettingsIcon,
} from '@chakra-ui/icons';
import {
    Box,
    Button,
    Heading,
    Input,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
    const currentLocation = useLocation().pathname;
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
                        <Input
                            _hover={{ bg: 'secondary' }}
                            bg="secondary"
                            color="#BEC9DF"
                            placeholder="Search Summoner or Champion"
                            variant="filled"
                            width="20vw"
                        />
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
