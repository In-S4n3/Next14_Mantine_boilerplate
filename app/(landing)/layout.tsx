import { Box } from '@mantine/core';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default LandingLayout;
