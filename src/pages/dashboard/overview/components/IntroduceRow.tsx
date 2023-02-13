import { InfoCircleOutlined } from '@ant-design/icons';
import { TinyArea, TinyColumn } from '@ant-design/charts';
import { Col, Row, Tooltip } from 'antd';

import numeral from 'numeral';
import { ChartCard, Field } from './Charts';
import type { DataItem } from '../data.d';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { FullscreenOutlined } from "@ant-design/icons";
import { useState } from 'react';

const topColResponsiveProps = {
  xs: 16,
  sm: 16,
  md: 16,
  lg: 16,
  xl: 16,
  style: { marginBottom: 24 }
};


const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {

  const [full, setFull] = useState(false);
  // 创建一个fullScreen的handle
  const handle = useFullScreenHandle();

  return (
    <div style={{ minHeight: '100vh' }}>
      <FullScreen
        handle={handle}
        onChange={setFull}
      >
        {!full &&
          <FullscreenOutlined
            style={{ fontSize: 16 }}
            onClick={() => {
              // 点击设置full为true，接着调用handle的enter方法，进入全屏模式
              setFull(true);
              handle.enter();
            }}
          />}
        <Row gutter={24} justify="center" align="middle">
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              loading={loading}
              title="访问量"
              action={
                <Tooltip title="指标说明">
                  <InfoCircleOutlined />
                </Tooltip>
              }
              total={numeral(8899).format('0,0')}
              footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
              contentHeight={46}
            >
              <TinyArea
                color="#975FE4"
                xField="x"
                height={46}
                forceFit
                yField="y"
                smooth
                data={visitData}
              />
            </ChartCard>
          </Col>
        </Row>

        <Row gutter={24} justify="center" align="middle">
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              loading={loading}
              title="支付笔数"
              action={
                <Tooltip title="指标说明">
                  <InfoCircleOutlined />
                </Tooltip>
              }
              total={numeral(6688).format('0,0')}
              footer={<Field label="转化率" value="60%" />}
              contentHeight={46}
            >
              <TinyColumn xField="x" height={46} forceFit yField="y" data={visitData} />
            </ChartCard>
          </Col>
        </Row>
      </FullScreen>
    </div>
  )
};

export default IntroduceRow;
