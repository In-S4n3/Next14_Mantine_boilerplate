'use client';
import { useForm } from '@mantine/form';
import {
  Box,
  Button,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import Link from 'next/link';

const Login = () => {
  const form = useForm({
    initialValues: { email: '', password: '' },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 8 ? 'Password must have at least 8 characters' : null,
    },
  });

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
        Log In
      </Title>
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput placeholder="Email" {...form.getInputProps('email')} />
        <PasswordInput
          mt="32px"
          placeholder="write your password"
          {...form.getInputProps('password')}
        />

        <Button
          type="submit"
          m="32px 0 16px 0"
          w={293}
          bg={'#FE731D'}
          style={{ fontSize: '20px' }}
        >
          Log in
        </Button>
        <Link
          href={''}
          style={{
            textDecoration: 'none',
            color: '#3DADF3',
          }}
        >
          Forgot password?
        </Link>
        <Text size="md" mt={48} style={{ textAlign: 'center' }}>
          Not a member yet?{' '}
          <Link
            href={''}
            style={{
              textDecoration: 'none',
              color: '#3DADF3',
            }}
          >
            Join now
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default Login;
