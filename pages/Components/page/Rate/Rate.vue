<template>
  <view class="Rate">
    <Title name="基本案例"></Title>
    <Rate size="47" :disabled="false" @change="change"></Rate>
    <view class="gap"></view>
    
    <Title name="自定义选中数量"></Title>
    <Rate :activeNum="4" size="47" :disabled="false" @change="change"></Rate>
    <view class="gap"></view>
    
    <Title name="自定义星星大小"></Title>
    <Rate :activeNum="5" size="55" :disabled="false" @change="change"></Rate>
    <view class="gap"></view>
    <Rate :activeNum="5" size="35" :disabled="false" @change="change"></Rate>
    <view class="gap"></view>
    
    <Title name="自定义星星数量"></Title>
    <Rate :activeNum="6" size="45" :maxNum="10" :disabled="false" @change="change"></Rate>
    <view class="gap"></view>
    
    <Title name="自定义星星间隔"></Title>
    <Rate  size="45" :activeNum="5" gap="16" :disabled="false" @change="change"></Rate>
    <view class="gap"></view>
    <Rate  size="45" :activeNum="5" gap="30" :disabled="false" @change="change"></Rate>
    <view class="gap"></view>
    
    <Title name="自定义图案"></Title>
    <Rate 
    fillIcon="https://s1.ax1x.com/2022/08/24/vg9L80.png" 
    emptyIcon="https://s1.ax1x.com/2022/08/24/vg9qCq.png"
    :activeNum="4" 
    size="45"
    :disabled="false" 
    @change="change"></Rate>
    <view class="gap"></view>
    <Rate
    fillIcon="https://s1.ax1x.com/2022/08/24/vgCaIs.png" 
    emptyIcon="https://s1.ax1x.com/2022/08/24/vgCUaj.png"
    :activeNum="4" 
    size="55"
    :disabled="false" 
    @change="change"></Rate>
    <view class="gap"></view>
    <Title name="禁用状态"></Title>
    <Rate :activeNum="3" size="45" :disabled="true" @change="change"></Rate>
    <view class="gap"></view>
  </view>
</template>

<script setup>
  import Title from '@/components/MainUI/Title.vue'
  import Rate from './components/Rate/Rate'
  
  const change = (value)=>{
    console.log(value)
  }
</script>

<style lang="scss" scoped>
  .Rate{
    padding: 24rpx;
    .gap {
      padding: 12rpx 0;
    }
  }
</style>
