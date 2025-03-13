'use client';

import { Box } from '@/components/atoms/Box/Box';
import { Image } from '@/components/atoms/Image/Image';
import styles from './header.module.css';
import { Col, Dropdown, Row, Space } from 'antd';
import { BaseButton } from '../../molecules/Button/BaseButton';

export const RightSide = () => {
  return (
    <Row className={styles.rightSide}>
      <Col style={{ width: '10rem', height: '2.5rem', marginRight: '3rem' }}>
        <BaseButton>Connect Wallet</BaseButton>
      </Col>
      <Col>
        <Dropdown
          menu={{
            items: [
              {
                key: 'en',
                label: <Box className="font-black">English</Box>,
              },
            ],
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Image
                style={{ width: 16, height: 16, marginRight: 8 }}
                src="/world.svg"
                alt="world icon"
              />
              <Image
                style={{ width: 16, height: 16 }}
                src="/vector.svg"
                alt="vector icon"
              />
            </Space>
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};
