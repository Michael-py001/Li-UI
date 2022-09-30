<template>
  <view class="Button">
    <Title name="按钮类型"></Title>
    <view class="btns">
      <view class="btn">
        <Btn  type="theme"   @click="handleClick">默认主题色</Btn>
      </view>
      <view class="btn">
        <Btn  type="primary"  @click="handleClick">成功按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="danger"  @click="handleClick">危险按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="warn"  @click="handleClick">警告按钮</Btn>
      </view>
    </view>
    <Title name="镂空按钮"></Title>
    <view class="btns">
      <view class="btn">
        <Btn  type="theme" plain  @click="handleClick">镂空按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="primary" plain  @click="handleClick">镂空按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="danger" plain  @click="handleClick">镂空按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="warn" plain  @click="handleClick">镂空按钮</Btn>
      </view>
    </view>
    <Title name="显示loading"></Title>
    <view class="btns">
      <view class="btn">
        <Btn  type="theme"  loading @click="handleClick">默认主题色</Btn>
      </view>
      <view class="btn">
        <Btn  type="primary" loading @click="handleClick">成功按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="theme" plain loading @click="handleClick">镂空按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="primary" plain loading @click="handleClick">镂空按钮</Btn>
      </view>
    </view>
    <Title name="禁用按钮"></Title>
    <view class="btns">
      <view class="btn">
        <Btn  type="theme" disabled  @click="handleClick">镂空按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="primary" disabled  @click="handleClick">镂空按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="danger" disabled  @click="handleClick">镂空按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="warn" disabled  @click="handleClick">镂空按钮</Btn>
      </view>
    </view>
    <Title name="自定义字体颜色"></Title>
    <view class="btns">
      <view class="btn">
        <Btn  type="theme" textColor="#809bee"  @click="handleClick">镂空按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="primary"  textColor="#f7a4a4"  @click="handleClick">镂空按钮</Btn>
      </view>
    </view>
    <Title name="自定义背景颜色"></Title>
    <view class="btns">
      <view class="btn">
        <Btn  type="theme" bgColor="linear-gradient(160deg, #0093E9 0%,#8EC5FC 46%, #80D0C7 100%)"  @click="handleClick">渐变色按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="theme" bgColor="linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"  @click="handleClick">渐变色按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="primary"  bgColor="linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"  @click="handleClick">渐变色按钮</Btn>
      </view>
      <view class="btn">
        <Btn  type="primary"  bgColor="#0ab99c"  @click="handleClick">青绿色按钮</Btn>
      </view>
    </view>
    <Title name="自定义大小"></Title>
    <view class="btns">
      <view class="btn">
        <Btn  type="primary" size="xl" customStyle="width:324rpx;" @click="handleClick">超大尺寸</Btn>
      </view>
      <view class="btn">
        <Btn  type="danger" size="m"  @click="handleClick">普通尺寸</Btn>
      </view>
      <view class="btn">
        <Btn  type="warn" size="s" customStyle="width:200rpx;" @click="handleClick">小型尺寸</Btn>
      </view>
    </view>
  </view>
</template>

<script setup>
  import Btn from '@/pages/Components/components/Button/Button.vue'
  import Title from '@/components/MainUI/Title.vue'
  import Item from '@/components/MainUI/Item.vue'
  import {ref} from 'vue'
  
  let customStyle = ref("width:224rpx;")
</script>

<style lang="scss" scoped>
  .Button{
    padding: 24rpx;
    .btns {
      display: grid;
      grid-template-columns:repeat(2,1fr);
      grid-row-gap: 44rpx;
      margin-bottom: 54rpx;
      .btn {
        width:250rpx;
        // margin-bottom: 24rpx;
      }
    }
    
  }
</style>
