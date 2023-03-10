export default [
  {
    path: "/",
    redirect: "/dashboard/overview",
  },
  {
    path: "/user",
    layout: false,
    routes: [
      {
        path: "/user/login",
        layout: false,
        name: "login",
        component: "./user/Login",
      },
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        name: "register-result",
        icon: "smile",
        path: "/user/register-result",
        component: "./user/register-result",
      },
      {
        name: "register",
        icon: "smile",
        path: "/user/register",
        component: "./user/register",
      },
      {
        name: "概览页",
        icon: "smile",
        path: "/user/overview",
        component: "./dashboard/overview",
      },
      {
        component: "404",
      },
    ],
  },
  {
    path: "/dashboard",
    name: "数据看板",
    icon: "dashboard",
    routes: [
      {
        path: "/dashboard",
        redirect: "/dashboard/analysis",
      },
      // {
      //   name: "分析页",
      //   icon: "smile",
      //   path: "/dashboard/analysis",
      //   component: "./dashboard/analysis",
      // },
      // {
      //   name: "监控页",
      //   icon: "smile",
      //   path: "/dashboard/monitor",
      //   component: "./dashboard/monitor",
      // },
      {
        name: "概览页",
        icon: "smile",
        path: "/dashboard/overview",
        component: "./dashboard/overview",
      },
      {
        name: "交易所",
        icon: "smile",
        path: "/dashboard/exchange",
        component: "./dashboard/exchange",
      },
      {
        name: "提现订单处理",
        icon: "smile",
        path: "/dashboard/withdraw",
        component: "./dashboard/withdraw",
      },
      {
        name: "AI生图",
        icon: "smile",
        path: "/dashboard/chatgpt",
        component: "./dashboard/chatgpt",
      },
      // {
      //   name: "工作台",
      //   icon: "smile",
      //   path: "/dashboard/workplace",
      //   component: "./dashboard/workplace",
      // },
    ],
  },
  // {
  //   path: '/form',
  //   icon: 'form',
  //   name: 'form',
  //   routes: [
  //     {
  //       path: '/form',
  //       redirect: '/form/basic-form',
  //     },
  //     {
  //       name: 'basic-form',
  //       icon: 'smile',
  //       path: '/form/basic-form',
  //       component: './form/basic-form',
  //     },
  //     {
  //       name: 'step-form',
  //       icon: 'smile',
  //       path: '/form/step-form',
  //       component: './form/step-form',
  //     },
  //     {
  //       name: 'advanced-form',
  //       icon: 'smile',
  //       path: '/form/advanced-form',
  //       component: './form/advanced-form',
  //     },
  //   ],
  // },
  // {
  //   path: '/list',
  //   icon: 'table',
  //   name: 'list',
  //   routes: [
  //     {
  //       path: '/list/search',
  //       name: 'search-list',
  //       component: './list/search',
  //       routes: [
  //         {
  //           path: '/list/search',
  //           redirect: '/list/search/articles',
  //         },
  //         {
  //           name: 'articles',
  //           icon: 'smile',
  //           path: '/list/search/articles',
  //           component: './list/search/articles',
  //         },
  //         {
  //           name: 'projects',
  //           icon: 'smile',
  //           path: '/list/search/projects',
  //           component: './list/search/projects',
  //         },
  //         {
  //           name: 'applications',
  //           icon: 'smile',
  //           path: '/list/search/applications',
  //           component: './list/search/applications',
  //         },
  //       ],
  //     },
  //     {
  //       path: '/list',
  //       redirect: '/list/table-list',
  //     },
  //     {
  //       name: 'table-list',
  //       icon: 'smile',
  //       path: '/list/table-list',
  //       component: './list/table-list',
  //     },
  //     {
  //       name: 'basic-list',
  //       icon: 'smile',
  //       path: '/list/basic-list',
  //       component: './list/basic-list',
  //     },
  //     {
  //       name: 'card-list',
  //       icon: 'smile',
  //       path: '/list/card-list',
  //       component: './list/card-list',
  //     },
  //   ],
  // },
  // {
  //   path: '/profile',
  //   name: 'profile',
  //   icon: 'profile',
  //   routes: [
  //     {
  //       path: '/profile',
  //       redirect: '/profile/basic',
  //     },
  //     {
  //       name: 'basic',
  //       icon: 'smile',
  //       path: '/profile/basic',
  //       component: './profile/basic',
  //     },
  //     {
  //       name: 'advanced',
  //       icon: 'smile',
  //       path: '/profile/advanced',
  //       component: './profile/advanced',
  //     },
  //   ],
  // },
  // {
  //   name: 'result',
  //   icon: 'CheckCircleOutlined',
  //   path: '/result',
  //   routes: [
  //     {
  //       path: '/result',
  //       redirect: '/result/success',
  //     },
  //     {
  //       name: 'success',
  //       icon: 'smile',
  //       path: '/result/success',
  //       component: './result/success',
  //     },
  //     {
  //       name: 'fail',
  //       icon: 'smile',
  //       path: '/result/fail',
  //       component: './result/fail',
  //     },
  //   ],
  // },
  // {
  //   name: 'exception',
  //   icon: 'warning',
  //   path: '/exception',
  //   routes: [
  //     {
  //       path: '/exception',
  //       redirect: '/exception/403',
  //     },
  //     {
  //       name: '403',
  //       icon: 'smile',
  //       path: '/exception/403',
  //       component: './exception/403',
  //     },
  //     {
  //       name: '404',
  //       icon: 'smile',
  //       path: '/exception/404',
  //       component: './exception/404',
  //     },
  //     {
  //       name: '500',
  //       icon: 'smile',
  //       path: '/exception/500',
  //       component: './exception/500',
  //     },
  //   ],
  // },
  // {
  //   name: 'account',
  //   icon: 'user',
  //   path: '/account',
  //   routes: [
  //     {
  //       path: '/account',
  //       redirect: '/account/center',
  //     },
  //     {
  //       name: 'center',
  //       icon: 'smile',
  //       path: '/account/center',
  //       component: './account/center',
  //     },
  //     {
  //       name: 'settings',
  //       icon: 'smile',
  //       path: '/account/settings',
  //       component: './account/settings',
  //     },
  //   ],
  // },
  // {
  //   name: 'editor',
  //   icon: 'highlight',
  //   path: '/editor',
  //   routes: [
  //     {
  //       path: '/editor',
  //       redirect: '/editor/flow',
  //     },
  //     {
  //       name: 'flow',
  //       icon: 'smile',
  //       path: '/editor/flow',
  //       component: './editor/flow',
  //     },
  //     {
  //       name: 'mind',
  //       icon: 'smile',
  //       path: '/editor/mind',
  //       component: './editor/mind',
  //     },
  //     {
  //       name: 'koni',
  //       icon: 'smile',
  //       path: '/editor/koni',
  //       component: './editor/koni',
  //     },
  //   ],
  // },
  {
    component: "404",
  },
]


// [
//   {
//     path: '/user',
//     layout: false,
//     routes: [
//       { name: '登录', path: '/user/login', component: './user/Login' },
//       { component: './404' },
//     ],
//   },
//   { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
//   {
//     path: '/admin',
//     name: '管理页',
//     icon: 'crown',
//     access: 'canAdmin',
//     component: './Admin',
//     routes: [
//       { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Welcome' },
//       { component: './404' },
//     ],
//   },
//   { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
//   { path: '/', redirect: '/welcome' },
//   { component: './404' },
// ];
