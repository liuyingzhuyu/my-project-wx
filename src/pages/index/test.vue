<template>
  <view class="content">
   测试
    <button @click="toRoute">222</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {
    toRoute() {
      this.$mRouter.push({
        route: this.$mRoutesConfig.login,
      });
    },
  },
};
</script>

<style>

</style>
