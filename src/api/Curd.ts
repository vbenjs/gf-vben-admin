import { defHttp } from '/@/utils/http/axios';

export const Curd = (params) => defHttp.post({ url: '/curd', params });
