import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Locale } from '@/i18n.config';

import { Box, Center } from '@mantine/core';
import React from 'react';

const LoginLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Center maw={'100vw'} h={'100vh'} bg={'#F4F4F4'}>
        {children}
      </Center>
      <Footer lang={params.lang} />
    </Box>
  );
};

export default LoginLayout;
