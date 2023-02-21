import { Pie } from "@ant-design/charts";

const PieView = (props: any): JSX.Element => {
  const { data } = props

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      // type: 'inner',
      offset: '-30%',
      // content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return (
    <>
      <Pie {...config} />
    </>
  );
}

export default PieView;
