import React, { useState } from 'react';
import { Image, Stack } from '@chakra-ui/react';

import uggIcon from '../../assets/images/uggIcon.svg';
import uggBig from '../../assets/images/ugg.svg';

import { IconListItem } from './IconListItem';

export const Sidebar = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Stack
            _hover={{
                width: '12vw',
                transitionDuration: '0.2s',
                transitionTimingFunction: 'ease-in-out',
                color: 'secondary',
            }}
            as="aside"
            bg="secondary"
            height="100vh"
            left="0"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            overflow="hidden"
            pl="15px"
            position="fixed"
            top="0"
            width="3vw"
        >
            <Stack alignItems="flex-start">
                <Image
                    boxSize="30px"
                    cursor="pointer"
                    mt="20px"
                    pl="15px"
                    src={isHover ? uggBig : uggIcon}
                    transitionDuration="0.3s"
                    transitionTimingFunction="ease-in"
                    width={isHover && 'min-content'}
                />
            </Stack>
            <IconListItem />
        </Stack>
    );
};
