'use client';

import { DEFAULT_LIMIT } from '@/common/constants';
import { Card, Row } from 'antd';
import styles from './character-list.module.css';
export const CardSkeleton = () => {
  return (
    <Row className={styles['character-list']}>
      {Array(DEFAULT_LIMIT)
        .fill(0)
        ?.map((_, index) => (
          <Card
            loading
            key={index}
            className={styles['character-card']}
            hoverable
          />
        ))}
    </Row>
  );
};
