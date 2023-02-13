import { Settings as LayoutSettings } from "@ant-design/pro-layout";

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = 
// {
//   "navTheme": "realDark",
//   "primaryColor": "#1890ff",
//   "layout": "top",
//   "contentWidth": "Fluid",
//   "fixedHeader": false,
//   "fixSiderbar": true,
//   "pwa": false,
//   "headerHeight": 48,
//   "splitMenus": false,
//   "footerRender": false,
//   "menuRender": false,
//   "menuHeaderRender": false
// };

{
  navTheme: "light",
  // 拂晓蓝
  primaryColor: "#1890ff",
  layout: "mix",
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: "Data Center",
  pwa: false,
  logo: "/logo_icon.png",
  iconfontUrl: "",
};

export default Settings;
