import React from 'react';
import { Box } from '../atoms/Box/Box';
import styles from './banner.module.css';
import { Image } from '@/components/atoms/Image/Image';

const Banner = () => {
  return (
    <Box className={styles.banner}>
      <Box style={{ background: '#000000b3', position: 'relative' }}>
        <Box className={styles.charactersBanner}>
          <Image src="/market-place-banner.svg" alt="characters banner" />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
