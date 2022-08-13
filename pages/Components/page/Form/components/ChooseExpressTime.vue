<template>
  <view class="form" :style="{padding:padding}">
    <view class="form-form-input" :style="formInputStyle">
      <view class="label" :style="labelStyle">
        {{label}}
      </view>
      <view class="value" @click="popupShow=true" v-if="!noEditValue">
        <view class="name">
          {{selectLabel?selectLabelCurrent:'请选择'}}
        </view>
        <u-icon name="arrow-right" size="35"></u-icon>
      </view>
      <view class="noEditValue" :style="noEditValueStyle" v-else>
        {{noEditValue}}
      </view>
    </view>
    <u-popup :show="popupShow" mode="bottom" height="800" border-radius="24" >
    		<view class="main">
          <view class="title">
            <view class="name">
              选择上门时间
            </view>
            <u-icon name="close" size="35" @click="popupShow=false"></u-icon> 
          </view>
          <view class="bottom">
            <view class="left">
              <view class="tab" :class="{'active':activeTab==0}" @click="clickTab(0)" v-if="showToday"> 
                今天
              </view>
              <view class="tab" :class="{'active':activeTab==1}"  @click="clickTab(1)">
                明天
              </view>
            </view>
            <view class="right">
              <picker-view :value="valueArr" @change="change" :indicator-style="indicatorStyle" indicator-class="active-picker" class="u-picker-view" >
                <picker-view-column >
                	<view class="u-column-item" v-for="(item, index) in timeList" :key="index" >
                		<view class="u-line-1" :class="{'active':valueArr[0]==index}">{{ item.label }}</view>
                	</view>
                </picker-view-column>
              </picker-view>
            </view>
          </view>
          <view class="comfirm-btn">
            <view class="btn" @tap.stop="popupShow=false">
              确定
            </view>
          </view>
        </view>
    </u-popup>
  </view>
</template>

<script>
  // simple : <Form label="站点名称" labelWidth="230"  holderPlaceText="请输入站点名称" v-model="phone"></Form>
  import dayjs from 'dayjs'
  export default {
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
   watch:{
     activeTab(value) {
       this.selectLabel = this.timeList[this.valueArr].label
       let date = ''
       if(value==0) {
         date = dayjs().format('YYYY-MM-DD')
       }
       else if(value==1) {
         date = dayjs().add(1, 'day').format('YYYY-MM-DD')
       }
       this.date = date
       console.log("date:",date)
       this.$emit('change',{
         date:date,
         time:this.timeList[this.valueArr].value
       })
       this.time = this.timeList[this.valueArr].value
     }
   },
    computed:{
      selectLabelCurrent(){
        let today = dayjs().format('YYYY-MM-DD')
        if(this.date == today ) {
          if(this.timeList[this.valueArr].label=='立即上门') {
            return '立即上门'
          }
          return `今天 ${this.time}`
        }
        else {
          return `明天 ${this.time}`
        }
      },
      timeList(){
        if(this.activeTab==0) {
          return this.todyTimeList
        }
        else {
          return this.nextTimeList
        }
      },
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
    mounted() {
      this.initTime()
    },
    methods: {
      clickTab(index){
        this.activeTab = index
        
      },
      initTime(){
        let hour = dayjs().hour()
        this.hour = hour
        // 超过今日最大时间，隐藏今天列表
        if(hour>=18) {
          this.activeTab = 1
          this.showToday = false
        }
        let hourStr = `${hour>=10?hour:`0${hour}`}:00-${(hour+1)>=10?hour+1:`0${hour+1}`}:00`
        let todayStart = hour
        let todayArr = [{
          label:'立即上门',
          value:hourStr
        }]
        // 生成今天的时间列表
        for(;todayStart<18;todayStart++) {
          let str = `${todayStart>=10?todayStart:`0${todayStart}`}:00-${(todayStart+1)>=10?todayStart+1:`0${todayStart+1}`}:00`
          todayArr.push({
            label:str,
            value:str
          })
        }
        
        // 生成明天的时间列表
        let NextStart = 9
        let NextArr = []
        for(;NextStart<18;NextStart++) {
          let str = `${NextStart>=10?NextStart:`0${NextStart}`}:00-${(NextStart+1)>=10?NextStart+1:`0${NextStart+1}`}:00`
          NextArr.push({
            label:str,
            value:str
          })
        }
        this.nextTimeList = NextArr
        this.todyTimeList = todayArr
        this.selectLabel = this.timeList[0].label
        let date = ''
        if(this.activeTab==0) {
          date = dayjs().format('YYYY-MM-DD')
        }
        else if(this.activeTab==1) {
          date = dayjs().add(1, 'day').format('YYYY-MM-DD')
        }
        this.date = date
        this.$emit('change',{
          date:date,
          time:this.timeList[0].value
        })
        
      },
      change({detail:{value,label}}) {
        if(this.timeList[value].value=='empty') {
          this.$ShowToast('请选择时间')
          return
        }
        else {
          this.selectLabel = this.timeList[value].label
          this.valueArr = value
          let date = ''
          if(this.activeTab==0) {
            date = dayjs().format('YYYY-MM-DD')
          }
          else if(this.activeTab==1) {
            date = dayjs().add(1, 'day').format('YYYY-MM-DD')
          }
          console.log("日期:",date,this.timeList[this.valueArr].value)
          this.$emit('change',{
            date:date,
            time:this.timeList[this.valueArr].value
          })
          this.time = this.timeList[this.valueArr].value
          if(this.shake) {
            uni.vibrateShort()
          }
        }
      }
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
