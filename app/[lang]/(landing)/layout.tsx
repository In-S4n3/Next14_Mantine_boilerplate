import { Box } from '@mantine/core';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale } from '@/i18n.config';

const LandingLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      {children}
      <Footer lang={params.lang} />
    </Box>
  );
};

export default LandingLayout;
