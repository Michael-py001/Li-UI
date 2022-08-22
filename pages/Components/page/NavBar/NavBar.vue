<template>
  <view class="NavBar">
  <view class="Home-bg">
      <view class="top">
      </view>
    </view>
    <NavBar :backgroundColor="backgroundColorList[backgroundColorIndex]" :showBack="showBack" :isNearTop="openChangeColor&&isNearTop" :changeColor="backgroundChangeColorList[backgroundChangeColorIndex]" :btnColor="backBtnColorList[backBtnColorIndex]" title="导航栏" :titleColor="titleColorList[titleColorIndex]"/>
    <view class="content">
      <Item :name="`${openChangeColor?'关闭下滑变色':'开启下滑变色'}`" @click="openChangeColor = !openChangeColor"></Item>
      <Item name="切换背景颜色" @click="changeBgColor"></Item>
      <Item name="切换下滑颜色" @click="changeChagneColor"></Item>
      <Item name="切换标题颜色" @click="changeTextColor"></Item>
      <Item :name="showBack?'隐藏返回键':'显示返回键'" @click="showBack = !showBack"></Item>
      <Item name="切换返回键颜色" @click="changeBtnColor"></Item>
    </view>
  </view>
</template>

<script setup>
  import {watch} from 'vue'
  import NavBar from './components/NavBar/NavBar'
  import {useNavHeight} from '@/share/NavHeight.js'
  import {onLoad, onPageScroll} from '@dcloudio/uni-app'
  import Item from '@/components/MainUI/Item.vue'
  let {isNearTop} = useNavHeight()
  // 背景色
  let backgroundColorList = $ref(['transparent','#5756cd','#cb59ba', '#f9bf79','linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)','#56bbd2','#80d0c7','linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)','#93c4fc','#dac4fc','linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)']),
      backgroundColorIndex = $ref(0),
      openChangeColor = $ref(true),
      // 下滑颜色
      backgroundChangeColorList = $ref(['transparent','#5756cd','#cb59ba', '#f9bf79','linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)','#56bbd2','#80d0c7','linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)','#93c4fc','#dac4fc','linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'].reverse()),
      backgroundChangeColorIndex = $ref(0),
      // 标题颜色
      titleColorList = $ref(['#333','transparent','#5756cd','#cb59ba', '#f9bf79','linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)','#56bbd2','#80d0c7','linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)','#93c4fc','#dac4fc','linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)']),
      titleColorIndex = $ref(0),
      // 返回键颜色
      backBtnColorList = ['#333','#fff','#4b4bb3','#cb59ba', '#f9bf79','#4faec3','#80d0c7','#aaff7f','#ff5500'],
      backBtnColorIndex = $ref(0)
  
  let showBack = $ref(true)    
  
  //切换背景色 
  const changeBgColor = ()=>{
    if(backgroundColorIndex>backgroundColorList.length-1) {
      backgroundColorIndex = 0
    }
    else {
      backgroundColorIndex += 1
    }
  }
  //切换下滑背景色
  const changeChagneColor = ()=>{
    if(backgroundChangeColorIndex>backgroundChangeColorList.length-1) {
      backgroundChangeColorIndex = 0
    }
    else {
      backgroundChangeColorIndex += 1
    }
  }
  // 切换标题颜色
  const changeTextColor = ()=>{
    if(titleColorIndex>backgroundColorList.length-1) {
      titleColorIndex = 0
    }
    else {
      titleColorIndex += 1
    }
  }
  // 切换按钮颜色
  const changeBtnColor = ()=>{
    if(backBtnColorIndex>backBtnColorList.length-1) {
      backBtnColorIndex = 0
    }
    else {
      backBtnColorIndex += 1
    }
  }
</script>

<style lang="scss" scoped>
  .NavBar{
    height: 200vh;
    .content {
      padding: 24rpx ;
      position: relative;
      font-size: 40rpx;
      color: #333;
    }
    .Home-bg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      // background-color: #0093E9;
      // background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

      .top {
        position: relative;
        width: 750rpx;
        height: 469rpx;
        // background: linear-gradient(139deg,#5468ff 13%, #99ecff 48%, #ffe5db 78%, #f78888 97%);
        background: linear-gradient(139deg,#dce0ff 13%, #e6f3ff 48%, #f8faf9 78%, #fdf0f0 97%);
        // opacity: .2;
        &::after {
          position: absolute;
          bottom: 0rpx;
          left: 0;
          content: '';
          width: 750rpx;
          height: 120rpx;
          background: linear-gradient(180deg, rgba(249,249,249,0) 0%, rgba(249,249,249,1) 51%, rgba(249,249,249,1) 100%);
        }
      }
      // background: linear-gradient(139deg,#dce0ff 13%, #e6f3ff 48%, #f8faf9 78%, #fdf0f0 97%);
    }
  }
</style>
