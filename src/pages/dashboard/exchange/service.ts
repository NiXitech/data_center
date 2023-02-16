import { request } from 'umi';
import type { AnalysisData, ExchangeData } from './data';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('/api/fake_analysis_chart_data');
}

export async function fakeChartData2(): Promise<{ data: ExchangeData }> {
  return request('/api/fake_analysis_chart_data2');
  // return request('/wallet/v1/exchange/backend',{
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWEzNDkwOTAtOTY5Ni00ZWMzLWJlNTMtOGZlYTY3ZGM0OGM5IiwiZGlkIjoiNzZkZGUyZDM4MWQ0NGFjZGI3MWQ0OTYzYmI5ZGViN2UiLCJkdHlwZSI6ImlvcyIsImFwcCI6Inh5ei55b3VnYWwubmJyaWVsIiwiZXhwIjoxNjc2NjEyOTgwLCJpYXQiOjE2NzQwMjA5ODB9.qRjW6yDg3IR720XHYlb_gVLOAVKH53fHaObzDcXXA2k'
  //   }
  // });
}
