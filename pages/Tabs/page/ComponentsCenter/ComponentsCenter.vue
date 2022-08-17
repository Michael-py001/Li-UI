<template>
  <view class="ComponentsCenter">
    <view class="box">
      <Title name="基础组件"></Title>
    </view>
    <view class="box">
      <Title name="表单组件"></Title>
      <Item name="Form表单" url="Components.Form"></Item>
      <Item name="时间选择器" url="Components.TimeSelect"></Item>
    </view>
  </view>
</template>

<script setup>
  import {nav} from '@/pages/index.js'
  import Title from '@/components/MainUI/Title.vue'
  import Item from '@/components/MainUI/Item.vue'
</script>

<style lang="scss" scoped>
  .ComponentsCenter{
    padding: 24rpx;
    .box {
      margin-bottom: 24rpx;
      .title {
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
      .item {
        margin-bottom: 24rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100rpx;
        border-radius: 24rpx;
        background-color: #fff;
        color: #333;
        font-size: 34rpx;
        font-weight: bold;
        box-shadow: 2rpx 5rpx 10rpx -3rpx rgba(75, 75, 75, 0.8);
      }
    }
    
  }
</style>
