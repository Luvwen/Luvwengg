import {
    Button,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';

import logoImage from '../assets/images/ugg.svg';

export const Home = () => {
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
    return (
        <Stack
            alignItems="center"
            background="primary"
            display="flex"
            height="calc(100vh)"
            justifyContent="center"
            width="100%"
        >
            <Stack
                alignItems="center"
                color="white"
                justifyContent="center"
                spacing="35"
                width="100%"
            >
                <HStack
                    justifyContent="center"
                    mb="15"
                    spacing="10"
                    width="40%"
                >
                    <Image src={logoImage} />
                    <Stack
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <Heading as="h1" fontSize="4xl">
                            THE APP IS HERE.
                        </Heading>
                        <Button
                            bg="highlight"
                            color="white"
                            size="md"
                            width="50%"
                        >
                            Get Started
                        </Button>
                    </Stack>
                </HStack>
                <Input
                    borderRadius="50"
                    placeholder="Search Yourself or a champion"
                    size="lg"
                    variant="filled"
                    width="40%"
                />
                <HStack justifyContent="center" spacing="15" width="55%">
                    {SERVERS.map((server, index) => {
                        return (
                            <Text
                                bg="terciary"
                                color="white"
                                key={index}
                                p="4px 6px"
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
