import React from 'react';
import styles from './header.module.css';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import { Box } from '@/components/atoms/Box/Box';

export const Header = () => {
  return (
    <header>
      <Box className={`container ${styles.header}`}>
        <LeftSide />
        <RightSide />
      </Box>
    </header>
  );
};
