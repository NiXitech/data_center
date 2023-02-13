import type { FC } from 'react';
import { Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import IntroduceRow from './components/IntroduceRow';
import { useRequest } from 'umi';

import { fakeChartData } from './service';
import type { AnalysisData } from './data.d';


type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};

const Overview: FC<AnalysisProps> = () => {
  const { loading, data } = useRequest(fakeChartData);

  return (
    <GridContent>
      <>
        <Suspense fallback={null}>
          <IntroduceRow loading={loading} visitData={data?.visitData || []} />
        </Suspense>
      </>
    </GridContent>
  );
};

export default Overview;
