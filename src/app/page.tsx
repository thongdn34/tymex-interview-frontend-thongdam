'use client';

import { Box } from '@/components/atoms/Box/Box';
import { Header } from '@/components/organisms/Header';
import MarketPlace from '@/components/organisms/MarketPlace';
import Footer from '@/components/organisms/Footer';
import Skeleton from 'antd/es/skeleton';
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('@/components/organisms/Banner'), {
  ssr: false,
  loading: () => <Skeleton style={{ width: '100%', height: 400 }} />,
});
export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <MarketPlace />
      <Footer />
    </Box>
  );
}
