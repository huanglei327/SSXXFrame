<template>
    <div>{{msg}}</div>
</template>

<script>
import { GetProcess } from '@/utils/httpUtils/api.js'

export default {
    data() {
        return {
            msg: '受i也'
        }
    },
    mounted() {
        console.log(location.host)

        const appid = 'wxdf4950c6c24b075d'
        const reurl = location.host
        const host = location.host+'/C'

        GetProcess(appid,host,reurl).then()
    }
}
</script>

<style>
</style>
