import { Image, Stack } from '@chakra-ui/react';
import React from 'react';
import uggIcon from '../../assets/images/uggIcon.svg';

export const Sidebar = () => {
    return (
        <Stack
            alignItems="center"
            bg="secondary"
            height="100vh"
            left="0"
            position="fixed"
            top="0"
            width="3vw"
        >
            <Image boxSize="30px" mt="15px" src={uggIcon} />
        </Stack>
    );
};
