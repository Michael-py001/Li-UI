<template>
  <view class="Box" @click="handleClick">
    <image :src="src" mode="aspectFill" class="img"></image>
    <view class="title">
      {{title}}
    </view>
  </view>
</template>

<script setup>
  import {nav} from '@/pages/index.js'
  const props = defineProps({
    title:{
      type:String,
      default:'标题'
    },
    src:{
      type:String,
      default:''
    },
    url:{
      type:String,
      default:''
    }
  })
  
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
  .Box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img {
      height: 160rpx;
      width: 160rpx;
    }
    .title {
      color: #333;
      font-size: 30rpx;
      text-align: center;
    }
  }
</style>