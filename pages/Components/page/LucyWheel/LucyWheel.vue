<template>
  <view class="LucyWheel">
    <Title name="设置转盘参数"></Title>
    <view class="row">
      <view class="label">
        中奖第几位：
      </view>
      <view style="flex:1">
        <u-slider min="1" max="10" v-model="getIndex" activeColor="#194ce5" inactiveColor="#c0c4cc" showValue/>
      </view>
    </view>
    <view class="row">
      <view class="label">
        总耗时(s)：
      </view>
      <view style="flex:1">
        <u-slider min="1" max="10" v-model="totalTime" activeColor="#194ce5" inactiveColor="#c0c4cc" showValue/>
      </view>
    </view>
    <view class="row">
      <view class="label">
        总圈数：
      </view>
      <view style="flex:1">
        <u-slider min="1" max="10" v-model="rollNum" activeColor="#194ce5" inactiveColor="#c0c4cc" showValue/>
      </view>
    </view>
    <view class="row">
      <view class="label">
        中奖概率：
      </view>
      <view style="flex:1">
        <u-slider v-model="getPercent" activeColor="#194ce5" inactiveColor="#c0c4cc" showValue/>
      </view>
    </view>
    <view class="row">
      <view class="label">
        自动抽奖：
      </view>
      <view style="flex:1">
        <switch :checked="autoBegin" @change="onAutoBegin" color="#194ce5"></switch>
      </view>
    </view>
    <view class="row">
      <view class="label">
        是否禁用：
      </view>
      <view style="flex:1">
        <switch :checked="disabled" @change="onDisabled" color="#194ce5"></switch>
      </view>
    </view>
    <Item name="开始抽奖!" @click="ZhuanPanShow=true"></Item>
    <LucyWheel 
    :popupShow="ZhuanPanShow" 
     getUser = "https://tinypng.com/images/apng/panda-waving.png"
    :userList="ZhuanPanUserList" 
    :getIndex="getIndex"
    :totalTime="totalTime"
    :rollNum="rollNum"
    :getPercent="getPercent"
    :autoBegin="autoBegin"
    :disabled="disabled"
    @finish="ZhuanPanFinish" 
    @close="ZhuanPanShow=false">
    </LucyWheel>
  </view>
</template>

<script setup>
  import LucyWheel from '@/pages/Components/components/LucyWheel/LucyWheel.vue'
  import Title from '@/components/MainUI/Title.vue'
  import Item from '@/components/MainUI/Item.vue'
  import {ref} from 'vue'
  
 
  let ZhuanPanUserList = ref( [
    {avatar_url:'https://tinypng.com/images/example-shrunk.png'},
    {avatar_url:'https://tinypng.com/images/pro/panda-pro.png'},
  ]),
        ZhuanPanShow = ref(false),
        getPercent = ref(99), //中奖概率
        getIndex = ref(1), //中奖第几位
        totalTime = ref(5), //总耗时
        rollNum = ref(5), //总圈数
        autoBegin = ref(true), 
        disabled = ref(false) 
        
  const ZhuanPanFinish = ({isGet})=>{
    uni.showToast({
      title:isGet?`恭喜你中奖了!`:`谢谢惠顾!`,
      icon:'none'
    })
  }
  
  const onAutoBegin = ({detail:{value}})=>{
    autoBegin.value = value
  }
  const onDisabled = ({detail:{value}})=>{
    disabled.value = value
  }
 
        
        
</script>

<style lang="scss" scoped>
  .LucyWheel{
    padding: 24rpx;
    .row {
      display: flex;
      align-items: center;
      margin-bottom: 44rpx;
      .label {
        margin-right: 24rpx;
      }
      input {
        flex: 1;
      }
    }
  }
</style>
