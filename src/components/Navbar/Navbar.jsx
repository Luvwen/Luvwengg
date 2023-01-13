import { BellIcon, EmailIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

export const Navbar = () => {
    return (
        <>
            <Box alignItems="center" bg="#090924" height="5vh" width="100vw">
                <Stack
                    alignItems="center"
                    bg="primary"
                    color="white"
                    display="flex"
                    flexDirection="row"
                    height="calc(100% - 1px)"
                    justifyContent="space-between"
                    zIndex="15"
                >
                    <Heading ml="100px">Hola, soy un texto</Heading>
                    <Stack
                        alignItems="center"
                        flexDirection="row"
                        justifyContent="space-evenly"
                        minWidth="350px"
                        spacing="0"
                    >
                        <BellIcon height="20px" width="20px" />
                        <SettingsIcon height="20px" width="20px" />
                        <EmailIcon height="20px" width="20px" />
                        <Button
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
        </>
    );
};
