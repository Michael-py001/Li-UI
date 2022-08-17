<template>
  <view class="Item" @click="handleClick">
     {{name}}
  </view>
</template>

<script setup>
  // <Item name="Form表单" url="Components.Form"></Item>
  import {nav} from '@/pages/index.js'
  const props = defineProps({
    name:String,
    url:''
  })
  const emits = defineEmits(['click'])
  const handleClick = ()=>{
    if(props.url) {
      nav(props.url)
    }
    else {
      emits('click')
    }
  }
  
</script>

<style lang="scss" scoped>
  .Item {
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
</style>