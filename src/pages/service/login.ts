import request from '@/utils/request';

const PREFIX = '/snnu/api';
const HTTP_LOGIN = PREFIX + '/user/login';

interface LoginPara {
  stuCode: string;
  password: string;
}

export const login = (data: LoginPara) => {
  return request(HTTP_LOGIN, {
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
