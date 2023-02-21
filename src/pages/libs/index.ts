import _ from "lodash";

export const formattedData = (list: [], xKey: string, yKey: string) => {
  const data: any[] = [];
  list.forEach((ele: any) => {
    ele[xKey] = JSON.stringify(ele[xKey]);
    ele[yKey] = Number(ele[yKey]);
    data.push(ele);
  });
  return data;
};

export const retentionData = (list: []) => {
  const data: any[] = [];
  list.forEach((ele: any) => {
    for (let i = 1; i <= 3; i++) {
      const params = {
        date: ele.date,
        name: `retention_d${i}`,
        value: ele[`retention_d${i}`],
      };
      data.push(params);
    }
  });
  return data;
};
