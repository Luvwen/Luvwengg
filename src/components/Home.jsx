import {
    Button,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import logoImage from '../assets/images/ugg.svg';

export const Home = () => {
    const [background, setBackground] = useState({});
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
            height="calc(95vh)"
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
                <Input
                    borderRadius="50"
                    fontSize="2xl"
                    p="35px"
                    placeholder="Search Yourself or a Champion"
                    size="lg"
                    variant="filled"
                    width="40%"
                />
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
