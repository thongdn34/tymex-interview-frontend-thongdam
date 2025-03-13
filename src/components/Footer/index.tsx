import { Col, Divider, Row } from 'antd';
import React from 'react';
import { Box } from '../atoms/Box/Box';
import { Navigation } from './Navigation';
import footerStyles from './footer.module.css';
import { ContactUs } from './ContacUs';
import { Subscribe } from './Subscribe';
import { CopyWriter } from './Copywriter';

const Footer = () => {
  return (
    <footer>
      <Box className="container">
        <Row className={footerStyles['pre-footer']}>
          <Col>
            <Navigation />
          </Col>
          <Col>
            <ContactUs />
          </Col>
          <Col>
            <Subscribe />
          </Col>
        </Row>

        <Divider style={{ marginTop: '2rem', marginBottom: '3rem' }} />

        <CopyWriter />
      </Box>
    </footer>
  );
};

export default Footer;