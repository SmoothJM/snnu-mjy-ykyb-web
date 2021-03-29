import styles from './index.less';
import { Button, Row, Col, Carousel, Card } from 'antd';
import { Link } from 'umi';
import React, { useState } from 'react';

const IndexPage: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
  };

  return (
    <div className={styles.bigBox}>
      <button
        onClick={onClick}
        className={`${styles['bubbly-button']} ${
          clicked ? styles['bubbly-button-animate'] : ''
        }`}
      >
        Click me!
      </button>
    </div>
  );
};

export default IndexPage;
