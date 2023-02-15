import { Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import IntroduceRow from './components/IntroduceRow';

const Overview = () => {

  return (
    <GridContent>
      <>
        <Suspense fallback={null}>
          <IntroduceRow/>
        </Suspense>
      </>
    </GridContent>
  );
};

export default Overview;
