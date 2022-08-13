<template>
  <view class="Search-containor">
    <view class="Search">
      <u-search height="68" :shape="shape" :clearabled="true" :input-align="inputAlign" :placeholder="placeholder" v-model="keyword" :show-action="false" :bg-color="bgColor" search-icon-color="#C4C4C4" @search="change" @blur="change" @clear="claer"></u-search>
    </view>
    <view class="btn">
      搜索
    </view>
  </view>
</template>
<script>
  // <li-Search @change="search" placeholder="输入搜索内容"></li-Search>
  export default {
    props:{
      inputAlign:{ //输入框内容水平对齐方式
        default:'left'
      },
      shape:{
        default:'square', //square -方形带圆角，round(默认)-半圆形
      },
      placeholder:{
        default:'请输入关键字'
      },
      bgColor:{
        default:'#fff'
      },
      clearKeyword:{ //是否搜索后清除搜索框文字
        default:false
      }
    },
    data() {
      return {
        keyword:''
      }
    },
    watch:{
      // keyword() {
      //   this.change()
      // }
    },
    methods:{
      change(){
        setTimeout(()=>{
          this.$emit('change',this.keyword)
          if(this.clearKeyword) {
            setTimeout(()=>{
              this.keyword = ''
            },200)
          }
          // this.claer()
        },200) //延迟执行 以便清空空间清除值后执行
        
      },
      claer() {
        this.keyword = ''
      }
      
    }
  }
</script>
<style lang="scss">
  .Search-containor {
     display: flex;
  }
  .Search {
   flex: 1;
   box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(21,138,255,0.16);
   border-radius: 36rpx;
  }
  .btn {
    width: 123rpx;
    height: 72rpx;
    background: linear-gradient(131deg,#2a85f5 15%, #4ab6e8 88%);
    border: 1rpx solid rgba(0,0,0,0.00);
    border-radius: 37rpx;
    box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(21,138,255,0.16); 
    margin-left: 16rpx;
    font-size: 32rpx;
    text-align: center;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
</style>