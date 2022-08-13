<template>
  <view class="Wave"> 
    <image class="icon" :src="`/static/Wave/${isPlaying?'stop':'play'}.png`" mode="aspectFill" @click.stop="isPlaying=!isPlaying"></image>
    <view class="aubox" :class="{'isPlaying':isPlaying}">
    			<view class="auItem au1"></view>
    			<view class="auItem au2"></view>
    			<view class="auItem au3"></view>
    			<view class="auItem au4"></view>
    			<view class="auItem au5"></view>
    			<view class="auItem au6"></view>
    			<view class="auItem au7"></view>
    			<view class="auItem au8"></view>
      </view>
  </view>
</template>

<!-- <li-Wave v-model="isPlaying"></li-Wave> -->
<script setup>
  import {ref,watch,toRefs,toRef} from 'vue'
  let isPlaying = ref(false)
  let emits = defineEmits(['update:modelValue'])
  let props= defineProps({
    modelValue:Boolean
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
    background: rgba(255,255,255,0.80);
    height: 40rpx;
    width: 156rpx;
    box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(0,0,0,0.16); 
    display: flex;
    align-items: center;
    border-radius: 20rpx 12rpx 12rpx 20rpx;
    .icon {
      width: 40rpx;
      height: 40rpx;
      margin-right: 12rpx;
    }
    .aubox{
          width: 88rpx;
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
          background-color: #2a85f5;
          
    		}
    		.au2{
    			height: 13rpx;
          background-color: #2a85f5;
    		}
    		.au3{
    			height: 24rpx;
          background-color: #2a85f5;
    		}
    		.au4{
    			height: 13rpx;
          background-color: #2a85f5;
    		}
    		.au5{
    			height: 13rpx;
          background-color: #2a85f5;
          opacity: .8;
    		}
    		.au6{
    			height: 24rpx;
          background-color: #2a85f5;
          opacity: .4;
    		}
    		.au7{
    			height: 13rpx;
          background-color: #2a85f5;
          opacity: .3;
    		}
        .au8{
        	height: 7rpx;
          background-color: #2a85f5;
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