import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';
import { Box, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const Footer = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang);

  return (
    <Box bg={'#FE731D'} w={'100vw'} h={308} p={100}>
      <Image
        src={'/assets/footer/whiteLogo.svg'}
        alt="Logo"
        width={120}
        height={44}
      />
      <Text
        style={{
          color: '#FFF',
          leadingTrim: 'both',
          textEdge: 'cap',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineWeight: '22px',
        }}
      >
        {dict.footer.description}
      </Text>
    </Box>
  );
};

export default Footer;
