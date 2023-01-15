import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

export const LoadingScreen = () => {
    return (
        <Box
            alignItems="center"
            bg="primary"
            display="flex"
            justifyContent="center"
            minHeight="100vh"
            minWidth="100vw"
        >
            <Spinner color="#BEC9DF" size="xl" />
        </Box>
    );
};
