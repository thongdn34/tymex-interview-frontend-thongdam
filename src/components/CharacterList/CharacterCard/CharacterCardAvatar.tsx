import { gradients } from '@/core/palette';
import { Space } from 'antd';
import styles from '../character-list.module.css';
import { Box } from '../../atoms/Box/Box';
import { Image } from '../../atoms/Image/Image';
import { CHARACTER_IMAGES } from '@/common/constants';

export const CharacterCardAvatar = (props: {
  id: number;
  imageId: number;
  category: string;
  isFavorite: boolean;
}) => {
  const { id, imageId, category, isFavorite } = props;

  return (
    <Space
      direction="vertical"
      style={{ background: gradients[category] }}
      className={styles['character-card-avatar']}
    >
      <Box className={styles['character-card-avatar-header']}>
        <Box className={styles['card-category']}>{category}</Box>
        <Box className={styles['favorite-icon']}>
          <Image
            src={isFavorite ? '/love.svg' : '/un-love.svg'}
            alt="favorite-icon"
          />
        </Box>
      </Box>
      <Box className={styles['avatar']}>
        <Image src={CHARACTER_IMAGES[imageId]} alt={`${id} ${category}`} />
      </Box>
    </Space>
  );
};
