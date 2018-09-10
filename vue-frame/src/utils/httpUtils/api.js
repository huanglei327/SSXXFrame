

import { get, post } from '@/utils/httpUtils/fetch.js'

///跳转页面获取code
export function GetProcess(appid,host,reurl) {
    const apiName = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + host + '/B?reurl=' + reurl + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
    return get(apiName)
}
