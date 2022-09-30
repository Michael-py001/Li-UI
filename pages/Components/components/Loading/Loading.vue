<template>
  <view class="Loading">
    <view :class="[`Loading__${mode}`]"
    :style="{
      color: color,
      width: `${size}rpx`,
      height: `${size}rpx`,
      borderTopColor: color,
      borderBottomColor: otherBorderColor,
      borderLeftColor: otherBorderColor,
      borderRightColor: otherBorderColor,
      'animation-duration': `${duration}ms`,
      'animation-timing-function':mode === 'circle' ? timingFunction : ''
    }">
      <template v-if="mode=='flower'">
        <view
        	v-for="(item, index) in array12"
        	:key="index"
        	class="Loading__dot"
        >
        </view>
      </template>
    </view>
  </view>
</template>

<script setup>
  import {colorGradient} from '@/utils/componentTool/handleColor.js'
 import {computed} from 'vue'
 const props = defineProps({
   // 主颜色
   color:{
     default:'rgb(200, 200, 200)'
   },
   // 大小
   size:{
     type: [String, Number],
     default:'35'
   },
   // 类型
   mode:{
     default:'circle' //circle 圈圈  flower花朵
   },
   // circle-轨道颜色
   trackColor:{
     default:''
   },
   duration:{
     default:'1000'
   },
   timingFunction:{
     default:'ease-in-out'
   }
 })
 let array12 =  Array.from({length: 12})
 
 
 const otherBorderColor = computed(()=>{
   let lightColor = ''
   if (props.mode === 'circle') {
      lightColor = colorGradient(props.color, '#ffffff', 100)[80]
      return props.trackColor ? props.trackColor : lightColor
   } 
   else {
   	return 'transparent'
   }
 })
 
 
 
</script>

<style lang="scss" scoped>
  .Loading{
    flex-direction: row;
		align-items: center;
		justify-content: center;
    @keyframes rotate {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(1turn);
      }
    }
    &__circle {
      border: 0 solid #000;;
      border-top-right-radius: 100rpx;
      border-top-left-radius: 100rpx;
      border-bottom-left-radius: 100rpx;
      border-bottom-right-radius: 100rpx;
      border-width: 4rpx;
      color: rgb(200, 200, 200);
      border-color: rgb(200, 200, 200) rgb(244, 244, 244) rgb(244, 244, 244);
      width: 35rpx;
      height: 35rpx;
      animation-duration: 1200ms;
      animation: rotate 1s ease-in-out  infinite;
      position: relative;
      box-sizing: border-box;
      max-width: 100%;
      max-height: 100%;
    }
    &__flower {
    	width: 48rpx;
    	height: 48rpx;
    	position: relative;
      animation-duration: 1200ms;
      animation: rotate 1s ease-in-out infinite;
      animation-timing-function: steps(12)
    }
    
    &__dot {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    
      &:before {
        display: block;
        width: 2px;
        height: 25%;
        margin: 0 auto;
        background-color: currentColor;
        border-radius: 40%;
        content: " ";
      }
    }
    
    @for $i from 1 through 12 {
    	.Loading__dot:nth-of-type(#{$i}) {
    		transform: rotate($i * 30deg);
    		opacity: 1 - 0.0625 * ($i - 1);
    	}
    }
    
  }
</style>
