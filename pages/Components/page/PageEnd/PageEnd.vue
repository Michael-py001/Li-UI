<template>
  <view class="PageEnd">
    <Title name="基本展示"></Title>
    <PageEnd :type='page_end_type' ></PageEnd>
    <PageEnd type='noMore'  noDataIcon="/static/PageEnd/none2.png"></PageEnd>
    <PageEnd type='loading'  noDataIcon="/static/PageEnd/none2.png"></PageEnd>
    <Title name="自定义文案及图片"></Title>
     <PageEnd :type='page_end_type' noDataText="暂无订单哟~" noDataIcon="/static/PageEnd/none2.png"></PageEnd>
     <PageEnd type='loading'  loadingText="努力加载中..." ></PageEnd>
     <Title name="使用说明"></Title>
     <text class="desc">
       该组件推荐在列表页配合ListPage.js使用，自动处理列表数据的加载状态
       <!-- 该hook对外暴露了：\n1.GetList 用来获取接口数据\n  2.list 接口返回的列表数据\n  3. page_end_type 数据加载状态(配合该组件显示不同的状态)。\n
       可自定义传入请求参数，里面自动处理下拉刷新，触底加载 -->
     </text>
  </view>
</template>

<script setup>
  import Title from '@/components/MainUI/Title.vue'
  import PageEnd from './components/PageEnd/PageEnd'
  import {useListPage} from '@/share/ListPage.js'
  
  let {GetList,RefreshList, page_end_type,list}  = useListPage()
</script>

<style lang="scss" scoped>
  .PageEnd{
    padding: 24rpx;
  }
</style>
