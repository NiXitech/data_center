import type { FC } from 'react';
import { Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
// import { useRequest } from 'umi';
import ChatGpt from './compenents/table';

// import { fakeChartData } from './service';
import type { AnalysisData } from './data.d';


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
          <ChatGpt />
        </Suspense>
      </>
    </GridContent>
  );
};

export default WithDraw;
