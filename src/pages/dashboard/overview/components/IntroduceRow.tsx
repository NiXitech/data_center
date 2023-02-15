import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { FullscreenOutlined } from "@ant-design/icons";
import { useEffect, useState } from 'react';
import ProCard from '@ant-design/pro-card';
import './index.less';
import { Liquid } from "@ant-design/charts";
import moment from "moment";
import { getCountNum } from '@/services/http/api';


// curl 'https://sandbox.api.nxglabs.io/data-center/v1/health'
const IntroduceRow = () => {

  const [full, setFull] = useState(false);
  // 创建一个fullScreen的handle
  const handle = useFullScreenHandle();
  const [countNumber, setcountNumber] = useState(2000)
  const [dau, setDau] = useState(0)
  const [rightnow, setRightnow] = useState('')

  const getDate = () => {
    const date = new Date()
    const now = moment(date).format('YYYY-MM-DD h:mm:ss')
    setRightnow(now)
  }

  const getAllNum = async () => {
    try {
        const { data } = await getCountNum() as any
        setcountNumber(Number(data?.total_user_count))
        setDau(Number(data?.today_dau))
    } catch (error) {

    }
}

  useEffect(() => {
    setInterval(getDate, 5000)
    setInterval(() => getAllNum(), 5000)
  }, []);

  return (
    <FullScreen
      handle={handle}
      onChange={setFull}
    >
      <div className="overview_content">
        {!full &&
          <FullscreenOutlined
            style={{ fontSize: 18, color: '#3473E7', margin: '10px' }}
            onClick={() => {
              // 点击设置full为true，接着调用handle的enter方法，进入全屏模式
              setFull(true);
              handle.enter();
            }}
          />}
        <ProCard gutter={16} ghost>
          <ProCard colSpan={12} style={{ height: '100vh', backgroundColor: '#2F2963', borderRadius: '24px' }}>
            <div className='title_count'>
              <span>
                总用户量
              </span>
            </div>
            <div className='title_count'>
              <span>
                <Liquid
                  height={461}
                  min={0}
                  max={countNumber * 3}
                  value={countNumber}
                  forceFit
                  padding={[0, 0, 0, 0]}
                  statistic={{
                    // formatter: (value) => `${((100 * value) / 10000).toFixed(1)}%`,
                    formatter: (value) => `${value}`
                  }}
                />
              </span>
            </div>
          </ProCard>

          <ProCard colSpan={12} style={{ height: '100vh', backgroundColor: '#2F2963', borderRadius: '24px' }}>
            <div className='title_count'>
              <span>
                今日<span style={{ fontWeight: '400' }}>DAU</span>
              </span>
            </div>
            <div className='title_count'>
              <Liquid
                height={461}
                min={0}
                max={dau * 5}
                value={dau}
                forceFit
                padding={[0, 0, 0, 0]}
                statistic={{
                  // formatter: (value) => `${((100 * value) / 10000).toFixed(1)}%`,
                  formatter: (value) => `${value}`
                }}
              />
            </div>
            <div className='title_date'>
              {/* <span>
                更新时间： {rightnow}
              </span> */}
            </div>
          </ProCard>
        </ProCard>
      </div>
    </FullScreen>
  )
};

export default IntroduceRow;
