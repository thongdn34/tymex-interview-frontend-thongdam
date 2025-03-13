'use client';

import { Box } from '@/components/atoms/Box/Box';
import { Image } from '@/components/atoms/Image/Image';
import { droneFont } from '@/core/fonts';
import footerStyles from './footer.module.css';
import { Col, Row, Space } from 'antd';

const ContactGroup = (props: {
  href?: string;
  label: string;
  icon: React.ReactNode;
}) => {
  const { href, label, icon } = props;

  return (
    <Box className={footerStyles['contact-group']}>
      <Box
        style={{
          width: 16,
          height: 16,
          display: 'flex',
          alignItems: 'center',
          marginRight: '0.8rem',
        }}
      >
        {icon}
      </Box>
      <a href={href}>{label}</a>
    </Box>
  );
};

export const ContactUs = () => {
  return (
    <Space direction="vertical">
      <Box
        className={`${droneFont.className} ${footerStyles['information-title']}`}
      >
        CONTACT US
      </Box>
      <Row gutter={50}>
        <Col className="font-16">
          <ContactGroup
            href="tel:01234568910"
            label="01234568910"
            icon={<Image src="/phone.svg" alt="phone-icon" />}
          />
          <ContactGroup
            href="mailto:tymex-talent@tyme.com"
            label="tymex-talent@tyme.com"
            icon={<Image src="/message.svg" alt="message-icon" />}
          />
        </Col>
      </Row>
    </Space>
  );
};
