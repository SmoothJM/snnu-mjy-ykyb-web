import styles from './index.less';
import { Button, Row, Col, Carousel, Card } from 'antd';
import { Link } from 'umi';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg4 from '../assets/bg4.png';
import bg5 from '../assets/bg5.png';
import bg6 from '../assets/bg6.png';
import bg7 from '../assets/bg7.png';

export default function IndexPage() {
  const contentStyle: any = {
    hight: 'auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    // windth: '50%'
  };
  return (
    <div className={styles.bigBox}>
      <Card className={styles.card}>
        aaa
        {/* <Row>
        <Col span={12}>
          <Carousel autoplay autoplaySpeed={1000}>
            <div >
              <img src={bg1} style={contentStyle}></img>
            </div>
            <div >
              <img src={bg2} style={contentStyle}></img>
            </div>
            <div >
              <img src={bg3} style={contentStyle}></img>
            </div>
          </Carousel>
        </Col>
        <Col span={12}>
          <Button>
            <Link to='/home'>To Home</Link>
          </Button>
        </Col>
      </Row> */}
      </Card>
    </div>
  );
}
