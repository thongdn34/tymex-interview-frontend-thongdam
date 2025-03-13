'use client';

import { Box } from '@/components/atoms/Box/Box';
import { droneFont } from '@/core/fonts';
import footerStyles from './footer.module.css';
import { Col, Row, Space } from 'antd';
import { BaseInput } from '../molecules/Input/BaseInput';
import { BaseButton } from '../molecules/Button/BaseButton';

export const Subscribe = () => {
  return (
    <Space direction="vertical">
      <Box
        className={`${droneFont.className} ${footerStyles['information-title']}`}
      >
        SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
      </Box>

      <Row style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <Col style={{ width: '100%' }}>
          <BaseInput
            placeholder="Your email address"
            className={footerStyles.input}
          />
        </Col>
        <Col style={{ width: '10rem', height: '2.5rem', marginLeft: '1rem' }}>
          <BaseButton>Subscribe</BaseButton>
        </Col>
      </Row>
    </Space>
  );
};
