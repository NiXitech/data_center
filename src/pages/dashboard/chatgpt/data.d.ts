import { DataItem } from '@antv/g2plot/esm/interface/config';

export { DataItem };

export interface VisitDataType {
  x: string;
  y: number;
}

export type SearchDataType = {
  index: number;
  keyword: string;
  count: number;
  range: number;
  status: number;
};

export type OfflineDataType = {
  name: string;
  cvr: number;
};

export interface OfflineChartData {
  date: number;
  type: number;
  value: number;
}

export type RadarData = {
  name: string;
  label: string;
  value: number;
};

export type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
      name: string;
      color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

export interface AnalysisData {
  visitData: DataItem[];
  visitData2: DataItem[];
  salesData: DataItem[];
  searchData: DataItem[];
  offlineData: OfflineDataType[];
  offlineChartData: DataItem[];
  salesTypeData: DataItem[];
  salesTypeDataOnline: DataItem[];
  salesTypeDataOffline: DataItem[];
  radarData: RadarData[];
}

export interface ExchangeData {
  data: any,
  page: number,
  success: boolean,
  total: number
}
