import moment from 'moment';
import { json, Request, Response } from 'express';
import type { AnalysisData, RadarData, DataItem, ExchangeData } from './data.d';

// mock data
const visitData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '食用酒水',
    y: 188,
  },
  {
    x: '个护健康',
    y: 344,
  },
  {
    x: '服饰箱包',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  const date = moment(new Date().getTime() + 1000 * 60 * 30 * i).format('HH:mm');
  offlineChartData.push({
    date,
    type: '客流量',
    value: Math.floor(Math.random() * 100) + 10,
  });
  offlineChartData.push({
    date,
    type: '支付笔数',
    value: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: RadarData[] = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

const getFakeChartData: AnalysisData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};

const datagit: GithubIssueItem = {
  "id": 624748504,
  "number": 6689,
  "title": "🐛 [BUG]yarn install命令 antd2.4.5会报错",
  "labels": [
    {
      "name": "bug",
      "color": "error"
    }
  ],
  "state": "open",
  "locked": false,
  "comments": 1,
  "created_at": "2020-05-26T09:42:56Z",
  "updated_at": "2020-05-26T10:03:02Z",
  "closed_at": null,
  "author_association": "NONE",
  "user": "chenshuai2144",
  "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
}

const GithubIssueItemData =
{
  data: [
    {
      "id": 624748504,
      "number": 6689,
      "title": "🐛 [BUG]yarn install命令 antd2.4.5会报错",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 624691229,
      "number": 6688,
      "title": "🐛 [BUG]无法创建工程npm create umi",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 0,
      "created_at": "2020-05-26T08:19:22Z",
      "updated_at": "2020-05-26T08:19:22Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 624674790,
      "number": 6685,
      "title": "🧐 [问题] build 后还存在 es6 的代码（Umi@2.13.13）",
      "labels": [
        {
          "name": "question",
          "color": "success"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 0,
      "created_at": "2020-05-26T07:54:25Z",
      "updated_at": "2020-05-26T07:54:25Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 624620220,
      "number": 6683,
      "title": "2.3.1版本如何在业务页面修改头部状态",
      "labels": [
        {
          "name": "question",
          "color": "success"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 2,
      "created_at": "2020-05-26T05:58:24Z",
      "updated_at": "2020-05-26T07:17:39Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 624592471,
      "number": 6682,
      "title": "hideChildrenInMenu设置后，子路由找不到了",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 2,
      "created_at": "2020-05-26T04:25:59Z",
      "updated_at": "2020-05-26T08:00:51Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 624556297,
      "number": 6680,
      "title": "🐛 [BUG]Umi UI 添加多个空白页，就会出错！把空白页都变成选中状态！",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 0,
      "created_at": "2020-05-26T02:13:47Z",
      "updated_at": "2020-05-26T02:13:47Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 624415799,
      "number": 6678,
      "title": "🐛 [BUG]第一次载入页面，菜单仅图标时，图标没有居中",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-25T17:34:21Z",
      "updated_at": "2020-05-26T03:05:55Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 624300343,
      "number": 6675,
      "title": "build(deps-dev): bump eslint from 6.8.0 to 7.1.0",
      "labels": [
        {
          "name": "dependencies",
          "color": "default"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 0,
      "created_at": "2020-05-25T13:27:09Z",
      "updated_at": "2020-05-25T13:27:10Z",
      "closed_at": null,
      "author_association": "CONTRIBUTOR",
      "pull_request": {
        "url": "https://api.github.com/repos/ant-design/ant-design-pro/pulls/6675",
        "html_url": "https://github.com/ant-design/ant-design-pro/pull/6675",
        "diff_url": "https://github.com/ant-design/ant-design-pro/pull/6675.diff",
        "patch_url": "https://github.com/ant-design/ant-design-pro/pull/6675.patch"
      },
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 624130987,
      "number": 6674,
      "title": "🧐 [问题] V4版本如何使用第三方的enhanceReduxMiddleware",
      "labels": [
        {
          "name": "question",
          "color": "success"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 3,
      "created_at": "2020-05-25T08:20:31Z",
      "updated_at": "2020-05-26T07:37:47Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 623677811,
      "number": 6663,
      "title": "🐛 [BUG] 官网预览页面，第一次点击二级菜单，其父级菜单会收起，之后再次点击二级菜单，父菜单正常",
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-23T15:00:49Z",
      "updated_at": "2020-05-24T23:47:37Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
      "labels": [
        {
          "name": "question",
          "color": "processing"
        }
      ]
    },
    {
      "id": 623565176,
      "number": 6662,
      "title": "🧐 [问题] 从自建 block 仓库下载区块报错。",
      "labels": [
        {
          "name": "question",
          "color": "success"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 0,
      "created_at": "2020-05-23T02:46:12Z",
      "updated_at": "2020-05-23T03:03:26Z",
      "closed_at": null,
      "author_association": "CONTRIBUTOR",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 622902420,
      "number": 6652,
      "title": "🧐 [问题] fetchCurrent接口报错，退出登录页，第一次点击登录，SecurityLayout不渲染，导致需要点击两次",
      "labels": [
        {
          "name": "question",
          "color": "success"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 0,
      "created_at": "2020-05-22T02:20:27Z",
      "updated_at": "2020-05-22T02:21:01Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 622348582,
      "number": 6644,
      "title": "🐛 [BUG] V5 左侧栏收缩时，点击图标无效。",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 0,
      "created_at": "2020-05-21T08:45:13Z",
      "updated_at": "2020-05-21T08:45:13Z",
      "closed_at": null,
      "author_association": "CONTRIBUTOR",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 622326186,
      "number": 6643,
      "title": "🧐 [问题]不知道有没有大佬将这个模板迁移至Electron的例子",
      "labels": [
        {
          "name": "question",
          "color": "success"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 0,
      "created_at": "2020-05-21T08:04:36Z",
      "updated_at": "2020-05-21T08:04:36Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 622290419,
      "number": 6642,
      "title": "npm run start 为什么不能打开浏览器",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 3,
      "created_at": "2020-05-21T06:51:22Z",
      "updated_at": "2020-05-24T23:51:59Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 622267649,
      "number": 6641,
      "title": "🧐 [问题]在重新npm install后运行npm start报出一些less找不到，但项目可以正常运行起来",
      "labels": [
        {
          "name": "question",
          "color": "success"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 3,
      "created_at": "2020-05-21T05:56:36Z",
      "updated_at": "2020-05-22T01:38:30Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 622207575,
      "number": 6639,
      "title": "🐛 [BUG]错误通知：http code 200",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 4,
      "created_at": "2020-05-21T02:47:35Z",
      "updated_at": "2020-05-24T16:27:00Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 621402301,
      "number": 6630,
      "title": "🐛 [BUG]线上预览项目好多布局错乱，不知道是antd的锅还是啥原因",
      "labels": [
        {
          "name": "In Progress",
          "color": "processing"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 8,
      "created_at": "2020-05-20T02:02:33Z",
      "updated_at": "2020-05-20T08:13:24Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 621388407,
      "number": 6629,
      "title": "🐛 [BUG] umi 偶尔出现没有导出成员",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 19,
      "created_at": "2020-05-20T01:20:55Z",
      "updated_at": "2020-05-24T23:53:03Z",
      "closed_at": null,
      "author_association": "CONTRIBUTOR",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 620820348,
      "number": 6624,
      "title": "🐛 [BUG]请问大佬，为什么无论怎么选择，都无法切换成JS语言，怎么下都是TS,求解答",
      "labels": [
        {
          "name": "bug",
          "color": "error"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 6,
      "created_at": "2020-05-19T09:22:47Z",
      "updated_at": "2020-05-25T03:50:54Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
  ],
  "page": 1,
  "success": true,
  "total": 30
}
const getFakeChartData2: ExchangeData = {
  data: GithubIssueItemData.data,
  page: GithubIssueItemData.page,
  success: GithubIssueItemData.success,
  total: GithubIssueItemData.total
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};


const fakeChartData2 = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData2,
  });
};

export default {
  'GET  /api/fake_analysis_chart_data': fakeChartData,
  'GET  /api/fake_analysis_chart_data2': fakeChartData2,
};
