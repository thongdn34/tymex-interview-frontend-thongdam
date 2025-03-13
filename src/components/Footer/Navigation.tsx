'use client';

import { Box } from '../atoms/Box/Box';
import { droneFont } from '@/core/fonts';
import footerStyles from './footer.module.css';
import { Col, Row, Space } from 'antd';

export const Navigation = () => {
  return (
    <Space direction="vertical">
      <Box
        className={`${droneFont.className} ${footerStyles['information-title']}`}
      >
        NAVIGATION
      </Box>
      <Row gutter={50} className={footerStyles.navigation}>
        <Col className="font-16">
          <p>Home</p>
          <p>About us</p>
          <p>Our teams</p>
        </Col>
        <Col className="font-16">
          <p>Whitepaper</p>
          <p>Marketplace</p>
          <p>Roadmap</p>
        </Col>
        <Col className="font-16">
          <p>FAQs</p>
          <p>News</p>
          <p>Community</p>
        </Col>
      </Row>
    </Space>
  );
};
