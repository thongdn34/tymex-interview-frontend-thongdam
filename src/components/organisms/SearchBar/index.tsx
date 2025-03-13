import React, { useRef } from 'react';
import { BaseInput } from '../../molecules/Input/BaseInput';
import styles from './search-bar.module.css';
import { InputRef } from 'antd';
import { Image } from '../../atoms/Image/Image';
import { debounce } from '@/common/utils';

interface SearchBarProps {
  onSearch: (search: string) => void;
  defaultValue?: string;
}

const SearchBar = ({ defaultValue, onSearch }: SearchBarProps) => {
  const inputRef = useRef<InputRef>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const debouncedChange = debounce(() => {
      onSearch(val);
    }, 500);
    debouncedChange();
  };

  return (
    <BaseInput
      ref={inputRef}
      className={styles.searchInput}
      placeholder="Quick search"
      defaultValue={defaultValue ?? ''}
      onChange={handleChange}
      prefix={
        <Image
          style={{ width: 16, height: 16, marginRight: 8 }}
          src="/search.svg"
          alt="search-icon"
        />
      }
    />
  );
};

export default SearchBar;
