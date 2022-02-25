<template>
  <view class="content">
    首页
    <button @click="toRoute">11111111111111111112</button>
    <image :src="loginBg" class="image">
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
   
    },
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
