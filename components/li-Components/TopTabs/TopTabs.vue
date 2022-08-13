<template>
  <scroll-view  id="scroll" :scroll-x="true" class="nav" :class="{'stopScroll':stopScroll}" :style="{'background':bgColor}" :scroll-into-view="'item-'+(activeTab-2)" scroll-with-animation>
    <view class="list" :class="{'autoWidth':stopScroll&&autoWidth}">
      <view
        class="nav-tab"
        :style="{'width':stopScroll?`${(100 / list.length)}%`:'fit-content','color':activeTab==index?activeTextColor:fontColor,'font-size':`${activeTab==index?activeFontSize:fontSize}rpx`,...customStyle}"
        :id="`item-${index}`"
        :class="[{'active':activeTab==index,'useImg':useImg}]" v-for="(item,index) in list " 
        :key="index"
        @click="handleItem(item,index)">
        <text class="text">
          {{item.name}}
          <text class="tag" :style="{'backgroundColor':tagColor,'width':tagWidth}" v-if="!useImg"></text>
        </text>
        <image class="icon" src="/static/Main/active.png" mode="aspectFill" v-if="useImg&&activeTab==index"></image>
      </view>
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
    
    <li-TopTabs :list="titleList" @change="changeTab" tagColor="#2A85F5" bgColor="#f9f9f9" autoWidth></li-TopTabs>
   <li-TopTabs :list="titleList" :customStyle="{'font-weight':550}" fontColor="#333333" activeTextColor="#2A85F5" activeFontSize="32" fontSize="32" @change="changeTab" tagColor="#2A85F5" bgColor="#fff"></li-TopTabs>
   <li-TopTabs :list="titleList" v-model="activeTab"  bgColor="#fff" height="100rpx" ></li-TopTabs>
    
    changeTab(index){
      console.log("tab:",index)
      this.activeTab = index
      this.RefreshList()
    },
  */
  export default {
    props: {
      // height:{
      //   default:"90rpx"
      // },
      stopScroll:{ //关闭滑动模式(默认开启) 与autoWidth互斥
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
      },
      autoWidth:{
        type:Boolean,
        default:true //自动拉伸宽度
      },
      tagWidth:{
        default:'50%'
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
    display: flex;
    height: 100rpx;
    justify-content: space-between;
    flex: 1;
    white-space: nowrap;
    padding:24rpx 0rpx 0rpx 24rpx;
    .list {
      // padding: 24rpx 0 0rpx 24rpx;
      display: flex;
      width: max-content;
      &.autoWidth {
        justify-content: space-around;
        width: 100%;
      }
    }
    &.stopScroll {
      padding:24rpx 0rpx 0rpx;
      box-sizing: border-box;
      .nav-tab {
        width: 50%;
        margin-right:0
        // height: 114rpx;
      }
    }
      .nav-tab {
        display: inline-block;
        margin-right: 32rpx;
        font-size: 32rpx;
        text-align: center;
        color: #888888;
        .text {
          display: inline-block;
          z-index: 10;
          position: relative;
          padding: 0 10rpx;
          text-align: center;
        }
        &.useImg {
          min-width: 150rpx;
        }
        &.active {
          font-size: 36rpx;
          font-weight: bold;
          color: #333333;
          position: relative;
          .text {
            font-weight: bold;
          }
          .tag {
            content: '';
            position: absolute;
            bottom: -22rpx;
            left: 50%;
            transform: translateX(-50%);
            width: 50%;
            height: 8rpx;
            background: $primaryColor;
            border-radius: 4rpx;
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
