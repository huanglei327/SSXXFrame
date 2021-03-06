/**
* 
* http配置
*/

import axios from 'axios'
import { Toast } from 'vant';
import router from '@/router'
// axios 配置
axios.defaults.timeout = 1000 * 60;
axios.defaults.withCredentials = false

//axios.defaults.baseURL = `http://duoduoday.top`
//axios.defaults.baseURL = 'api'
axios.defaults.baseURL = 'http://localhost:62294/'
// http request 拦截器
axios.interceptors.request.use(
    config => {
        var obj = JSON.parse(localStorage.getItem("UserInfo"))
        if (obj !== null) {
            config.url = config.url + '?userid=' + obj.userid + '&token=' + obj.token + '&openid=' + obj.openid
        }
        return config
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        Toast.clear()
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    Toast.fail({
                        message: '请求错误(400)',
                        position: 'bottom',
                        duration: 5000
                    });
                    break
                case 401:
                    Toast.fail({
                        message: '未授权，请登录(401)',
                        position: 'bottom',
                        duration: 5000
                    });
                    break
                case 403:
                    Toast.fail({
                        message: '拒绝访问(403)',
                        position: 'bottom',
                        duration: 5000
                    });
                    break
                case 404:
                    // Toast.fail({
                    //     message: `请求地址出错 ${err.response.config.url}`,
                    //     position: 'bottom',
                    //     duration: 5000
                    // });
                    break
                case 408:
                    Toast.fail({
                        message: '请求超时',
                        position: 'bottom',
                        duration: 5000
                    });
                    break
                case 500:
                    Toast.fail({
                        message: '服务器内部错误',
                        position: 'bottom',
                        duration: 10000
                    });
                    break
                case 501:
                    Toast.fail({
                        message: '服务未实现',
                        position: 'bottom',
                        duration: 5000
                    });
                    break
                case 502:
                    Toast.fail({
                        message: '网关错误(502)',
                        position: 'bottom',
                        duration: 5000
                    });
                    break
                case 503:
                    Toast.fail({
                        message: '服务不可用',
                        position: 'bottom',
                        duration: 5000
                    });
                    break
                case 504:
                    Toast.fail({
                        message: '网关超时(504)',
                        position: 'bottom',
                        duration: 5000
                    });
                    break
                case 505:
                    Toast.fail({
                        message: 'HTTP版本不受支持',
                        position: 'bottom',
                        duration: 5000
                    });
                    break
                default:
            }
        }
        else {
            router.push({
                path: '/Error'
            })
        }

        return Promise.reject(err)
    });

export default axios;