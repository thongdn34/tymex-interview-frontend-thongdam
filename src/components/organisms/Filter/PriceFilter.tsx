'use client';

import { Col } from 'antd';
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Row, Slider } from 'antd';
import styles from './filter.module.css';
import { DEFAULT_UNIT } from '@/common/constants';
import { useQueryParams } from '@/common/hooks/useQueryParams';

export const PriceFilter = () => {
  const { getParam, onChangeParams } = useQueryParams();
  const priceStart = Number(getParam('priceStart') ?? 0);
  const priceEnd = Number(getParam('priceEnd') ?? 1000);

  const handleChangeComplete = (range: number[]) => {
    onChangeParams({
      priceStart: range[0].toString(),
      priceEnd: range[1].toString(),
    });
  };

  return (
    <Box className={styles.priceSliderContainer}>
      <Box className={`font-16 font-white ${styles.sliderLabel}`}>PRICE</Box>
      <Box className={styles.sliderContainer}>
        <Slider
          tooltip={{
            autoAdjustOverflow: false,
            placement: 'top',
            className: 'slider-range-custom',
            formatter: (value) => `${value} ${DEFAULT_UNIT}`,
            open: true,
          }}
          styles={{
            rail: { background: 'var(--border)', height: 8 },
            track: {
              background:
                'linear-gradient(91.27deg, #da458f00 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, #da34dd00 102.8%)',
              height: 8,
            },
            handle: {
              boxShadow: '0 0 1rem 0.1875rem #da40a387',
            },
          }}
          range
          defaultValue={[priceStart, priceEnd]}
          min={0}
          max={1000}
          onChangeComplete={handleChangeComplete}
        />
        <Row className={styles.sliderRange} justify="space-between">
          <Col className={`font-16 ${styles.sliderRangeNumber}`}>0.01</Col>
          <Col className={`font-16 ${styles.sliderRangeNumber}`}>1000</Col>
        </Row>
      </Box>
      <Box
        className={`font-16 font-white hide-upper-1440 ${styles.sliderLabel}`}
      >
        {DEFAULT_UNIT}
      </Box>
    </Box>
  );
};
