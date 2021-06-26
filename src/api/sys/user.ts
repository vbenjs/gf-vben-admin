import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  GetUserInfoByUserIdParams,
  GetUserInfoByUserIdModel,
} from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  GetUserInfo = '/api/user/info',
  GetPermCodeByUserId = '/getPermCodeByUserId',
}

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
    }
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoByUserIdModel>({
    url: Api.GetUserInfo,
  });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}
