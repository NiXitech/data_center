// https://umijs.org/config/
import { defineConfig } from "umi";

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    "react-dev-inspector/plugins/umi/react-inspector",
  ],
  define: {
    API_REQUEST_URL: "https://sandbox.api.nxglabs.io",
  },
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
});
