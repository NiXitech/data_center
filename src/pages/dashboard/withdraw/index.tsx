import type { FC } from 'react';
import { Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
// import { useRequest } from 'umi';
import Exchange from './compenents/table';

// import { fakeChartData } from './service';
import type { AnalysisData } from './data.d';
import { Tabs } from 'antd';

type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};

const WithDraw: FC<AnalysisProps> = () => {
  // const { loading, data } = useRequest(fakeChartData);

  return (
    <GridContent>
      <>
        <Suspense fallback={null}>
          <Tabs defaultActiveKey="1" type="card" size="large">
            <Tabs.TabPane tab="Crushe" key="1">
              <Exchange />
            </Tabs.TabPane>
            <Tabs.TabPane tab="witcoin" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
          </Tabs>
        </Suspense>
      </>
    </GridContent>
  );
};

export default WithDraw;
