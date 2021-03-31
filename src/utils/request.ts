/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';

export const empNum: { userid: undefined | string } = {
  userid: undefined,
};

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '访问资源不存在',
  401: '未授权，请重新登录',
  403: '权限不足，禁止访问',
  404: '访问资源不存在',
  406: '访问资源不存在',
  410: '访问资源不存在',
  422: '访问资源不存在',
  500: '服务器错误，请重试',
  502: '服务器错误，请重试',
  503: '服务器错误，请重试',
  504: '服务器错误，请重试',
  405: '名称重复，请重试',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status === 401) {
    response.json().then(({ redirect }) => {
      if (window) {
        window.sessionStorage.setItem('redirectPath', window.location.href);
        window.location.href = redirect;
      }
    });
    throw response;
  }
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;

    notification.error({
      message: `请求失败`,
      description: errorText,
    });
    throw response;
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
    throw response;
  }

  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

// const requestMethod = extend({
//   errorHandler, // 默认错误处理
//   credentials: 'include', // 默认请求是否带上cookie
// });

// const request = (url, options?) => {
//   const newOptions = { ...options };
//   if (options?.headers) {
//     newOptions.headers = {
//       'Cache-Control': 'no-cache',
//       Pragma: 'no-cache',
//       ...options.headers,
//       'sgs-userid': empNum.userid,
//     };
//   } else {
//     newOptions.headers = {
//       'Cache-Control': 'no-cache',
//       Pragma: 'no-cache',
//       'sgs-userid': empNum.userid,
//     };
//   }
//   return requestMethod(url, newOptions);
// };

export default request;
