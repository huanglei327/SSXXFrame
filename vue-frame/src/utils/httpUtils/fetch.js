import axios from './axoisPlus'
import qs from 'qs'
import { Toast } from 'vant';

export function post(apiname, parameters) {
    return new Promise((resolve, reject) => {
        axios.post(apiname, qs.stringify(parameters))
            .then(res => {
                if (res.data.errorCode !== 0) {
                    Toast.clear()
                    Toast.fail(res.data.errorMessage)
                } else {
                    resolve(res.data)
                }
            }).catch(err => {
                reject(err)
            })
    })
}
export function get(apiname) {
    return new Promise((resolve, reject) => {
        axios.get(apiname)
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
