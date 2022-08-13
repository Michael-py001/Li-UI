<template>
  <scroll-view  id="scroll" :scroll-x="true" class="nav" :class="{'stopScroll':stopScroll}" :style="{'background':bgColor,'height':height}" :scroll-into-view="'item-'+(activeTab-1)" scroll-with-animation>
      <view 
        class="nav-tab"
        :style="{'width':stopScroll?`${(100 / list.length)}%`:'fit-content','color':activeTab==index?activeTextColor:fontColor,'font-size':`${activeTab==index?activeFontSize:fontSize}rpx`,...customStyle}"
        :id="`item-${index}`"
        :class="[{'active':activeTab==index}]" v-for="(item,index) in list " 
        :key="index"
        @click="handleItem(item,index)">
        <text class="text">
          {{item.name}}
          <text class="date">{{item.date}}</text>
          <text class="tag" :style="{'backgroundColor':tagColor}" v-if="!useImg"></text>
        </text>
        <image class="icon" src="/static/Main/active.png" mode="aspectFill" v-if="useImg&&activeTab==index"></image>
      </view>
  </scroll-view>
</template>

<script>
  /*
    titleList:[
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
    ],
    
    <li-TopTabs :list="titleList" @change="changeTab" tagColor="#2A85F5" bgColor="#f9f9f9"></li-TopTabs>
   <li-TopTabs :list="titleList" :customStyle="{'font-weight':550}" fontColor="#333333" activeTextColor="#2A85F5" activeFontSize="32" fontSize="32" @change="changeTab" tagColor="#2A85F5" bgColor="#fff"></li-TopTabs>
    
    changeTab(index){
      console.log("tab:",index)
      this.activeTab = index
      this.RefreshList()
    },
  */
  export default {
    props: {
      height:{
        default:"100rpx"
      },
      stopScroll:{ //关闭滑动模式
        default:false
      },
      activeTextColor:{
        default:''
      },
      customStyle:{
        default:()=>({})
      },
      fontSize:{
        default:'32'
      },
      fontColor:{
        default:'#888888'
      },
      activeFontSize:{
        default:'36'
      },
      modelValue: {
        default: ""
      },
      list: {
        default: () => {}
      },
      bgColor: {
        default: "#F9F9F9"
      },
      tagColor:{
        default:"#2A85F5"
      },
      colorType: {
        default: 'red'
      },
      defaultActiveTab: {
        default:0
      },
      useImg:{
        default:false
      }
    },
    data() {
      return {
        activeTab: 0
      }
    },
    watch:{
      defaultActiveTab(value) {
        this.activeTab = value
      }
    },
    mounted() {
      this.activeTab = this.defaultActiveTab
    },
    methods: {
      handleItem(i,index) {
        this.activeTab = index
        this.$emit('input', i.id)
        this.$emit('update:modelValue', i.id)
        this.$emit('change', i.id)
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    padding: 24rpx 0 0rpx 24rpx;
    display: flex;
    height: 104rpx;
    justify-content: space-between;
    flex: 1;
    white-space: nowrap;
    &.stopScroll {
      padding:24rpx 24rpx 10rpx;
      .nav-tab {
        width: 50%;
        margin-right:0
        // height: 114rpx;
      }
    }
      .nav-tab {
        display: inline-block;
        margin-right: 49rpx;
        font-size: 32rpx;
        text-align: center;
        color: #888888;
        width: fit-content;
        transition: .1s;
        &:first-child {
          padding-left: 0;
        }
        .text {
          display: inline-block;
          z-index: 10;
          position: relative;
          font-size: 32rpx;
          .date {
            font-weight: normal;
            color: #333333;
            display: block;
            font-size: 26rpx;
          }
        }
        &.active {
          font-size: 36rpx;
          font-weight: bold;
          color: #333333;
          position: relative;
          .date {
            font-weight: bold;
            color: inherit;
          }
          .tag {
            content: '';
            position: absolute;
            bottom: -22rpx;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 8rpx;
            background: $primaryColor;
          }
           .icon {
             position: absolute;
             bottom: -9rpx;
             left: 50%;
             transform: translateX(-50%);
             width: 136rpx;
             height: 27rpx;
             z-index: 0;
           }
        }
      }
    // }
    
  }
</style>
