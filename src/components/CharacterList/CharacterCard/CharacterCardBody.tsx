import { User } from '@/common/types';
import { Tooltip } from 'antd';
import React, { useMemo } from 'react';
import { Box } from '../../atoms/Box/Box';
import { DEFAULT_UNIT } from '@/common/constants';
import { Image } from '../../atoms/Image/Image';
import styles from '../character-list.module.css';
import { UserAvatar } from './UserAvatar';
import { formatPrice } from '@/common/utils';

interface CharacterCardBodyProps {
  name: string;
  price: number;
  user: User;
}

export const CharacterCardBody = ({
  name,
  price,
  user,
}: CharacterCardBodyProps) => {
  const authorName = useMemo(() => {
    return `${user.firstName} ${user.lastName}`;
  }, [user]);

  return (
    <Box className={styles['character-information']}>
      {/* Header */}
      <Box className={styles['character-information-header']}>
        <Box className={styles['character-information-name']}>
          <Tooltip placement="topLeft" title={name}>
            {name}
          </Tooltip>
        </Box>

        {/* Price */}
        <Box className={styles.cost}>
          <Box className={styles.unit}>
            <Image src="/ethereum.svg" alt="ethereum icon" />
          </Box>
          <Tooltip
            placement="topLeft"
            title={`${formatPrice(price)} ${DEFAULT_UNIT}`}
            className={styles.price}
          >
            {formatPrice(price)}
          </Tooltip>{' '}
          <Box className="font-white">{DEFAULT_UNIT}</Box>
        </Box>
      </Box>

      {/* Author */}
      <Box className={styles['character-information-author']}>
        <UserAvatar user={user} name={authorName} />
        <Box className={styles['character-information-author-name']}>
          <Tooltip placement="topLeft" title={authorName}>
            {authorName}
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
