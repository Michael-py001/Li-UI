<template>
  <view class="EChart">
    <Box 
      src="/static/Chart/Pie.png" 
      url="Components.EChart.Pie"
      title="饼图"
    />
    <Box
      src="/static/Chart/Line.png" 
      url="Components.EChart.line"
      title="折线图"
    />
    <Box
      src="/static/Chart/Column.png" 
      url="Components.EChart.column"
      title="柱状图"
    />
    <!-- view class="box">
      <Title name="反馈组件"></Title>
      <Item name="ConfirmPopup 确认弹窗组件" url="Components.ConfirmPopup"></Item>
    </view> -->
  </view>
</template>

<script setup>
  import Title from '@/components/MainUI/Title.vue'
  import Item from '@/components/MainUI/Item.vue'
  import Box from '@/components/MainUI/Box.vue'
</script>

<style lang="scss" scoped>
  .EChart {
    padding: 24rpx;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-row-gap: 24rpx;
  }
</style>