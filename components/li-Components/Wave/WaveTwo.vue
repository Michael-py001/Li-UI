<template>
  <view class="Wave"> 
    <image class="icon" :src="`/static/Wave/${isPlaying?'stop2':'play2'}.png`" mode="aspectFill" @click.stop="isPlaying=!isPlaying"></image>
    <view class="aubox" :class="{'isPlaying':isPlaying}">
    			<view class="auItem au1"></view>
    			<view class="auItem au2"></view>
    			<view class="auItem au3"></view>
    			<view class="auItem au4"></view>
    			<view class="auItem au5"></view>
    			<view class="auItem au6"></view>
    			<view class="auItem au7"></view>
    			<view class="auItem au8"></view>
          <view class="auItem au1"></view>
          <view class="auItem au2"></view>
          <view class="auItem au3"></view>
          <view class="auItem au4"></view>
          <view class="auItem au5"></view>
          <view class="auItem au6"></view>
          <view class="auItem au7"></view>
          <view class="auItem au8"></view>
    </view>
    <view class="num">
      <!-- {{num||0}}" -->
    </view>
  </view>
</template>

<!--  <WaveTwo v-model="isPlaying" :num="videoDuration"></WaveTwo> -->
<script setup>
  import {ref,watch,toRefs,toRef} from 'vue'
  let isPlaying = ref(false)
  let emits = defineEmits(['update:modelValue'])
  let props= defineProps({
    modelValue:Boolean,
    num:Number
  })
  const { modelValue } = toRefs(props)
  watch(isPlaying,(value)=>{
    emits('update:modelValue',value)
  })
  
  watch(modelValue,(value)=>{
   isPlaying.value = value
  })
</script>

<style lang="scss" scoped>
  .Wave {
    padding: 12rpx 16rpx ;
    background-color: #fff;
    border: 1rpx solid #b2b2b2;
    border-radius: 12rpx;
    font-size: 22rpx;
    font-weight: normal;
    color: #333333;
    display: flex;
    align-items: center;
    .icon {
      width: 40rpx;
      height: 40rpx;
      margin-right: 12rpx;
    }
    .num {
      font-size: 22rpx;
      font-weight: normal;
      text-align: right;
      color: #333333;
      margin-left: 16rpx;
    }
    .aubox{
          width: 172rpx;
          height: 24rpx;
    			display: flex;
    			align-items: center;  //重要属性，让hight翻转过来，往上延伸
          justify-content: space-between;
          transition: .5s;
          &.isPlaying {
            .au1 {
              animation: audio .5s linear .1s infinite alternate;
            }
            .au2 {
              animation: audio .5s linear .2s infinite alternate;
            }
            .au3 {
              animation: audio .5s linear .5s infinite alternate;
            }
            .au4 {
              animation: audio .5s linear .7s infinite alternate;
            }
            .au5 {
              animation: audio .5s linear .1s infinite alternate;
            }
            .au6 {
              animation: audio .5s linear .2s infinite alternate;
            }
            .au7 {
              animation: audio .5s linear .5s infinite alternate;
            }
            .au8 {
              animation: audio .5s linear .7s infinite alternate;
            }
          }
    		}
    		.auItem{
    			width: 6rpx;
    			height:24rpx;
          border-radius: 20rpx;
    		}
    		.au1{
    			height: 7rpx;
          background-color: #888888;
          
    		}
    		.au2{
    			height: 13rpx;
          background-color: #888888;
    		}
    		.au3{
    			height: 24rpx;
          background-color: #888888;
    		}
    		.au4{
    			height: 13rpx;
          background-color: #888888;
    		}
    		.au5{
    			height: 13rpx;
          background-color: #888888;
          opacity: .8;
    		}
    		.au6{
    			height: 24rpx;
          background-color: #888888;
          opacity: .4;
    		}
    		.au7{
    			height: 13rpx;
          background-color: #888888;
          opacity: .3;
    		}
        .au8{
        	height: 7rpx;
          background-color: #888888;
          opacity: .2;
        }
    		@keyframes audio{
    			from{
            height: 1rpx;
            opacity: 0.1;
            }
    			to{
            height: 24rpx;
            opacity: 1;
            }
    		}
  }
</style>