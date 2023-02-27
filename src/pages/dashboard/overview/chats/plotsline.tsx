import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { ThunderboltTwoTone } from '@ant-design/icons';

const PlotsLine = (props: any) => {

  const { data, Field, setting } = props;

  const config = {
    height: 200,
    data,
    xField: Field.x,
    yField: Field.y,
    seriesField: setting && setting.seriesField ? setting.seriesField : '',
    xAxis: {
      type: 'category',
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
            stroke: '#000',
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

    autoFit: true,
    smooth: true,
    // label: {
    //   style: {
    //     fill: '#fff',
    //     opacity: 0.8,
    //     fontSize: 8
    //   },
    // },
    // point: {
    //   size: 3,
    //   shape: 'custom-point',
    //   style: {
    //     fill: '#E3B23C',
    //     stroke: '#E3B23C40',
    //     lineWidth: 6,
    //   },
    // },
    tooltip: {
      showMarkers: false,
    },

    interactions: [
      {
        type: 'custom-marker-interaction',
      },
    ],
    colorField: 'type',
    color: ['#04A777', '#D90368', '#F3C969'],
  };
  return <Line {...config} />;
};

export default PlotsLine;
