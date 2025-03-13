import { Row, Col } from 'antd';
import footerStyles from './footer.module.css';

export const CopyWriter = () => {
  return (
    <Row justify="space-between" className={footerStyles.container}>
      <Col className={`font-16 ${footerStyles.copywriter}`}>
        ©2023 Tyme - Edit. All Rights reserved.
      </Col>

      <Row gutter={50} className={footerStyles.extra}>
        <Col className={`font-16 ${footerStyles.link}`}>Security</Col>
        <Col className={`font-16 ${footerStyles.link}`}>Legal</Col>
        <Col className={`font-16 ${footerStyles.link}`}>Privacy</Col>
      </Row>
    </Row>
  );
};
