'use client';

import { droneFont } from '@/core/fonts';
import styles from './header.module.css';
import { MenuOutlined } from '@ant-design/icons';
import { Col, Drawer, Row } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { HEADERS } from '@/common/constants';
import { useQueryParams } from '@/common/hooks/useQueryParams';

export const LeftSide = () => {
  const router = useRouter();
  const { getParam } = useQueryParams();
  const page = getParam('page');
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onChange = (page: string) => {
    router.push(`?page=${page}`, { scroll: false });
    setDrawerVisible(false);
  };

  return (
    <Row className={`${styles.leftSide} ${droneFont.className}`}>
      <Col className={styles.hamburger}>
        <MenuOutlined
          onClick={() => {
            setDrawerVisible(true);
          }}
        />

        <Drawer
          className={styles.drawer}
          placement="left"
          closable={false}
          onClose={() => {
            setDrawerVisible(false);
          }}
          open={drawerVisible}
          width={250}
        >
          {HEADERS.map((header) => (
            <Row
              onClick={() => onChange(header.key)}
              className={`${styles.drawerText} ${page === header.key ? styles.active : ''}`}
              key={header.key}
            >
              {header.label}
            </Row>
          ))}
        </Drawer>
      </Col>
      {HEADERS.map((header) => (
        <Col
          className={`font-white ${styles.headerTabs} ${page === header.key ? styles.active : ''}`}
          onClick={() => onChange(header.key)}
          key={header.key}
        >
          {header.label}
        </Col>
      ))}
    </Row>
  );
};
