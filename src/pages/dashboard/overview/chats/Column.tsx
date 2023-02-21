import { Column } from "@ant-design/charts";

const ColumnView = (props: any): JSX.Element => {
  const { data, Field, setting } = props;
  console.log('%c🀀 data', 'color: #aa00ff; font-size: 20px;', data);

  const config = {
    height: 200,
    data,
    xField: Field.x,
    yField: Field.y,
    isGroup: setting && setting.isGroup ? setting.isGroup : false,
    seriesField: setting && setting.seriesField ? setting.seriesField : '',
    dodgePadding: 2,
    xAxis: {
      // type: 'timeCat',
      tickCount: 8,
      line: {
        style: {
          stroke: '#fff',
          lineWidth: 1,
          lineDash: [4, 5],
          strokeOpacity: 1,
          shadowColor: 'black',
          shadowBlur: 10,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          cursor: 'pointer',
          color: '#fff'
        }
      }

    },
    yAxis: {

      grid: {
        line: {
          style: {
            stroke: '#fff',
            lineWidth: 1,
            lineDash: [4, 5],
            strokeOpacity: 1,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            cursor: 'pointer',
            color: '#fff'
          }
        }
      }
    },
    // label: {
    //   // 可手动配置 label 数据标签位置
    //   // position: 'middle',
    //   // 'top', 'bottom', 'middle',
    //   // 配置样式
    //   style: {
    //     fill: '#FFFFFF',
    //     opacity: 0.6,
    //   },
    // },
    label: {
      // 可手动配置 label 数据标签位置
      // position: 'middle',
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
    // xAxis: {
    //   label: {
    //     autoHide: true,
    //     autoRotate: false,
    //   },
    // },
  };

  return (
    <>
      <Column {...config} />
    </>
  );
}

export default ColumnView;
