import { getCountNum } from "@/services/http/api";
import { Liquid } from "@ant-design/charts";
import ProCard from "@ant-design/pro-card";
import { Badge } from "antd";
import { useState, useEffect } from "react";
import { useFullScreenHandle } from "react-full-screen";

interface propsType {
  dataBase: any
}

const BaseData = (props: propsType): JSX.Element => {
  console.log('%c🀀 props', 'color: #ff0000; font-size: 20px;', props);
  const [full, setFull] = useState(false);
  // 创建一个fullScreen的handle
  const handle = useFullScreenHandle();
  const [countNumber, setcountNumber] = useState(0);
  const [dau, setDau] = useState(0);
  const [dauhistory, setdauhistory] = useState([]);
  const [circle_yestoday_count, setcircle_yestoday_count] = useState('');
  const [circle_yestoday_dau, setcircle_yestoday_dau] = useState('');
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
        setcountNumber(Number(data?.total_user_count));
        setDau(Number(data?.today_dau));
        setdauhistory(data.daily_dau);
        jisuanhuanbi(data);
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
    <>
      <ProCard gutter={[16]} ghost wrap>
        <ProCard
          ghost
          className="cardItem"
          colSpan={12}
          // style={{ backgroundColor: '#2F2963', borderRadius: '24px' }}
          layout="center"
          direction="column"
        >
          <Badge
            className="huanbi_yestoday"
            color={'rgba(0,0,0,0)'}
            size="default"
            offset={[50, 0]}
            count={circle_yestoday_count}
            overflowCount={999}
          >
            <div className="title_count">
              <span>总用户量</span>
            </div>
          </Badge>
          <div className="title_count">
            <span>
              <Liquid
                className="Liquid_hidePercent"
                percent={countNumber / 1000000}
                wave={{
                  length: 128,
                }}
                outline={{
                  border: 4,
                }}
                pattern={{
                  type: 'line',
                }}
                style={{
                  color: '#fff',
                  fontSize: '120px',
                }}
                statistic={{
                  title: {
                    content: JSON.stringify(countNumber),
                    // @ts-ignore
                    // customHtml: (container, view, datum) => {
                    //   return <CountUp
                    //     delay={1}
                    //     end={countNumber}
                    //     duration={1}
                    //     redraw={true}
                    //     start={0}
                    //     preserveValue={true}
                    //   />
                    // },

                    style: {
                      transform: `translate(-50%, -50%)`,
                    },
                  },
                  content: {},
                }}
              />
            </span>
          </div>
        </ProCard>

        <ProCard
          ghost
          className="cardItem"
          colSpan={12}
          // style={{ backgroundColor: '#2F2963', borderRadius: '24px' }}
          layout="center"
          direction="column"
        >
          <Badge
            color={'rgba(0,0,0,0)'}
            size="default"
            offset={[80, 0]}
            count={circle_yestoday_dau}
            overflowCount={999999999}
          >
            <div className="title_count">
              <span>
                今日<span style={{ fontWeight: 'bolder' }}>DAU</span>
              </span>
            </div>
          </Badge>
          <div className="title_count">
            <Liquid
              className="Liquid_hidePercent"
              percent={dau / 100000}
              wave={{
                length: 128,
              }}
              outline={{
                border: 4,
              }}
              pattern={{
                type: 'line',
              }}
              style={{
                color: '#fff',
                fontSize: '120px',
              }}
              statistic={{
                title: {
                  content: JSON.stringify(dau),
                  // @ts-ignore
                  // customHtml: (container, view, datum) => {
                  //   return <CountUp
                  //     delay={1}
                  //     end={dau}
                  //     duration={1}
                  //     redraw={true}
                  //     preserveValue={true}
                  //   />
                  // },
                  // customHtml: (container, view, datum) => {
                  //   return (
                  //     <>

                  //     </>
                  //   )
                  // },

                  style: {
                    transform: `translate(-50%, -50%)`,
                  },
                },
                content: {

                },
              }}
            />
          </div>
          <div className="plots_overview">{/* <PlotsLine /> */}</div>
        </ProCard>
      </ProCard>
    </>
  );
}

export default BaseData;
