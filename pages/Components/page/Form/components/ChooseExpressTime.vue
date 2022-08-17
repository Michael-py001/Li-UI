<template>
  <view class="form" :style="{padding:padding}">
    <view class="form-form-input" :style="formInputStyle">
      <view class="label" :style="labelStyle">
        {{label}}
      </view>
      <view class="value" @click="popupShow=true" v-if="!noEditValue">
        <view class="name">
          {{selectLabel?selectLabel:'请选择'}}
        </view>
        <u-icon name="arrow-right" size="30" color="#C4C4C4"></u-icon>
      </view>
      <view class="noEditValue" :style="noEditValueStyle" v-else>
        {{noEditValue}}
      </view>
    </view>
    <ExpressTimePicker :show="popupShow"  @close="popupShow = false" shake @conform="conformExpressTime"></ExpressTimePicker>
  </view>
</template>

<script>
  // simple :<ChooseExpressTime shake label="期望上门时间" labelWidth="230" :value="expressTime" @change="expressTimeChange"></ChooseExpressTime>
  import ExpressTimePicker from '../../TimeSelect/components/ExpressTimePicker/ExpressTimePicker'
  import dayjs from 'dayjs'
  export default {
    components:{
      ExpressTimePicker
    },
    props: {
      padding:{
        default:'0 24rpx'
      },
      border:{
        default:true
      },
      shake:{
        type:Boolean,
        default:false  //是否开启震动
      },
      label:{
        default:'label'
      },
      labelWidth:{
        default:196
      },
      value:{
        default:''
      },
      labelColor:{
        default:'#888888'
      },
      labelSize:{
        default:'28rpx'
      },
      noEditValue:{ //直接显示value值模式
        default:''
      }
    },
    data(){
      return {
        popupShow:false,
        activeTab:0,
        indicatorStyle:'',
        valueArr:[0],
        todyTimeList:[],//今天时间列表
        nextTimeList:[],//明天时间列表,
        selectLabel:'',
        showToday:true,
        date:'',
        time:''
      }
    },
    computed:{
      labelStyle(){
          return `width:${this.labelWidth}rpx;color:${this.labelColor};font-size:${this.labelSize}`
      },
      noEditValueStyle() {
        return `font-size:${this.labelSize};`
      },
      formInputStyle() {
        let str = ''
        if(this.border) {
          str +='border-bottom:  1rpx solid #E5E5E5;'
        }
        if(this.noEditValue) {
          str += `justify-content: flex-start;border-bottom:none;`//有默认值不显示底部border
        }
        else {
          str += `justify-content: space-between;`
        }
        return str
      }
    },
    methods: {
      conformExpressTime({date,time,label}) {
        this.selectLabel = label
        this.$emit('confirm',{
          date:date,
          time:time,
        })
        this.$emit('close')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .u-picker-view {
  	height: 100%;
  	box-sizing: border-box;
  }
  .u-column-item {
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	font-size: 32rpx;
  	color: $u-main-color;
  	padding: 0 8rpx;
    .u-line-1 {
      transition: all 0.1s;
    }
    .active {
      color: #FF8F4E;
      font-size: 36rpx;
    }
  }
  // 弹窗样式
  .main {
    padding: 44rpx 29rpx 40rpx;
    padding-bottom: 150rpx;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24rpx;
      .name {
        font-size: 40rpx;
        font-weight: 600;
        text-align: left;
        color: #333333;
      }
    }
    .bottom {
      flex: 1;
      display: flex;
      .left {
        display: flex;
        flex-direction: column;
        .tab {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 34rpx;
          font-weight: 500;
          background: #e5e5e5;
          color: #333;
          width: 172rpx;
          height: 298rpx;
          &.active {
            background-color: #f4f4f4;
            color: #ff8f4e;
            font-weight: bold;
            font-size: 38rpx;
          }
        }
      }
      .right {
        flex: 1;
      }
    }
    .comfirm-btn {
      position: fixed;
      width: 100%;
      bottom: 24rpx;
      left: 0;
      z-index: 9999;
      padding: 16rpx 20rpx;
      box-sizing: border-box;
      @include saveBottom();
      .btn {
        height: 96rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 36rpx;
        background: linear-gradient(90deg,#ff8f4e, #ff3029);
        border-radius: 48rpx;
        box-shadow: 0rpx 6rpx 14rpx 0rpx rgba(255,48,41,0.20); 
        
        box-sizing: border-box;
      }
    }
  }
  .form{
    &-form {
      &-input {
        height: 100rpx;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .label {
          width: 196rpx;
          text-align: left;
          color: #888888;
        }
        .value {
          display: flex;
          align-items: center;
          flex: 1;
          justify-content: flex-end;
          .name {
            font-size: 30rpx;
            color: #333333;
            margin-right: 18rpx;
          }
        }
      }
    }
  }
  
</style>
