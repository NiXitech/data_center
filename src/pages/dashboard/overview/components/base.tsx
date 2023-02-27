import {
  AndroidOutlined,
  AppleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import { Col, Divider, Row, Statistic } from 'antd';
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
    fontSize: '1.8rem',
  };

  const cardStyle_percent = {
    color: '#e2ea49',
    fontSize: '1rem',
  };

  const procardstyle = {
    style: {
      backgroundColor: '#0000001f',
      borderRadius: '8px',
      padding: '18px',
    },
    // span: '4'
  };

  return (
    <>
      {/* <ProCard ghost direction="row" gutter={12}> */}
        {/* <ProCard colSpan={4} layout="center" {...procardstyle}> */}
          <Row gutter={0} justify="space-between" style={{width:'100%'}} wrap={false}>
            <Col {...procardstyle}>
              <div className="card_title">今日DAU</div>
              <span style={{ display: 'flex' }}>
                <Statistic
                  value={dataBase?.today_dau}
                  formatter={(value) => formatter(Number(value))}
                  valueStyle={cardStyle}
                />
                <Statistic
                  value={circle_yestoday_dau}
                  precision={2}
                  valueStyle={cardStyle_percent}
                  prefix={circle_yestoday_dau >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                  suffix="%"
                  formatter={(value) => formatter(Number(value))}
                />
              </span>
            </Col>

            <Col {...procardstyle}>
              <div className="card_title">今日新增</div>
              <Statistic
                value={dataBase?.today_incr_count}
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>

            <Col {...procardstyle}>
              <div className="card_title">累计注册数</div>
              <span style={{ display: 'flex' }}>
                <Statistic
                  // title="总用户量"
                  value={dataBase?.total_user_count}
                  formatter={(value) => formatter(Number(value))}
                  valueStyle={cardStyle}
                />
                <Statistic
                  // title="环比昨日"
                  value={circle_yestoday_count}
                  precision={2}
                  valueStyle={cardStyle_percent}
                  prefix={circle_yestoday_count >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                  suffix="%"
                  formatter={(value) => formatter(Number(value))}
                />
              </span>
            </Col>

            <Col {...procardstyle}>
              <div className="card_title">累计发邀请人数</div>
              <Statistic
                value={
                  Number(dataBase?.referral[0]?.invite_user_cnt) +
                  Number(dataBase?.referral[1]?.invite_user_cnt)
                }
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>

            <Col {...procardstyle}>
              <div className="card_title">累计接受邀请人数</div>
              <Statistic
                // title="接受邀请人数"
                value={
                  Number(dataBase?.referral[0]?.invitee_user_cnt) +
                  Number(dataBase?.referral[1]?.invitee_user_cnt)
                }
                precision={2}
                valueStyle={cardStyle}
                // prefix={<ArrowUpOutlined />}
                // suffix="累计接受邀请人数"
                formatter={(value) => formatter(Number(value))}
              />
            </Col>

          </Row>
        {/* </ProCard> */}

        {/* <ProCard colSpan={4} layout="center" {...procardstyle}>
          <Row gutter={0}>
            <Col>
              <div className="card_title">今日新增</div>
              <Statistic
                value={dataBase?.today_incr_count}
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>
          </Row>
        </ProCard>

        <ProCard colSpan={5} layout="center" {...procardstyle}>
          <Row gutter={0}>
            <Col>
              <div className="card_title">累计注册数</div>
              <span style={{ display: 'flex' }}>
                <Statistic
                  // title="总用户量"
                  value={dataBase?.total_user_count}
                  formatter={(value) => formatter(Number(value))}
                  valueStyle={cardStyle}
                />
                <Statistic
                  // title="环比昨日"
                  value={circle_yestoday_count}
                  precision={2}
                  valueStyle={cardStyle_percent}
                  prefix={circle_yestoday_count >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                  suffix="%"
                  formatter={(value) => formatter(Number(value))}
                />
              </span>
            </Col>
          </Row>
        </ProCard> */}

        {/* <ProCard colSpan={11} layout="center" {...procardstyle}>
          <Row gutter={0}>
            <Col>
              <div className="card_title_4">累计发邀请人数</div>
              <Statistic
                value={
                  Number(dataBase?.referral[0]?.invite_user_cnt) +
                  Number(dataBase?.referral[1]?.invite_user_cnt)
                }
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>
            <Divider type="vertical" />
            <Col>
              <div className="card_title_yellow_4">累计接受邀请人数</div>
              <Statistic
                // title="接受邀请人数"
                value={
                  Number(dataBase?.referral[0]?.invitee_user_cnt) +
                  Number(dataBase?.referral[1]?.invitee_user_cnt)
                }
                precision={2}
                valueStyle={cardStyle_yellow}
                // prefix={<ArrowUpOutlined />}
                // suffix="累计接受邀请人数"
                formatter={(value) => formatter(Number(value))}
              />
            </Col>
          </Row>
        </ProCard> */}

        {/* <ProCard colSpan={6} layout="center" {...procardstyle}>
          <Row gutter={0}>
            <Col span={12}>
              <div className="card_title">
                发邀请人数 <AndroidOutlined style={{ color: '#e2ea49' }} />
              </div>
              <Statistic
                value={dataBase?.referral[0]?.invite_user_cnt}
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>
            <Col span={12}>
              <Statistic
                value={dataBase?.referral[0]?.invitee_user_cnt}
                precision={2}
                valueStyle={cardStyle_percent}
                // prefix={<ArrowUpOutlined />}
                suffix="接受邀请"
                formatter={(value) => formatter(Number(value))}
              />
            </Col>
          </Row>
        </ProCard>

        <ProCard colSpan={6} layout="center" {...procardstyle}>
          <Row gutter={0}>
            <Col>
              <div className="card_title">
                发邀请人数 <AppleOutlined style={{ color: '#e2ea49' }} />
              </div>
              <Statistic
                value={dataBase?.referral[1]?.invite_user_cnt}
                formatter={(value) => formatter(Number(value))}
                valueStyle={cardStyle}
              />
            </Col>
            <Col>
              <Statistic
                value={dataBase?.referral[1]?.invitee_user_cnt}
                precision={2}
                valueStyle={cardStyle_percent}
                // prefix={<ArrowUpOutlined />}
                suffix="接受邀请"
                formatter={(value) => formatter(Number(value))}
              />
            </Col>
          </Row>
        </ProCard> */}
      {/* </ProCard> */}
    </>
  );
};

export default BaseData;
