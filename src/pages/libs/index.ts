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

function compareDate(a: { date: string | number | Date; }, b: { date: string | number | Date; }) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA < dateB) {
    return -1;
  }
  if (dateA > dateB) {
    return 1;
  }
  return 0;
}


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
  const sortedData = data.sort(compareDate);
  return sortedData;
};

// 最近30天数据
export const getLast30DaysData = (sortedData: any[]) => {
  const today = new Date();
  const last30Days = new Date(today.setDate(today.getDate() - 30));
  const last30DaysData = sortedData.filter((ele: any) => new Date(ele.date) >= last30Days);
  return last30DaysData;
}

