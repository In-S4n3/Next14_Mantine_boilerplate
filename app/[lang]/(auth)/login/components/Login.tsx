import {
  Box,
  Button,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import Link from 'next/link';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

const Login = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang);

  return (
    <Box
      my={{ base: 200, md: 0 }}
      w={357}
      p={32}
      bg={'white'}
      style={{
        borderRadius: '16px',
        background: '#FFF',
        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Title
        order={1}
        size="h1"
        style={{
          textAlign: 'center',
          paddingBottom: '48px',
          color: '#FE731D',
          leadingTrim: 'both',
          textEdge: 'cap',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
        }}
      >
        {dict['login-page'].title}
      </Title>
      <form>
        <TextInput placeholder={dict['login-page']['email-placeholder']} />
        <PasswordInput
          mt="32px"
          placeholder={dict['login-page']['password-placeholder']}
        />

        <Button
          type="submit"
          m="32px 0 16px 0"
          w={293}
          bg={'#FE731D'}
          style={{ fontSize: '20px' }}
        >
          {dict['login-page']['login-button']}
        </Button>
        <Link
          href={''}
          style={{
            textDecoration: 'none',
            color: '#3DADF3',
          }}
        >
          {dict['login-page']['forgot-password']}
        </Link>
        <Text size="md" mt={48} style={{ textAlign: 'center' }}>
          {dict['login-page']['not-registered']}{' '}
          <Link
            href={''}
            style={{
              textDecoration: 'none',
              color: '#3DADF3',
            }}
          >
            {dict['login-page']['join-now']}
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default Login;
