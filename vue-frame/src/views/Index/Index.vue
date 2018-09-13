<template>
    <div>
        <div class="portrait-list">
            <div class="portrait">
                <img :src="result.headimgurl" />
                <div class="title">{{result.nickName}}</div>
            </div>
        </div>
        <div> {{msg}}</div>
        <van-button type="warning" @click="setCookie()">点我推送消息</van-button>
        {{cookie.userid}}--{{cookie.token}}--{{cookie.openid}}
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
        <van-tabs v-model="active">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
        <!--<van-button type="danger" @click="getCookie('wocao')">危险按钮</van-button> -->
    </div>
</template>

<script>
import { getUserInfoApi } from '@/utils/httpUtils/api.js'

export default {
    data() {
        return {
            msg: '欢迎光临深圳市三石信息科技有限公司',
            list: [],
            cookie: {},
            result: '',
            active: 2
        }
    },
    mounted() {
        const that = this
        that.setCookie()
        //that.getCookie("UserInfo")
        that.$toast('提示文案');
        that.getUserInfo().then(() => {
            console.log('000')
            return that.getUserInfo1()
        }).then(() => {
            return that.getUserInfo2()
        }).catch(function (reason) {
            console.log('rejected');
            console.log(reason);
        });
    },
    methods: {
        getUserInfo() {
            return new Promise((resolve, reject) => {
                const that = this
                const param = {
                    userid: 2,
                }
                const c = res => {
                    if (res.errorCode === 0) {
                        that.result = res.data
                        resolve();
                    }
                    else {
                        that.msg = JSON.stringify(res)
                    }
                }
                getUserInfoApi(param).then(c)
            })
        },
        getUserInfo1() {
            return new Promise((resolve, reject) => {
                const that = this
                const param = {
                    userid: 1,
                }
                const c = res => {
                    if (res.errorCode === 0) {
                        that.result = res.data
                        resolve();
                    }
                    else {
                        that.msg = JSON.stringify(res)
                    }
                }
                getUserInfoApi(param).then(c)
            })
        },
        getUserInfo2() {
            return new Promise((resolve, reject) => {
                const that = this
                const param = {
                    userid: 3,
                }
                const c = res => {
                    if (res.errorCode === 0) {
                        that.result = res.data
                        resolve();
                    }
                    else {
                        that.msg = JSON.stringify(res)
                    }
                }
                getUserInfoApi(param).then(c)
            })
        },
        aa() {
            console.log('----')
        },
        getCookie(cookieName) {
            const that = this
            if (document.cookie.length > 0) {
                var c_start = document.cookie.indexOf(cookieName + "=")
                if (c_start != -1) {
                    c_start = c_start + cookieName.length + 1
                    var c_end = document.cookie.indexOf(";", c_start)
                    if (c_end == -1) c_end = document.cookie.length
                    localStorage.setItem("UserInfo", unescape(document.cookie.substring(c_start, c_end).replace(/\s+/g, "")))
                    that.cookie = JSON.parse(unescape(document.cookie.substring(c_start, c_end).replace(/\s+/g, "")))
                }
            }
        },
        setCookie() {
            localStorage.setItem("UserInfo", JSON.stringify({ "userid": 1, "openid": "o1ED6w0aGe-n7UCWPdMiywT4dM5E", "token": "3A54D2B3086B2C26D623187E4FB6B5D9" }))
        }// end function

    }
}
</script>

<style lang="less">
.portrait-list {
	background: white;
	width: 100%;
	.portrait {
		margin: 0 auto;
		width: 130px;
		padding-top: 10px;
		img {
			border-radius: 50%;
		}
		.title {
			padding: 10px;
			text-align: center;
			font-size: 16px;
		}
	}
}
</style>

