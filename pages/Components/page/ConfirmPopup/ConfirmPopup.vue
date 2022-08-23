<template>
  <view class="ConfirmPopup">
    <Title name="基本展示"></Title>
    <Item name="属性传入内容" @click="show1 = true"></Item>
    <ConfirmPopup ref="ConfirmPopup1" :show="show1" content="可以通过content属性传入内容" @confirm="confirmPopup1" @cancel="show1=false"></ConfirmPopup>
    <Item name="slot插槽传入内容" @click="show2 = true"></Item>
    <ConfirmPopup ref="ConfirmPopup2" @confirm="confirmPopup2" :show="show2" @cancel="show2=false">
        <view class="content" >
          通过slot传入内容
        </view>
        <text>
          1. xxx \n
          2. xxx \n
          3. xxx \n
        </text>
    </ConfirmPopup>
    <Title name="自定义功能"></Title>
    
    <Item name="自定义按钮文字" @click="show3 = true"></Item>
    <Item name="自定义标题" @click="show4 = true"></Item>
    <Item name="隐藏取消按钮" @click="show5 = true"></Item>
    <Item name="隐藏确定按钮" @click="show6 = true"></Item>
    <Item name="自定义按钮样式" @click="show7 = true"></Item>
    
    <ConfirmPopup ref="ConfirmPopup1" :show="show3" content="自定义按钮文字" cancelText="再想想" confirmText="确定好了" @confirm="show3=false" @cancel="show3=false"></ConfirmPopup>
    <ConfirmPopup ref="ConfirmPopup1" :show="show4" content="自定义标题" title="出错了~" @confirm="show4=false" @cancel="show4=false"></ConfirmPopup>
    <ConfirmPopup ref="ConfirmPopup1" :show="show5" content="隐藏取消按钮" :showCancel="false" @confirm="show5=false" @cancel="show5=false"></ConfirmPopup>
    <ConfirmPopup ref="ConfirmPopup1" :show="show6" content="隐藏确定按钮" :showConfirm="false" @confirm="show6=false" @cancel="show6=false"></ConfirmPopup>
    <ConfirmPopup ref="ConfirmPopup1" :show="show7" content="自定义按钮样式" confirmCustomStyle="width:300rpx;background:#00b26a" :showCancel="false" @confirm="show7=false" @cancel="show7=false"></ConfirmPopup>
  </view>
</template>

<script setup>
  import Title from '@/components/MainUI/Title.vue'
  import Item from '@/components/MainUI/Item.vue'
  import ConfirmPopup from './components/ConfirmPopup/ConfirmPopup'
  let show1 = $ref(false),
      show2 = $ref(false),
      show3 = $ref(false),
      show4 = $ref(false),
      show5 = $ref(false),
      show6 = $ref(false),
      show7 = $ref(false)
  
  const confirmPopup1 = ()=>{
    show1 = false
  }
  const confirmPopup2 = ()=>{
    show2 = false
  }
</script>

<style lang="scss" scoped>
  .ConfirmPopup{
    padding: 24rpx;
  }
</style>
