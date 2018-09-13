

import { get, post } from '@/utils/httpUtils/fetch.js'

///跳转页面获取code
export function getUserInfoApi(param) {
    const apiName = 'api/WxUserInfo/QueryById'
    return post(apiName,param)
}

export function GetToken(param)
{
    const apiName ='api/Login/WxLogin'
    return post(apiName,param)
}