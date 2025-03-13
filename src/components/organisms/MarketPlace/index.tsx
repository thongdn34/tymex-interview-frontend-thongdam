import { Col } from 'antd';
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Row } from 'antd';
import styles from './market-place.module.css';
import { PrimaryFilter } from '../Filter/PrimaryFilter';
import { SecondaryFilter } from '../Filter/SecondaryFilter';
import { CharacterList } from '../CharacterList';
import { Image } from '../../atoms/Image/Image';

const MarketPlace = () => {
  return (
    <Box className={styles.main}>
      <Row className={`container ${styles.container}`}>
        <Col className={styles.filter}>
          <PrimaryFilter />
        </Col>
        <Col className={styles['product-list']}>
          <SecondaryFilter />
          <CharacterList />
        </Col>
      </Row>
      <Box style={{ marginTop: '2rem' }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
          }}
          src="/digital-art-background.svg"
          alt="digital-art-background"
        />
      </Box>
    </Box>
  );
};

export default MarketPlace;
