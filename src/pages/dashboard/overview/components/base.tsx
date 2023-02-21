import { ArrowUpOutlined } from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import { Col, Row, Statistic } from 'antd';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './base.less';
interface propsType {
  dataBase: any;
}

const BaseData = (props: propsType): JSX.Element => {
  const { dataBase } = props;
  const [circle_yestoday_count, setcircle_yestoday_count] = useState(0);
  const [circle_yestoday_dau, setcircle_yestoday_dau] = useState(0);

  const jisuanhuanbi = () => {
    const yestoday_dau = Number(dataBase?.daily_dau?.pop()?.count);
    if (dataBase.today_incr_count && Number(dataBase?.today_incr_count) === 0) {
      setcircle_yestoday_count(0);
    } else {
      let percent =
        Number(dataBase?.today_incr_count) / Number(dataBase?.yesterday_total_user_count);
      percent = Number((percent * 100).toFixed(2));
      setcircle_yestoday_count(percent);
    }

    const minu_dau = Number(dataBase?.today_dau) - yestoday_dau;
    if (minu_dau === 0) {
      setcircle_yestoday_dau(0);
    } else {
      let c_d = Number(minu_dau / yestoday_dau);
      c_d = Number((c_d * 100).toFixed(2));
      setcircle_yestoday_dau(c_d);
    }
  };

  useEffect(() => {
    jisuanhuanbi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataBase]);

  const formatter = (value: number) => <CountUp start={100} end={value} separator="," />;

  const cardStyle = {
    color: '#fff',
    fontSize: '48px',
  };

  const cardStyle_percent = {
    color: '#e2ea49',
    fontSize: '48px',
  };

  return (
    <>
      <ProCard ghost direction="row">
        <ProCard ghost colSpan={6} layout="center">
          <Row gutter={36}>
            <Col>
              <div className="card_title">总用户量</div>
              <Statistic
                // title="总用户量"
                value={dataBase?.total_user_count}
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>
            <Col>
              <span className='card_title'>环比昨日</span>
              <Statistic
                // title="环比昨日"
                value={circle_yestoday_count}
                precision={2}
                valueStyle={cardStyle_percent}
                prefix={<ArrowUpOutlined />}
                suffix="%"
                formatter={(value) => formatter(Number(value))}
              />
            </Col>
          </Row>
        </ProCard>

        <ProCard ghost colSpan={6} layout="center">
          <Row gutter={36}>
            <Col>
              <div className="card_title">今日DAU</div>
              <Statistic
                value={dataBase?.today_dau}
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>
            <Col>
              <span className='card_title'>环比昨日</span>
              <Statistic
                value={circle_yestoday_dau}
                precision={2}
                valueStyle={cardStyle_percent}
                prefix={<ArrowUpOutlined />}
                suffix="%"
                formatter={(value) => formatter(Number(value))}
              />
            </Col>
          </Row>
        </ProCard>

        <ProCard ghost colSpan={6} layout="center">
          <Row gutter={36}>
            <Col>
              <div className="card_title">留存率</div>
              <Statistic
                value={dataBase?.daily_retention?.pop()}
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>
            <Col>
              <span className='card_title'>留存</span>
              <Statistic
                value={circle_yestoday_dau}
                precision={2}
                valueStyle={cardStyle_percent}
                prefix={<ArrowUpOutlined />}
                suffix="%"
                formatter={(value) => formatter(Number(value))}
              />
            </Col>
          </Row>
        </ProCard>

        <ProCard ghost colSpan={6} layout="center">
          <Row gutter={36}>
            <Col>
              <div className="card_title">邀请人数{dataBase?.referral[0]?.platform}</div>
              <Statistic
                value={Number(dataBase?.referral[0]?.invite_user_cnt)}
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>
            <Col>
              <span className='card_title'>被邀请进来人数</span>
              <Statistic
                value={circle_yestoday_dau}
                precision={2}
                valueStyle={cardStyle_percent}
                prefix={<ArrowUpOutlined />}
                suffix="%"
                formatter={(value) => formatter(Number(value))}
              />
            </Col>
          </Row>
        </ProCard>


      </ProCard>
    </>
  );
};

export default BaseData;
