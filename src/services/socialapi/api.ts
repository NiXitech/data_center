/*
 * @Author: Leiyize
 * @Date: 2023-02-17
 * @LastEditors: Leiyize
 * @Description:
 */
import http from './http';

/** chatgpt */
export async function chatgpt(params: object) {
  return new Promise((resolve, reject) => {
    http({ method: "post", url: "/v1/completions", params: {prompt: params?.prompt || '', model: 'text-davinci-003', max_tokens: 2000} }).then(
      (res) => {
        resolve(res);
        return res;
      },
      (error) => {
        console.log("网络异常~", error);
        reject(error);
      }
    );
  });
}
