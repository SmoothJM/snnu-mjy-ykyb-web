import styles from './index.less';
import { Button, Row, Col, Carousel, Card } from 'antd';
import { Link } from 'umi';
import React, { useState } from 'react';
import Login from './login/Login';

const IndexPage: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
  };

  return (
    <div className={styles.bigBox}>
      <button
        onClick={onClick}
        style={{ zIndex: clicked ? 0 : 5, fontSize: '18px', fontWeight: 800 }}
        className={`${styles['bubbly-button']} ${
          clicked ? styles['bubbly-button-animate'] : ''
        }`}
      >
        Click me!
      </button>
      <Login clicked={clicked} />
    </div>
  );
};

export default IndexPage;
