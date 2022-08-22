<template>
  <view class="Tabs">
    <view class="title">
      <Title name="滚动模式"></Title>
    </view>
    <TopTabs :list="titleList" v-model="activeTab"  bgColor="#fff" height="100rpx"></TopTabs>
    <view class="title">
      <Title name="禁用滚动"></Title>
    </view>
    <TopTabs :list="titleList2" v-model="activeTab"  bgColor="#fff" height="100rpx" stopScroll></TopTabs>
    <view class="title">
      <Title name="自定义滑块颜色"></Title>
    </view>
    <TopTabs :list="titleList2" v-model="activeTab" tagColor="#f56c6c"  bgColor="#fff" height="100rpx" stopScroll></TopTabs>
    <view class="title">
      <Title name="自定义字体颜色"></Title>
    </view>
    <TopTabs :list="titleList2" v-model="activeTab" tagColor="#55aaff" fontColor="#82baff" activeTextColor="#55aaff" bgColor="#fff" height="100rpx" stopScroll></TopTabs>
    <view class="title">
      <Title name="自定义背景色"></Title>
    </view>
    <TopTabs :list="titleList2" v-model="activeTab" tagColor="#55aaff"  fontColor="#4aa2ff" activeTextColor="#55aaff" bgColor="rgba(85, 170, 255,0.2)" height="100rpx" stopScroll></TopTabs>
    
  </view>
</template>

<script setup>
  import TopTabs from './components/TopTabs/TopTabs'
  import Title from '@/components/MainUI/Title.vue'
  
  
  let activeTab = $ref(0)
  let titleList = [
      {
        id:0,
        name:'全部'
      },
      {
        id:10,
        name:'审核中'
      },
      {
        id:30,
        name:'已通过'
      },
      {
        id:20,
        name:'驳回'
      },
      {
        id:40,
        name:'已发放'
      },
      {
        id:50,
        name:'驳回'
      },
      {
        id:60,
        name:'已发放'
      },
    ]
    
  let titleList2 = [
      {
        id:0,
        name:'全部'
      },
      {
        id:10,
        name:'审核中'
      },
      {
        id:30,
        name:'已通过'
      },
      {
        id:20,
        name:'驳回'
      },
      {
        id:40,
        name:'已发放'
      }
    ]
</script>

<style lang="scss" scoped>
  .Tabs{
    .title {
      padding: 24rpx 24rpx 12rpx;
    }
    
  }
</style>
