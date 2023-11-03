import { getTheme } from '@/utils/getTheme';
import { Box } from '@mantine/core';

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const websiteTheme = await getTheme(searchParams);
  console.log(websiteTheme);

  return <Box style={{ height: '100vh' }}>Home Page!</Box>;
}
