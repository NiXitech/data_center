/*
 * @Author: ai.zhang
 * @Date: 2023-01-05 19:09:19
 * @LastEditors: ai.zhang
 * @Description:
 */
import http from './http';

/**
 * 获取首页列表
 */
export async function login(params: { email: string; pass_code: string }) {
  return new Promise((resolve, reject) => {
    http({ method: 'post', url: '/user/v1/login-register', params }).then(
      (res) => {
        resolve(res);
      },
      (error) => {
        console.log('网络异常~', error);
        reject(error);
      },
    );
  });
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser() {
  return {
    success: true,
    data: {
      name: 'Serati Ma',
      avatar: './logo.png',
    },
  };
}

/**
 * 获取lens列表
 */
export async function getFeedsList(params: { offset: number; batch_id?: string }) {
  return new Promise((resolve, reject) => {
    http({ method: 'get', url: '/feed/v1', params }).then(
      (res) => {
        resolve(res);

        return res;
      },
      (error) => {
        console.log('网络异常~', error);
        reject(error);
      },
    );
  });
}

/**
 * 获取lens列表
 */
export async function getFeedsBanned(id: string) {
  const url = `/feed/v1/${id}/banned`;
  return new Promise((resolve, reject) => {
    http({ method: 'post', url }).then(
      (res) => {
        resolve(res);

        return res;
      },
      (error) => {
        console.log('网络异常~', error);
        reject(error);
      },
    );
  });
}

/**
 * 获取feeds接口
 */
export async function getFeedList(params: { offset: number; status: number }) {
  // status: 0:未审批, 1:已通过, 2:已拒绝
  const url = `/feed/v1/admin/feed`;
  return new Promise((resolve, reject) => {
    http({ method: 'post', url, params }).then(
      (res) => {
        resolve(res);

        return res;
      },
      (error) => {
        console.log('网络异常~', error);
        reject(error);
      },
    );
  });
}

/**
 * 更新feed状态接口
 */
export async function updateFeedStatus(params: { feeds: [] }) {
  const url = `/feed/v1/admin/feed/status`;
  return new Promise((resolve, reject) => {
    http({ method: 'post', url, params }).then(
      (res) => {
        resolve(res);

        return res;
      },
      (error) => {
        console.log('网络异常~', error);
        reject(error);
      },
    );
  });
}

/**
 * 更新feed人工打分接口
 */
export async function updateFeedScore(params: { feeds: [] }) {
  const url = `/feed/v1/admin/feed/score`;
  return new Promise((resolve, reject) => {
    http({ method: 'post', url, params }).then(
      (res) => {
        resolve(res);

        return res;
      },
      (error) => {
        console.log('网络异常~', error);
        reject(error);
      },
    );
  });
}

// 更新用户
export async function updateUser(params: { user_id: string; quanlity_user: number }) {
  const url = `/feed/v1/admin/user`;
  return new Promise((resolve, reject) => {
    http({ method: 'post', url, params }).then(
      (res) => {
        resolve(res);

        return res;
      },
      (error) => {
        console.log('网络异常~', error);
        reject(error);
      },
    );
  });
}

/**
 * 获取lens列表
 */
export async function getBannerList() {
  return new Promise((resolve, reject) => {
    http({ method: "get", url: "/user/v1/content/banner" }).then(
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

export async function UploadImg(params: { file: string }) {
  return new Promise((resolve, reject) => {
    http({ method: "post", url: "/upload/v1/photo", params }).then(
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

/** 查询交易所所有数据 */
export async function getExchange() {
  return new Promise((resolve, reject) => {
    http({ method: "get", url: "/wallet/v1/exchange/backend" }).then(
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

/** 编辑交易所数据数据 */
export async function editExchange(params: object) {
  return new Promise((resolve, reject) => {
    http({ method: "post", url: "/wallet/v1/exchange/backend", params }).then(
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

/** 编辑交易所数据数据 */
export async function delExchange(params: object) {
  return new Promise((resolve, reject) => {
    http({ method: "delete", url: "/wallet/v1/exchange/backend", params }).then(
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

