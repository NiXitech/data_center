import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { ThunderboltTwoTone } from '@ant-design/icons';

const PlotsLine = (props: any) => {
  // const data = [
  //   {
  //     year: '1991',
  //     value: 3,
  //   },
  //   {
  //     year: '1992',
  //     value: 4,
  //   },
  //   {
  //     year: '1993',
  //     value: 3.5,
  //   },
  //   {
  //     year: '1994',
  //     value: 5,
  //   },
  //   {
  //     year: '1995',
  //     value: 4.9,
  //   },
  //   {
  //     year: '1996',
  //     value: 6,
  //   },
  //   {
  //     year: '1997',
  //     value: 7,
  //   },
  //   {
  //     year: '1998',
  //     value: 9,
  //   },
  //   {
  //     year: '1999',
  //     value: 13,
  //   },
  // ];

  const { data } = props;

  const config = {
    data,
    xField: 'date',
    yField: 'count',
    title: {
      text: '111',
      position: 'center',
      style: {
        color: '#fff'
      }
    },
    xAxis: {
      type: 'timeCat',
      tickCount: 8,
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

    autoFit: true,
    smooth: true,
    label: {
      style: {
        fill: '#fff',
        opacity: 0.8,
        fontSize: 8
      },
    },
    point: {
      size: 3,
      shape: 'custom-point',
      style: {
        fill: '#E3B23C',
        stroke: '#E3B23C40',
        lineWidth: 6,
      },
    },
    tooltip: {
      showMarkers: false,
    },

    interactions: [
      {
        type: 'custom-marker-interaction',
      },
    ],
    color: '#04A777',
  };
  return <Line {...config} />;
};

export default PlotsLine;
