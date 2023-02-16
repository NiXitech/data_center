/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
import type { HttpRequestParams } from "@/types/types";
import { message } from "antd";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import _ from "lodash";
import { history } from "umi";

// import { LoginUserCookie } from "../cooike/cookie";
// import { SStorage } from "../cooike/storage";
import { LoginUserCookie } from "../cooike/cookie";

// 设置默认超时时间
axios.defaults.timeout = 1000 * 60 * 2;
axios.defaults.baseURL = API_REQUEST_URL;

/**
 * http request 拦截器
 */

axios.interceptors.request.use(
  (config: any) => {
    if (config.url !== "/user/v1/login-register") {
      // const cookies = LoginUserCookie().token;
      // cookies = SStorage.get("accessToken");
      // config.data = JSON.stringify(config.data);
      if (config.url?.indexOf("/wallet") !== -1) {
        //config.url?.indexOf('/wallet') !== -1
        config.headers = {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYTVkNjA2OWItNTM0MC00YzFmLTg1ZjEtOGVmYjFlNTFhN2RiIiwiZGlkIjoiNzZkZGUyZDM4MWQ0NGFjZGI3MWQ0OTYzYmI5ZGViN2UiLCJkdHlwZSI6ImlvcyIsImFwcCI6Inh5ei55b3VnYWwubmJyaWVsIiwiZXhwIjoxNjc4NjA0Mzk2LCJpYXQiOjE2NzYwMTIzOTZ9.FqSyYGSnxgAWzAHHSkXFyg9uN95KIUTbi1XoIHSXb3k",
        };
        if (config.url?.indexOf("with") !== -1) {
          config.headers = {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2U2ZDVmOTQtNmI1Ni00MGI5LTlkYmUtYzUyMTU1YTFkMTFjIiwiZGlkIjoiaWRiMTdlZDFhOS02MjZlLTQ1ZjEtOWY4MS1iYWE1NmI2MjhkZmUiLCJkdHlwZSI6ImFuZHJvaWMiLCJhcHAiOiJjb20ucmVhbC5pb3MiLCJleHAiOjE2NzkxMDkxMDYsImlhdCI6MTY3NjUxNzEwNn0.8WJXBG1BfZapJgdEiEO0b3eWDlDEpRW2QT2hfgoxYbw",
          };
        }
        // chatgpt
        if (config.url?.indexOf("/completions") !== -1) {
          config.headers = {
            "access-control-allow-origin": "*",
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          };
        }
      } else {
        // console.log("rolazheng95@163.com", cookies);
        config.headers = {
          "Content-Type": "application/json",
          app: "xyz.yougal.nbriel",
          "device-type": "ios",
          "device-id": "3013f55522044e37899c13fc57adcb2d",
          "app-version": "1.0.0",
          postman: 1,
          "x-req-encrypt": "0",
          // Authorization:
          //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYTVkNjA2OWItNTM0MC00YzFmLTg1ZjEtOGVmYjFlNTFhN2RiIiwiZGlkIjoiNzZkZGUyZDM4MWQ0NGFjZGI3MWQ0OTYzYmI5ZGViN2UiLCJkdHlwZSI6ImlvcyIsImFwcCI6Inh5ei55b3VnYWwubmJyaWVsIiwiZXhwIjoxNjc4NjA0Mzk2LCJpYXQiOjE2NzYwMTIzOTZ9.FqSyYGSnxgAWzAHHSkXFyg9uN95KIUTbi1XoIHSXb3k",
          // Authorization: `Bearer ${cookies || ""}`,
        };
      }
    }
    // else if(config.url && config.url.indexOf('/data-center/v1') > -1) {
    //   // https://sandbox.api.nxglabs.io/data-center/v1/health'
    // }

    return config;
  },
  (error) => {
    if (error.response.data.code === 401) {
      history.push("/user/login");
    }
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode === 2) {
      console.log("过期");
    }
    if (response.data.code === 401) {
      history.push("/user/login");
      return response;
    }

    return response;
  },
  (error) => {
    console.log("请求出错: ", error);
    return Promise.reject(error);
  }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url: string, params = {}, config: AxiosRequestConfig = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params, ...config })
      .then((response) => {
        if (response.data.code === 200) {
          resolve(response.data);
        } else {
          message.error(response.data.error.msg);
          reject(response.data.error.msg);
        }
      })
      .catch((error) => {
        console.log("%c🀀 error", "color: #00a3cc; font-size: 20px;", error);
        reject(error);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url: string, data: any, config: AxiosRequestConfig = {}) {
  return new Promise((resolve, reject) => {
    if (data) {
      let newParams = _.cloneDeep(data);
      Object.keys(newParams).forEach((ele: any) => {
        if (typeof newParams[ele] === "string") {
          newParams[ele] = newParams[ele].trim();
        }
      });
      data = newParams;
    }
    let params = { data };
    if (url === "/upload/v1/photo") {
      params = data;
    }
    if (url.indexOf("/com") !== -1) {
      axios.post(url, params.data, config).then(
        (response) => {
          //关闭进度条
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
    } else {
      axios.post(url, params, config).then(
        (response) => {
          //关闭进度条
          if (response.data.code === 200) {
            resolve(response.data);
          } else {
            if (response.data.error) {
              message.error(response.data.error.msg);
              reject(response.data.error.msg);
            } else {
              message.error(response.data.err_msg);
              reject(response.data.err_msg);
            }
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data, config).then(
      (response) => {
        if (response.data.code === 200) {
          resolve(response.data);
        } else {
          message.error(response.data.error.msg);
          reject(response.data.error.msg);
        }
      },
      (err) => {
        msag(err);
        reject(err);
      }
    );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(
  url: string,
  data: any = {},
  config: AxiosRequestConfig = {}
) {
  return new Promise((resolve, reject) => {
    axios.put(url, data, config).then(
      (response) => {
        if (response.data.code === 200) {
          resolve(response.data);
        } else {
          message.error(response.data.error.msg);
          reject(response.data.error.msg);
        }
      },
      (err) => {
        msag(err);
        reject(err);
      }
    );
  });
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function Axiosdelete(url: string, config: AxiosRequestConfig = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, config).then(
      (response) => {
        if (response.data.code === 200) {
          resolve(response.data);
        } else {
          message.error(response.data.err_msg);
          reject(response.data.err_msg);
        }
      },
      (err) => {
        msag(err);
        reject(err);
      }
    );
  });
}

//统一接口处理，返回数据
export default function (params: HttpRequestParams) {
  return new Promise((resolve, reject) => {
    switch (params.method) {
      case "get":
        get(params.url, params.params, params.config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error);
          });
        break;
      case "post":
        post(params.url, params.params, params.config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error);
          });
        break;
      case "put":
        put(params.url, params.params, params.config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error);
          });
        break;
      case "delete":
        Axiosdelete(params.url, params.config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error);
          });
      default:
        break;
    }
  });
}

//失败提示
function msag(err: any) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        alert(err.response.data.error.details);
        break;
      case 401:
        alert("未授权，请登录");
        break;

      case 403:
        alert("拒绝访问");
        break;

      case 404:
        alert("请求地址出错");
        break;

      case 408:
        alert("请求超时");
        break;

      case 500:
        alert("服务器内部错误");
        break;

      case 501:
        alert("服务未实现");
        break;

      case 502:
        alert("网关错误");
        break;

      case 503:
        alert("服务不可用");
        break;

      case 504:
        alert("网关超时");
        break;

      case 505:
        alert("HTTP版本不受支持");
        break;
      default:
    }
  }
}
