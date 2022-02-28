<template>
  <view class="content">
    首页
    <button @click="toRoute">11111111111111111112</button>
    <image :src="loginBg" class="image">

      <button @click="toSubRoute">分包a页面</button>
      <button @click="toSubRoute2">分包b页面</button>
      <com></com>
      
      <view></view>
   </view>
</template>

<script>
import com from './com.vue'
export default {
  components: {
    com
  },
  data() {
    return {
      title: "Hello",
      loginBg:this.$mAssetsConfig.loginBg,
      envVersion: ''
    };
  },
  created(){
    console.log('首页created')
  },
  onLoad() {
    let baseUrl;
    let envVersion = wx.getAccountInfoSync().miniProgram.envVersion;
    switch (envVersion) {
      case "develop": // 开发版
        baseUrl = "https://testxxx.com"; //测试环境
        break;
      case "trial": // 体验版
        baseUrl = "https://testxxx.com"; //测试环境
        break;
      case "release": // 正式版
        baseUrl = "https://xxx.com"; //正式环境
    }
    this.envVersion =  envVersion;
    console.log(this.envVersion,'this.envVersion')
  },
  methods: {
    toRoute() {
      this.$Router.push({path:'/pages/index/test'})
    },
    toSubRoute(){
      this.$Router.push({path:'/pages/sub/a'})
    },
    toSubRoute2(){
      this.$Router.push({path:'/pages/sub/b'})
    }
  },
};
</script>

<style scoped lang="scss">
.content{
  background: yellowgreen;
  button {
    background-color: red ;
    color: $uni-color-primary;
  }
  .image{
    width: 300rpx;
    height: 300rpx
  }
}
</style>
