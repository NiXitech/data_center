// https://umijs.org/config/
import { defineConfig } from "umi";

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    "react-dev-inspector/plugins/umi/react-inspector",
  ],
  define: {
    API_REQUEST_URL: "https://sandbox.api.nxglabs.io",
    Authorization_Token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZWJmMmZkZjMtY2RmMy00MmZkLWE3ZmEtODg3NTE2YzRhM2Y1IiwiZGlkIjoiMzAxM2Y1NTUyMjA0NGUzNzg5OWMxM2ZjNTdhZGNiMmQiLCJkdHlwZSI6ImlvcyIsImFwcCI6Inh5ei55b3VnYWwubmJyaWVsIiwiZXhwIjoxNjc5MTQwMjg5LCJpYXQiOjE2NzY1NDgyODl9.2umn3Ls0w1jAHknF6GvtojsImnvRyrtKD1ocX1PslDk",
  },
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
});
