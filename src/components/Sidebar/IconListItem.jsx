import React from 'react';
import { Flex, Image, Stack, Text } from '@chakra-ui/react';

import lolIcon from '../../assets/images/lolIcon.svg';
import paperIcon from '../../assets/images/paperIcon.svg';
import skullIcon from '../../assets/images/skullIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import leaderboardIcon from '../../assets/images/leaderboardIcon.svg';
import swordIcon from '../../assets/images/swordIcon.svg';

export const IconListItem = () => {
    return (
        <Stack
            as="ul"
            color="#535358"
            height="45%"
            justifyContent="space-evenly"
            whiteSpace="nowrap"
        >
            <Flex
                alignItems="center"
                as="li"
                background="#32282B"
                borderRadius="6px"
                color="white"
                cursor="pointer"
                direction="row"
                p="10px"
                width="90%"
            >
                <Image boxSize="30px" src={lolIcon} />
                <Text fontSize="xl" fontWeight="bold" ml="30px">
                    League of Legends
                </Text>
            </Flex>
            <Flex
                _hover={{ background: 'primary' }}
                alignItems="center"
                as="li"
                borderRadius="6px"
                cursor="pointer"
                direction="row"
                p="10px"
                width="90%"
            >
                <Image boxSize="30px" src={paperIcon} />
                <Text fontSize="xl" fontWeight="bold" ml="30px">
                    Tier Lists
                </Text>
            </Flex>
            <Flex
                _hover={{ background: 'primary' }}
                alignItems="center"
                as="li"
                borderRadius="6px"
                cursor="pointer"
                direction="row"
                p="10px"
                width="90%"
            >
                <Image boxSize="30px" src={skullIcon} />
                <Text fontSize="xl" fontWeight="bold" ml="30px">
                    Champions
                </Text>
            </Flex>

            <Flex
                _hover={{ background: 'primary' }}
                alignItems="center"
                as="li"
                borderRadius="6px"
                cursor="pointer"
                direction="row"
                p="10px"
                width="90%"
            >
                <Image boxSize="30px" src={searchIcon} />
                <Text fontSize="xl" fontWeight="bold" ml="30px">
                    Multisearch
                </Text>
            </Flex>
            <Flex
                _hover={{ background: 'primary' }}
                alignItems="center"
                as="li"
                borderRadius="6px"
                cursor="pointer"
                direction="row"
                p="10px"
                width="90%"
            >
                <Image boxSize="30px" src={leaderboardIcon} />
                <Text fontSize="xl" fontWeight="bold" ml="30px">
                    Leaderboards
                </Text>
            </Flex>
            <Flex
                _hover={{ background: 'primary' }}
                alignItems="center"
                as="li"
                borderRadius="6px"
                cursor="pointer"
                direction="row"
                p="10px"
                width="90%"
            >
                <Image boxSize="30px" src={swordIcon} />
                <Text fontSize="xl" fontWeight="bold" ml="30px">
                    Items
                </Text>
            </Flex>
        </Stack>
    );
};
