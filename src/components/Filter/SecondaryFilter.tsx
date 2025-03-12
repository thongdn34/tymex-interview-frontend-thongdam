import { Tabs } from 'antd';
import React from 'react';
import { useQueryParams } from '@/common/hooks/useQueryParams';
import { Image } from '../atoms/Image/Image';
import { CATEGORIES } from '@/common/constants';

export const SecondaryFilter = () => {
  const { onChangeParam, getParam } = useQueryParams();

  const onChangeCategory = (value: string) => {
    onChangeParam('category', value);
  };

  return (
    <Tabs
      className="sub-filter"
      defaultActiveKey={getParam('category') ?? ''}
      tabPosition="top"
      items={CATEGORIES.map((category) => {
        return {
          label: category.label,
          key: category.value,
        };
      })}
      onChange={onChangeCategory}
      moreIcon={
        <Image
          style={{ width: 18, height: 11 }}
          src="/dropdown-pink.svg"
          alt="dropdown-pink-icon"
        />
      }
    />
  );
};
