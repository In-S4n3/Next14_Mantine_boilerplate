'use client';
import { Box } from '@mantine/core';
import { useTheme } from '../context/ThemeContext';

export default function HomePage() {
  const theme = useTheme();

  return <Box style={{ height: '100vh' }}>Home Page!</Box>;
}
