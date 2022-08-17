<template>
  <view class="myCalendar">
    <u-popup :show="show" @close="closeHandler" mode="bottom" border-radius="20">
     <view class="myCalendar-content">
       <view class="myCalendar-content-option">
        <text class="cancle" @click="$emit('close')">取消</text>
         <text class="title">选择日期区间</text>
         <text class="comfirm" @click="comfirm">确认</text>
       </view>
       <view class="myCalendar-content-select">
         <view @click="active='start'" class="text" :class="{'active':active=='start'}">
           <text>开始日期</text>
           <text>{{startDate}}</text>
         </view>
         <view @click="active='end'" class="text" :class="{'active':active=='end'}">
           <text>结束日期</text>
           <text>{{endDate}}</text>
         </view>
       </view>
       <view class="myCalendar-content-timePicker">
         <TimePicker-Item v-show="active=='start'" v-model:Date="startDate"></TimePicker-Item>
         <TimePicker-Item v-show="active=='end'" v-model:Date="endDate"></TimePicker-Item>
       </view>
     </view>
    </u-popup>
  </view>
</template>

<script>
  import TimePickerItem from './TimePicker-Item.vue'
  export default {
    props:{
      show:{ //是否显示
        type:Boolean,
        default:false  //是否开启震动
      },
      // 是否允许点击遮罩关闭选择器
      closeOnClickOverlay: {
          type: Boolean,
          default: true
      },
    },
    components:{
      TimePickerItem,
    },
    data(){
      return {
        active:'start',
        timeOneShow:true,
        startDate:'',
        endDate:''
      }
    },
    computed:{
    },
    methods:{
      closeHandler() {
        if(this.closeOnClickOverlay) {
          this.$emit('close')
        }
      },
      comfirm() {
         this.$emit('comfirm',{
           startDate:this.startDate,
           endDate:this.endDate
         })
         this.$emit('close')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .myCalendar{
    background-color: #FFFFFF;
    width: 750rpx;
    box-sizing: border-box;
    &-content {
      padding: 0 32rpx;
      height: 900rpx;
      &-select {
        display: flex;
        flex-direction: row;
        width: 750rpx;
        // height: 96rpx;
        .text {
          font-size: 28rpx;
          font-family: PingFangSC-Medium;
          text-align: center;
          color: #969799;
          line-height: 40rpx;
          margin-right: 48rpx;
          padding: 30rpx;
          &.active {
            color: #323233;
            position: relative;
            &::after {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              content: '';
              width: 80rpx;
              height: 6rpx;
              background: #3c7ef8;
              border-radius: 3rpx;
            }
          }
        }
        
      }
      &-option {
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 100%;
        height: 96rpx;
        .cancle{
          display: inline-block;
          width: 20%;
          font-size: 28rpx;
          text-align: left;
          color: #969799;
          line-height: 40rpx;
        }
        .title {
          flex: 1;
          display: inline-block;
          font-size: 31rpx;
          text-align: center;
          color: #323233;
          line-height: 43rpx;
        }
        .comfirm {
          width: 20%;
          display: inline-block;
          font-size: 28rpx;
          text-align: right;
          color: #3c7ef8;
          line-height: 40rpx;
        }
      }
    }
    
  }
</style>
