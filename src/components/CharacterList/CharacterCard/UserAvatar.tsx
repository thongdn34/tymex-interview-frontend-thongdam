import { Box } from '@/components/atoms/Box/Box';
import React from 'react';
import styles from '../character-list.module.css';
import { Avatar } from 'antd';
import { Image } from '@/components/atoms/Image/Image';
import { UserOutlined } from '@ant-design/icons';
import { User } from '@/common/types';
import { USER_STATUS_IMAGES } from '@/common/constants';

interface UserAvatarProps {
  user: User;
  name: string;
}

export const UserAvatar = ({ user, name }: UserAvatarProps) => {
  return (
    <Box className={styles['character-information-author-avatar']}>
      <Avatar
        icon={
          user?.avatar ? (
            <Image
              style={{ width: 32, height: 32 }}
              src={user?.avatar}
              alt={name}
            />
          ) : (
            <UserOutlined />
          )
        }
      />
      <Box className={styles['character-information-author-verify']}>
        <Image
          style={{ width: 12, height: 12 }}
          src={USER_STATUS_IMAGES[user.onlineStatus]}
          alt={name}
        />
      </Box>
    </Box>
  );
};
