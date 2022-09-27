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
        封面标题：
      </view>
      <view style="flex:1">
        <input type="text" placeholder="封面文案" v-model="frontTitle">
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
        <input type="text" placeholder="背部副标题" v-model="btnTitle">
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
      @close="closeHongBao" 
    />
  </view>
</template>

<script setup>
  import LuckyMoney from './components/LuckyMoney/LuckyMoney.vue'
  import Title from '@/components/MainUI/Title.vue'
  import Item from '@/components/MainUI/Item.vue'
  import {ref} from 'vue'
  
  let HongBaoShow = ref(false),
      HongBaoNum = ref(888),
      backTitleOne = ref('获得红包金额'),
      backTitleTwo = ref('- 红包已存入余额 -'),
      btnTitle = ref('开心收下红包'),
      frontTitle = ref('红包奖励')
      
  const closeHongBao = ()=>{
    console.log("closeHongBao")
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
