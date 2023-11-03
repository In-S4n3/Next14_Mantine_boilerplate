import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Box, Center } from '@mantine/core';
import React from 'react';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Center maw={'100vw'} h={'100vh'} bg={'#F4F4F4'}>
        {children}
      </Center>
      <Footer />
    </Box>
  );
};

export default LoginLayout;
