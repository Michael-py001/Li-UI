<template>
  <view class="LuckyMoney">
     <Title name="设置红包参数"></Title>
    <view class="row">
      <view class="label">
        红包金额：
      </view>
      <view style="flex:1">
        <input type="text" placeholder="红包金额" v-model="HongBaoNum">
      </view>
    </view>
    <view class="row">
      <view class="label">
        单位：
      </view>
      <view style="flex:1">
        <input type="text" placeholder="单位" v-model="unit">
      </view>
    </view>
    <view class="row">
      <view class="label">
        封面标题：
      </view>
      <view style="flex:1">
        <input type="text" placeholder="封面标题" v-model="frontTitle">
      </view>
    </view>
    <view class="row">
      <view class="label">
        背部标题：
      </view>
      <view style="flex:1">
        <input type="text" placeholder="背部标题" v-model="backTitleOne">
      </view>
    </view>
    <view class="row">
      <view class="label">
        背部副标题：
      </view>
      <view style="flex:1">
        <input type="text" placeholder="背部副标题" v-model="backTitleTwo">
      </view>
    </view>
    <view class="row">
      <view class="label">
        按钮文案：
      </view>
      <view style="flex:1">
        <input type="text" placeholder="按钮文案" v-model="btnTitle">
      </view>
    </view>
    <view class="row">
      <view class="label">
        总转数：
      </view>
      <view style="flex:1">
        <u-slider min="1" max="10" v-model="rollNum" activeColor="#194ce5" inactiveColor="#c0c4cc" showValue/>
      </view>
    </view>
    <view class="row">
      <view class="label">
        总耗时：
      </view>
      <view style="flex:1">
        <u-slider min="1" max="10" v-model="totalTime" activeColor="#194ce5" inactiveColor="#c0c4cc" showValue/>
      </view>
    </view>
    <Item name="拆红包" @click="HongBaoShow=true"></Item>
    
    <LuckyMoney  
      :money="HongBaoNum" 
      :backTitleOne="backTitleOne"
      :backTitleTwo="backTitleTwo"
      :frontTitle="frontTitle"
      :btnTitle="btnTitle"
      :popupShow="HongBaoShow"
       :totalTime="totalTime"
       :rollNum="rollNum"
       :unit="unit"
      @close="closeHongBao" 
    />
  </view>
</template>

<script setup>
  import LuckyMoney from '@/pages/Components/components/LuckyMoney/LuckyMoney.vue'
  import Title from '@/components/MainUI/Title.vue'
  import Item from '@/components/MainUI/Item.vue'
  import {ref,onUpdated ,onBeforeUpdate} from 'vue'
  
  let HongBaoShow = ref(false),
      HongBaoNum = ref(888),
      backTitleOne = ref('获得红包金额'),
      backTitleTwo = ref('- 红包已存入余额 -'),
      btnTitle = ref('开心收下红包'),
      frontTitle = ref('红包奖励'),
      unit = ref('元'),
      rollNum = ref(2),
      totalTime = ref(1)
      
  const closeHongBao = ()=>{
    HongBaoShow.value = false
  }
</script>

<style lang="scss" scoped>
  .LuckyMoney{
    padding: 24rpx;
    .row {
      display: flex;
      align-items: center;
      margin-bottom: 44rpx;
      .label {
        margin-right: 24rpx;
        color: #333;
        font-weight: 550;
      }
      input {
        flex: 1;
        color: #333;
      }
    }
  }
</style>
