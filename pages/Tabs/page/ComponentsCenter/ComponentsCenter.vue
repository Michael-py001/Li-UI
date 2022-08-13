<template>
  <view class="ComponentsCenter">
    <view class="box">
      <view class="title">
        基础组件
      </view>
    </view>
    <view class="box">
      <view class="title">
        表单组件
      </view>
      <view class="item" @click="$nav('Components.Form')">
        Form表单
      </view>
    </view>
  </view>
</template>

<script setup>
  import {nav} from '@/pages/index.js'
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
        margin-bottom: 24rpx;
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
