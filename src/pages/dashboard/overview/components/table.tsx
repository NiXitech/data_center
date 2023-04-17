import { formattedData, getLast30DaysData, retentionData } from '@/pages/libs';
import { Col, Row, Space } from 'antd';
import ColumnView from '../chats/Column';
// import PieView from '../chats/Pie';
import PlotsLine from '../chats/plotsline';

interface propsType {
  dataBase: any;
}

const TableView = (props: propsType): JSX.Element => {
  return (
    <>
      <Row gutter={12}>
        <Col span={8}>
          <div className="title_count text-left">
            <span>
              历史<span style={{ fontWeight: 'bolder' }}>DAU</span>
            </span>
          </div>
          <div
            style={{
              marginTop: '.2rem',
            }}
          >
            <PlotsLine data={getLast30DaysData(props.dataBase.daily_dau)} Field={{ x: 'date', y: 'count' }} />
          </div>
        </Col>
        <Col span={8}>
          <div className="title_count text-left">
            <span>签到记录</span>
          </div>
          <div
            style={{
              marginTop: '.2rem',
            }}
          >
            <ColumnView
              data={formattedData(props.dataBase.sign_in, 'day', 'user_cnt')}
              Field={{ x: 'day', y: 'user_cnt' }}
              theme="dark"
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="title_count text-left">
            <span>留存率</span>
          </div>
          <div
            style={{
              marginTop: '.2rem',
            }}
          >
            <PlotsLine
              data={getLast30DaysData(retentionData(props.dataBase?.daily_retention || []))}
              Field={{ x: 'date', y: 'value' }}
              setting={{
                seriesField: 'name',
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TableView;
