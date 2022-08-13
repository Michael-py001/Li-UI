<template>
  <view class="Row">
    <view class="label" :style="labelStyle">
      {{label}}
    </view>
    <view class="value">
      {{value}}
    </view>
  </view>
</template>

<script setup>
  import {computed} from 'vue'
  const props = defineProps({
    label:'',
    value:'',
    labelWidth:{
      default:200
    }
  })
  const labelStyle = computed(()=>`width:${props.labelWidth}rpx`)
</script>

<style lang="scss" scoped>
  .Row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15rpx 0;
    background-color: #fff;
    .label {
      font-size: 30rpx;
      text-align: left;
      color: #888888;
    }
    .value {
      font-size: 30rpx;
      // font-weight: bold;
      text-align: right;
      color: #000;
      flex: 1;
    }
  }
</style>