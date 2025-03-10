'use client';

import { useGetProducts } from '@/common/hooks/useGetProducts';
import { Box } from '@/components/atoms/Box/Box';
import { Header } from '@/components/Header';
export default function Home() {
  const { data, isLoading, error } = useGetProducts();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box>
      <Header />
    </Box>
  );
}
