<template>
  <view class="content">
    首页
    <button @click="toRoute">11111111111111111112</button>
    <image :src="loginBg" class="image">
    <div>分包跳转</div>
      <button @click="toSubRoute">sub-index</button>
      <button @click="toSubRoute2">cart</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      loginBg:this.$mAssetsConfig.loginBg,
    };
  },
  onLoad() {},
  methods: {
    toRoute() {
      this.$Router.push('/pages/index/test')
    },
    toSubRoute() {
      this.$Router.push('/pages/sub/a')
    },
    toSubRoute2() {
      this.$Router.push('/pages/sub/cart')
    },
  },
};
</script>

<style scoped lang="scss">
.content{
  background: yellowgreen;
  button {
    // background-color: red ;
    color: $uni-color-primary;
  }
  .image{
    width: 300rpx;
    height: 300rpx
  }
}
</style>
