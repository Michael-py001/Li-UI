<template>
  <view class="Title">
      {{name}}
  </view>
</template>

<script setup>
  // <Title name="基础组件"></Title>
  const props = defineProps({
    name:String
  })
</script>

<style lang="scss" scoped>
  .Title {
    font-size: 40rpx;
    font-weight: bold;
    color: #333;
    position: relative;
    z-index: 1;
    margin-bottom: 36rpx;
    &::before {
      content: '';
      position: absolute;
      bottom: -8rpx;
      left: -5px;
      width: 120rpx;
      height: 16rpx;
      background-color: #194ce5;
      z-index: -1;
      opacity: .9;
    }
  }
</style>