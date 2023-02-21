import { formattedData, retentionData } from "@/pages/libs";
import { Col, Row } from "antd";
import ColumnView from "../chats/Column";
import PieView from "../chats/Pie";
import PlotsLine from "../chats/plotsline";

interface propsType {
  dataBase: any
}

const TableView = (props: propsType): JSX.Element => {
  return (
    <>
      <Row gutter={24}>
        <Col span={12}>
          <div className="title_count text-left">
            <span>历史<span style={{ fontWeight: 'bolder' }}>DAU</span></span>
          </div>
          <div
            style={{
              marginTop: '20px'
            }}
          >
            <PlotsLine
              data={props.dataBase.daily_dau}
              Field={{ x: 'date', y: 'count' }}
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="title_count text-left">
            <span>签到记录</span>
          </div>
          <div
            style={{
              marginTop: '20px'
            }}
          >
            <ColumnView data={formattedData(props.dataBase.sign_in, 'day', 'user_cnt')} Field={{ x: 'day', y: 'user_cnt' }} />
          </div>
        </Col>
      </Row>
      <Row gutter={24}>

        <Col span={24}>
          <div className="title_count text-left">
            <span>留存率</span>
          </div>
          <div
            style={{
              marginTop: '20px'
            }}
          >
            <PlotsLine
              data={retentionData(props.dataBase.daily_retention)} Field={{ x: 'date', y: 'value' }}
              setting={{
                seriesField: 'name'
              }}
            />
          </div>

        </Col>

      </Row>

    </>
  );
}

export default TableView;

