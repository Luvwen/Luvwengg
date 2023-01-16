import { Flex, Heading, Image, Progress, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

export const Champion = () => {
    const [champInfo, setChampInfo] = useState([]);
    const [selectedAbility, setSelectedAbility] = useState(0);
    const [loading, setLoading] = useState(true);

    const { id: champFromParams } = useParams();

    useEffect(() => {
        fetch(
            `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${champFromParams}.json`
        )
            .then((res) => res.json())
            .then((data) => {
                setChampInfo(data.data[`${champFromParams}`]);
                setLoading(false);
            });
    }, []);
    console.log(champInfo);
    if (loading) return <LoadingScreen />;

    return (
        <Flex
            as="section"
            bg="primary"
            color="#BEC9DF"
            justifyContent="center"
            pt="10vh"
        >
            <Stack bg="secondary" pb="25px" pt="25px" spacing="24" width="50vw">
                <Stack
                    alignItems="center"
                    as="article"
                    direction="row"
                    p="20px"
                    spacing="5"
                >
                    <Image
                        alt={champFromParams}
                        border="1px solid #2c2c40"
                        height="150px"
                        src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champFromParams}.png`}
                        width="150px"
                    />
                    <Stack alignItems="left">
                        <Heading>{`${champFromParams}, ${champInfo.title}`}</Heading>
                        <Text fontSize="xl">{champInfo.blurb}</Text>
                    </Stack>
                </Stack>
                <Stack
                    as="article"
                    direction="row"
                    justifyContent="center"
                    spacing={24}
                >
                    <Image
                        height="auto"
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champFromParams}_0.jpg`}
                        width="350px"
                    />
                    <Stack>
                        <Heading>Champion statistics</Heading>
                        <Stack direction="row" height="200px">
                            <Stack
                                height="100%"
                                justifyContent="space-evenly"
                                spacing={0}
                            >
                                <Text fontSize="xl">Attack</Text>
                                <Text fontSize="xl">Defense</Text>
                                <Text fontSize="xl">Difficulty</Text>
                                <Text fontSize="xl">Magic</Text>
                            </Stack>
                            <Stack
                                height="100%"
                                justifyContent="space-evenly"
                                spacing={2}
                                width="28ch"
                            >
                                <Progress
                                    max={10}
                                    size="lg"
                                    value={champInfo.info.attack}
                                />
                                <Progress
                                    max={10}
                                    size="lg"
                                    value={champInfo.info.defense}
                                />
                                <Progress
                                    max={10}
                                    size="lg"
                                    value={champInfo.info.difficulty}
                                />
                                <Progress
                                    max={10}
                                    size="lg"
                                    value={champInfo.info.magic}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    alignItems="center"
                    justifyContent="space-evenly"
                    spacing="24"
                >
                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        width="100%"
                    >
                        <Image
                            border={
                                selectedAbility === 4 && '5px solid #F62F63'
                            }
                            cursor="pointer"
                            height="125px"
                            onClick={() => setSelectedAbility(4)}
                            src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${champInfo.passive.image.full}`}
                            width="125px"
                        />
                        {champInfo.spells.map((spell, index) => {
                            return (
                                <Image
                                    _focus={{ cursor: 'default' }}
                                    border={
                                        selectedAbility === index &&
                                        '5px solid #F62F63'
                                    }
                                    cursor="pointer"
                                    height="125px"
                                    key={index}
                                    onClick={() => setSelectedAbility(index)}
                                    src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${spell.image.full}`}
                                    width="125px"
                                />
                            );
                        })}
                    </Stack>
                    <Stack bg="primary" height="auto" width="75%">
                        <Text
                            fontSize="2xl"
                            fontWeight="bold"
                            p="20px"
                            textAlign="justify"
                        >
                            {selectedAbility === 4
                                ? champInfo.passive.description
                                : champInfo.spells[`${selectedAbility}`]
                                      .description}
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    );
};
