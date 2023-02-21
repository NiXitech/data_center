import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { FullscreenOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import ProCard from '@ant-design/pro-card';
import './index.less';
import { Liquid } from '@ant-design/plots';
// import moment from "moment";
import { getCountNum } from '@/services/http/api';
// import CountUp from 'react-countup';
import PlotsLine from '../chats/plotsline';
import { Badge, Divider, Layout } from 'antd';
import BaseData from './base';
import TableView from './table';

// curl 'https://sandbox.api.nxglabs.io/data-center/v1/health'
const IntroduceRow = () => {
  const [full, setFull] = useState(false);
  // 创建一个fullScreen的handle
  const handle = useFullScreenHandle();
  const [countNumber, setcountNumber] = useState(0);
  const [dau, setDau] = useState(0);
  const [dauhistory, setdauhistory] = useState([]);
  const [circle_yestoday_count, setcircle_yestoday_count] = useState('');
  const [circle_yestoday_dau, setcircle_yestoday_dau] = useState('');

  const [dataBase, setDatabase] = useState({
    daily_dau: [],
    daily_retention: [],
    sign_in: [],
    referral: [],
    total_user_count: '',
    yesterday_total_user_count: '',
    today_incr_count: '',
    yesterday_incr_count: '',
    today_dau: ''
  })
  // const [rightnow, setRightnow] = useState('')

  // const getDate = () => {
  //   const date = new Date()
  //   const now = moment(date).format('YYYY-MM-DD h:mm:ss')
  //   setRightnow(now)
  // }

  const jisuanhuanbi = (data: any) => {
    const yestoday_dau = Number(data?.daily_dau.pop().count);
    const minu_dau = Number(data?.today_dau) - yestoday_dau;
    if (data.today_incr_count && Number(data?.today_incr_count) === 0) {
      setcircle_yestoday_count('0');
    } else {
      let percent = Number(data?.today_incr_count) / Number(data?.yesterday_total_user_count);
      percent = Number((percent * 100).toFixed(2));
      setcircle_yestoday_count((percent > 0 ? '+' + percent : percent) + '%');
    }

    if (minu_dau === 0) {
      setcircle_yestoday_dau('0');
    } else {
      let c_d = Number(minu_dau / yestoday_dau);
      c_d = Number((c_d * 100).toFixed(2));
      setcircle_yestoday_dau((c_d > 0 ? '+' + c_d : c_d) + '%');
    }
  };

  const getAllNum = async () => {
    try {
      const { code, data } = (await getCountNum()) as any;
      if (code === 200) {
        setDatabase(data)
        // setcountNumber(Number(data?.total_user_count));
        // setDau(Number(data?.today_dau));
        // setdauhistory(data.daily_dau);
        // jisuanhuanbi(data);
      } else {
        console.log('getCountNum error!');
      }
    } catch (error) { }
  };

  useEffect(() => {
    getAllNum();
    const timer = setInterval(getAllNum, 5000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <FullScreen handle={handle} onChange={setFull}>
      <div className="overview_content">
        {!full && (
          <FullscreenOutlined
            style={{ fontSize: 18, color: '#3473E7', margin: '10px' }}
            onClick={() => {
              // 点击设置full为true，接着调用handle的enter方法，进入全屏模式
              setFull(true);
              handle.enter();
            }}
          />
        )}
        <Layout
          className="h_full"
          style={{
            backgroundColor: '#2F2963',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          {/* 基本数据 */}
          {/* <BaseData dataBase={dataBase} /> */}
          {/* 图标数据 */}
          <div className='w_fill'>
            <TableView dataBase={dataBase} />
          </div>


        </Layout>
      </div>
    </FullScreen>
  );
};

export default IntroduceRow;
