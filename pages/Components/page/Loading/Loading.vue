<template>
  <view class="Loading">
    <Title name="圆形"></Title>
    <view class="item">
      <Loading></Loading>
    </view>
    <Title name="花型"></Title>
    <view class="item">
      <Loading mode="flower"></Loading>
    </view>
    <Title name="自定义大小"></Title>
    <view class="item">
      <Loading size="35"></Loading>
      <Loading size="45"></Loading>
      <Loading size="55"></Loading>
      <Loading size="65"></Loading>
      <Loading size="75"></Loading>
    </view>
    <view class="item">
      <Loading size="35" mode="flower"></Loading>
      <Loading size="45" mode="flower"></Loading>
      <Loading size="55" mode="flower"></Loading>
      <Loading size="65" mode="flower"></Loading>
      <Loading size="75" mode="flower"></Loading>
    </view>
    <Title name="自定义颜色"></Title>
    <view class="item">
      <Loading size="35" color="#fac077"></Loading>
      <Loading size="45" color="#df849e"></Loading>
      <Loading size="55" color="#cd5db8"></Loading>
      <Loading size="65" color="#a052c4"></Loading>
      <Loading size="75" color="#6156cc"></Loading>
    </view>
    <view class="item">
      <Loading size="35" color="#fac077" mode="flower"></Loading>
      <Loading size="45" color="#df849e" mode="flower"></Loading>
      <Loading size="55" color="#cd5db8" mode="flower"></Loading>
      <Loading size="65" color="#a052c4" mode="flower"></Loading>
      <Loading size="75" color="#6156cc" mode="flower"></Loading>
    </view>
    <Title name="自定义动画"></Title>
    <view class="item">
      <Loading mode="circle" size="55" timingFunction="linear"></Loading>
      <Loading mode="circle" size="55" timingFunction="ease"></Loading>
      <Loading mode="circle" size="55" timingFunction="ease-in"></Loading>
      <Loading mode="circle" size="55" timingFunction="ease-out"></Loading>
      <Loading mode="circle" size="55" timingFunction="ease-in-out"></Loading>
    </view>
  </view>
</template>

<script setup>
  import Title from '@/components/MainUI/Title.vue'
  import Item from '@/components/MainUI/Item.vue'
  import Loading from '@/pages/Components/components/Loading/Loading.vue'
</script>

<style lang="scss">
  .Loading{
    padding: 24rpx;
    .item {
      margin-top: 24rpx;
      margin-bottom: 44rpx;
      display: grid;
      grid-template-columns: repeat(5,1fr);
    }
  }
</style>
