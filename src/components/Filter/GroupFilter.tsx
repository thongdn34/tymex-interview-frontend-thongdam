import React, { useEffect } from 'react';
import { Box } from '../atoms/Box/Box';
import { useQueryParams } from '@/common/hooks/useQueryParams';
import { GroupSelect } from '../molecules/GroupSelect/GroupSelect';
import {
  DEFAULT_FILTERS,
  TIERS,
  THEMES,
  TIMES,
  PRICES,
  Filter,
} from '@/common/constants';
import { Col } from 'antd';
import { Row } from 'antd';
import styles from './filter.module.css';
import { Image } from '../atoms/Image/Image';
import { BaseButton } from '../molecules/Button/BaseButton';
export const GroupFilter = () => {
  const { onChangeParams, onClearParams, getParam } = useQueryParams();
  const [filters, setFilters] = React.useState(DEFAULT_FILTERS);

  const onChangeFilter = (key: string, value: string) => {
    setFilters((prevFilter) => {
      return {
        ...prevFilter,
        [key]: value,
      };
    });
  };
  const onClearFilter = () => {
    onClearParams(Object.keys(DEFAULT_FILTERS));
    setFilters(DEFAULT_FILTERS);
  };

  const onSearchFilter = () => {
    onChangeParams(filters);
  };

  useEffect(() => {
    const currentParams = {
      tier: getParam(Filter.TIER) ?? DEFAULT_FILTERS.tier,
      theme: getParam(Filter.THEME) ?? DEFAULT_FILTERS.theme,
      time: getParam(Filter.TIME) ?? DEFAULT_FILTERS.time,
      price: getParam(Filter.PRICE) ?? DEFAULT_FILTERS.price,
    };

    setFilters(currentParams);
  }, []);

  return (
    <Box>
      <GroupSelect
        label="TIER"
        options={TIERS}
        value={filters?.tier}
        onChange={(tier) => onChangeFilter(Filter.TIER, tier)}
      />
      <GroupSelect
        label="THEME"
        options={THEMES}
        value={filters?.theme}
        onChange={(theme) => onChangeFilter(Filter.THEME, theme)}
      />
      <GroupSelect
        label="TIME"
        options={TIMES}
        value={filters?.time}
        onChange={(time) => onChangeFilter(Filter.TIME, time)}
      />
      <GroupSelect
        label="PRICE"
        options={PRICES}
        value={filters?.price}
        onChange={(price) => onChangeFilter(Filter.PRICE, price)}
      />
      <Row className={styles.action}>
        <Col className={styles.resetButton}>
          <Image
            className={styles.resetIcon}
            src="/close.svg"
            alt="close-icon"
          />
          <Box className="font-16 font-white" onClick={onClearFilter}>
            Reset filter
          </Box>
        </Col>
        <Col style={{ width: '10rem', height: '2.5rem', marginLeft: '1rem' }}>
          <BaseButton onClick={onSearchFilter}>Search</BaseButton>
        </Col>
      </Row>
    </Box>
  );
};
