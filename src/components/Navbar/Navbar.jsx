import { BellIcon, EmailIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Stack, UnorderedList } from '@chakra-ui/react';
import React from 'react';

export const Navbar = () => {
    return (
        <Box
            alignItems="center"
            as="header"
            bg="#090924"
            height="5vh"
            position="fixed"
            top="0"
            width="100vw"
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
