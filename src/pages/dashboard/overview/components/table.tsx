import { Col, Row } from "antd";
import PlotsLine from "./plotsline";

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
              marginTop: '40px'
            }}
          >
            <PlotsLine
              data={props.dataBase.daily_dau}
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="title_count text-left">
            <span>历史<span style={{ fontWeight: 'bolder' }}>DAU</span></span>
          </div>
          <div
            style={{
              marginTop: '40px'
            }}
          >
            <PlotsLine
              data={props.dataBase.daily_dau}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>

    </>
  );
}

export default TableView;
