'use client';

import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Spin } from 'antd';
import { BaseButton } from '../../molecules/Button/BaseButton';
import styles from './character-list.module.css';

interface ViewMoreButtonProps {
  hidden: boolean;
  isEndList: boolean;
  loading: boolean;
  onLoadMore: () => void;
}

export const ViewMoreButton = ({
  hidden,
  isEndList,
  loading,
  onLoadMore,
}: ViewMoreButtonProps) => {
  if (hidden) {
    return <></>;
  }

  if (isEndList) {
    return <Box className="font-16">End!</Box>;
  }

  return (
    <BaseButton
      className={`${styles['view-more-button']}`}
      onClick={onLoadMore}
    >
      {loading ? <Spin /> : 'View more'}
    </BaseButton>
  );
};
