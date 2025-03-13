import React from 'react';
import styles from '../character-list.module.css';
import { Card } from 'antd';
import { Character } from '@/common/types';
import { CharacterCardAvatar } from './CharacterCardAvatar';
import { CharacterCardBody } from './CharacterCardBody';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const {
    id,
    title: name,
    user,
    imageId,
    price,
    category,
    isFavorite,
  } = character;

  return (
    <Card className={styles['character-card']} hoverable>
      <CharacterCardAvatar
        id={id}
        imageId={imageId}
        category={category}
        isFavorite={isFavorite}
      />
      <CharacterCardBody name={name} price={price} user={user} />
    </Card>
  );
};
