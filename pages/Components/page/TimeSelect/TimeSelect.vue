<template>
  <view class="TimeSelect">
    <Title name="时间区间"></Title>
    
    <Item name="打开时间区间选择器" @click="show2 = true"></Item>
    
    <Title name="快递时间"></Title>
    
    <Item name="打开快递时间选择器"  @click="show = true" ></Item>
    
    
    <ExpressTimePicker :show="show"  @close="show = false" shake @conform="conformExpressTime"></ExpressTimePicker>
    <TimePicker @comfirm="comfirmTimePicker" :show="show2"  @close="show2 = false" ></TimePicker>
    
  </view>
</template>

<script setup>
  import ExpressTimePicker from './components/ExpressTimePicker/ExpressTimePicker'
  import TimePicker from './components/TimePicker/TimePicker'
  import Title from '@/components/MainUI/Title.vue'
  import Item from '@/components/MainUI/Item.vue'
  
  
  let show = $ref(false)
  let show2 = $ref(false)
  const comfirmTimePicker = (value)=>{
    console.log("comfirmTimePicker--:",value)
  }
  const conformExpressTime = (value)=>{
    console.log("conformExpressTime:",value)
  }
</script>

<style lang="scss" scoped>
  .TimeSelect{
    padding: 24rpx;
  }
</style>
