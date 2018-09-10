<template>
  <div id="app">
    <van-nav-bar :title="navtitle" :left-text="left_text" :left-arrow="left_arrow" fixed @click-left="onClickLeft" @click-right="onClickRight" />
    <router-view/>
  </div>
</template>

<script>
import "./assets/css/common.css";
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  created() {
    // const userinfo = {
    //   "id": 1,
    //   "userName": "管理员",
    // }
    // localStorage.setItem("userInfo", JSON.stringify(userinfo))
  },
  mounted: function () {
    // this.$toast.loading({
    //   mask: true,
    //   message: '加载中...',
    //   duration:10000
    // });
  },

  computed: { ...mapGetters(['navtitle', 'left_arrow', 'left_text']) },
  methods: {
    onClickLeft: function () {
      //if(this.navtitle === '首页')
      this.$router.go(-1)
    },
    onClickRight: function () {
      console.log('onClickRight-')
    }
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 46px;
}
</style>
