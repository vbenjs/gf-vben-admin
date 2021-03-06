import { defHttp } from '/@/utils/http/axios';
import { LoginParams, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  Register = '/register',
  GetPermCode = '/getPermCode',
  GetUserInfo = '/user/info',
  GetPermCodeByUserId = '/getPermCodeByUserId',
}
const url=`http://` + window.location.hostname + `:10088`

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
      apiUrl: url,
    },
  );
}
export function registerApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post(
    {
      url: Api.Register,
      params,
    },
    {
      errorMessageMode: mode,
      apiUrl: url,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}
