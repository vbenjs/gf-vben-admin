import { defHttp } from '/@/utils/http/axios';
import { LoginParams } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  Register = '/register',
  GetPermCode = '/getPermCode',
  GetUserInfo = '/user/info',
  GetMenu = '/user/menu',
  GetPermCodeByUserId = '/getPermCodeByUserId',
  TestRetry = '/testRetry',
}
const url = `http://` + window.location.hostname + `:10088`;

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
      apiUrl: 'http://localhost:10088',
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get({
    url: Api.GetUserInfo,
  });
}

export function getUserMenu() {
  return defHttp.get({
    url: Api.GetMenu,
  });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
