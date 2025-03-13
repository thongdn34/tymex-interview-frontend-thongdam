'use client';

import { useGetProducts } from '@/data-layer/hooks/useGetProducts';
import { notification, Row } from 'antd';
import { useState } from 'react';
import { Box } from '../../atoms/Box/Box';
import styles from './character-list.module.css';
import { CardSkeleton } from './CardSkeleton';
import { CharacterCard } from './CharacterCard/CharacterCard';
import { ViewMoreButton } from './ViewMoreButton';
export const CharacterList = () => {
  const [api, contextHolder] = notification.useNotification();
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isRefetching, error } = useGetProducts(
    {
      onError: (error) => {
        api.error({
          message: error.message,
        });
      },
    },
    {
      limit: '30',
      offset: String(offset),
    }
  );

  const handleLoadMore = () => {
    setOffset(offset + 30);
  };

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) {
    return <CardSkeleton />;
  }

  return (
    <Box>
      {contextHolder}
      <Row className={styles['character-list']}>
        {data?.data.length ? (
          data?.data?.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <Box className="font-16">No data!</Box>
        )}
        {isRefetching ? <CardSkeleton /> : <></>}
      </Row>

      <Row
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.2rem',
        }}
      >
        <ViewMoreButton
          hidden={!data?.data?.length}
          isEndList={data?.data?.length === data?.total}
          loading={isRefetching}
          onLoadMore={handleLoadMore}
        />
      </Row>
    </Box>
  );
};
