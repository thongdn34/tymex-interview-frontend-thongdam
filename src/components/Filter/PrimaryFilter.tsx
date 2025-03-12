import React from 'react';
import { Box } from '../atoms/Box/Box';
import SearchBar from '../SearchBar';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './filter.module.css';
import { PriceFilter } from './PriceFilter';
import { GroupFilter } from './GroupFilter';

export const PrimaryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get('search') || '';

  const onSearchText = (text: string) => {
    router.push(`?search=${text}`, { scroll: false });
  };

  return (
    <Box>
      <Box className={styles.groupFilterSearch}>
        <SearchBar onSearch={onSearchText} defaultValue={defaultValue} />
      </Box>
      <PriceFilter />
      <GroupFilter />
    </Box>
  );
};
