<template>
  <view class="ComponentsCenter">
    <view class="box">
      <Title name="表单组件"></Title>
      <Item name="Form 表单" url="Components.Form"></Item>
      <Item name="TimePicker 时间选择器" url="Components.TimeSelect"></Item>
      <Item name="Rate 评分" url="Components.Rate"></Item>
    </view>
    <view class="box">
      <Title name="导航组件"></Title>
      <Item name="Tabs 标签" url="Components.Tabs"></Item>
      <Item name="NavBar 自定义导航栏" url="Components.NavBar"></Item>
    </view>
    <view class="box">
      <Title name="反馈组件"></Title>
      <Item name="ConfirmPopup 确认弹窗组件" url="Components.ConfirmPopup"></Item>
    </view>
    <view class="box">
      <Title name="图表组件"></Title>
      <Item name="antv F2 蚂蚁图表" url="Components.F2Chart"></Item>
      <Item name="echart 百度图表" url="Components.ConfirmPopup"></Item>
    </view>
    <view class="box">
      <Title name="其他组件"></Title>
      <Item name="PageEnd 列表页加载状态" url="Components.PageEnd"></Item>
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
