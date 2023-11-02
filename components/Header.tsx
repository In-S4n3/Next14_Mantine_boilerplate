import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <Box
      h={100}
      w={'100vw'}
      pl={{ base: '16px', md: '100px' }}
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image
        src={'/assets/header/logo.svg'}
        alt="Logo"
        width={64}
        height={44}
      />
    </Box>
  );
};

export default Header;
