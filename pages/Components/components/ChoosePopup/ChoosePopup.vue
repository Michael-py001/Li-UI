<template>
  <view class="form" :style="{padding:padding}">
    <view class="form-input" :style="formInputStyle">
      <view class="label-wrap">
        <view class="must" v-if="must">
          *
        </view>
        <view class="label" :style="labelStyle">
          {{label}}
        </view>
      </view>
      <view class="value" :style="{'fontSize':valueSize}" @click="clickValue" v-if="!noEditValue">
          <view class="name" :class="{'active':innerValue}">
            {{innerValue?innerValue:holderPlaceText}}
          </view>
        <u-icon name="arrow-right" size="30" color="#C4C4C4"></u-icon>
      </view>
      <view class="noEditValue" :style="noEditValueStyle" v-else>
        {{noEditValue}}
      </view>
    </view>
    <u-datetime-picker :show="popupShow" :round="round" v-model="value1" :mode="mode" v-if="mode!=='normal'" @confirm="confirmTime" @close="popupShow=false"></u-datetime-picker>
    <!-- <u-picker :show="popupShow" :round="round" :columns="innerList" @confirm="confirm" @cancel="popupShow=false" v-if="true"></u-picker> -->
    <u-picker :show="popupShow" :round="round" :columns="innerList" @confirm="confirm" @cancel="popupShow=false" v-else></u-picker>
  </view>
</template>

<script>
  // simple : <ChoosePopup label="物品类型" labelWidth="230" :list="list" :value.sync="goodsType"></ChoosePopup>
  //<ChoosePopup  :defaultValue="{'label':'否','value':0}" :border="isStudent?true:false" height="114rpx" :list="isStudentList" label="是否是在校大学生(选填)" labelWidth="330"  holderPlaceText="请选择" v-model="isStudent"></ChoosePopup>
  /*
    list: [{
        value: '电子产品',
        label: '电子产品'
      },
      {
        value: '文件',
        label: '文件'
      }
    ],
  */
  // 时间模式 <ChoosePopup  label="报名截止时间" labelWidth="230" mode="time" holderPlaceText="选择日期" v-model="applyEndTime"></ChoosePopup>
  export default {
    emits:['click'],
    props: {
      // 是否显示圆角
      round: {
        type: [Boolean, String, Number],
        default: '24rpx'
      },
      padding:{
        default:'0 24rpx'
      },
      clickNative:{ //点击事件
        default:false
      },
      height:{
        default:'100rpx'
      },
      mode:{
        default:'normal'
      },
      list:{
        default:()=>([])
      },
      label:{
        default:'label'
      },
      labelWidth:{
        default:196
      },
      must:{ //显示星星必选
        default:false
      },
      modelValue:{
        default:''
      },
      labelColor:{
        default:'#888888'
      },
      labelSize:{
        default:'30rpx'
      },
      valueSize:{
        default:'30rpx'
      },
      noEditValue:{ //直接显示value值模式
        default:''
      },
      disabled:{
        default:false
      },
      holderPlaceText:{
        default:'请选择'
      },
      border:{
        default:true
      },
      defaultValue:{
        default:''
      }
    },
    data(){
      return {
        value1: Number(new Date()),
        popupShow:false,
        params: {
          year: true,
          month: true,
          day: true,
          hour: false,
          minute: false,
          second: false
        },
        innerValue:''        
      }
    },
    mounted() {
      if(this.defaultValue) {
        this.innerValue = this.defaultValue.label
        this.$emit('update:value',this.defaultValue.value)
        this.$emit('update:modelValue',this.defaultValue.value)
      }
      else {
        this.setDefaultValue(this.modelValue)
      }
    },
    watch:{
      popupShow(bool) {
        this.$emit('update:popupShow',bool)
      },
      modelValue(value) {
        this.setDefaultValue(value)
      }
    },
    computed:{
      innerList() {
        let arr = []
        if(this.list.length) {
          let transformList = this.list.map(i=>i.label)
          arr.push(transformList)
        }
        return arr
      },
      labelStyle(){
          return `width:${this.labelWidth}rpx;color:${this.labelColor};font-size:${this.labelSize}`
      },
      noEditValueStyle() {
        return `font-size:${this.labelSize};`
      },
      formInputStyle() {
        let str = ''
        if(this.noEditValue) {
          str = `justify-content: flex-start;border-bottom:none;`//有默认值不显示底部border
        }
        if(this.border) {
          str +='border-bottom:  1rpx solid #E5E5E5;'
        }
        if(this.height) {
          str += `height:${this.height};`
        }
        else {
          str = `justify-content: space-between;`
        }
        return str
      }
    },
    methods: {
      setDefaultValue(value) {
        if(this.list.length>0&&this.mode == 'normal') {
          //动态填充值
          setTimeout(()=>{
            let target = this.list.find(i=>i.value==value)
            if(!target) return
            this.innerValue = target.label
            this.$emit('update:value',target.value)
            this.$emit('update:modelValue',target.value)
          })
        }
        else if(this.mode!='normal') { //赋值时间
          this.innerValue = value
        }
        else {
          this.innerValue = value
        }
      },
      clickValue() {
        if(!this.disabled) {
          if(!this.clickNative) {
            this.popupShow=true
          }
          else {
            this.$emit('click')
          }
        }
        else {
          return
        }
      },
      confirm(res) {
        let {value,indexs,values} = res || {}
        if(!value) return
        let target = this.list.find(i=>i.label===value[0])
        if(target) {
          this.innerValue = target.label
          this.$emit('update:modelValue',target.value)
          this.$emit('confirm',target)
        }
        this.popupShow = false
      },
      confirmTime(value) {
        this.popupShow = false
        this.$emit('confirm',value.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form{
    background-color: #fff;
     padding: 0 24rpx;
    &-input {
      // margin-bottom: 24rpx;
     
      height: 100rpx;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // border-bottom:  1rpx solid #E5E5E5;
      
      box-sizing: border-box;
      .label-wrap {
        display: flex;
      }
      .must {
        font-size: 30rpx;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 2.0-55 Regular;
        font-weight: 55 Regular;
        text-align: left;
        color: #ff2c4c;
        line-height: 36rpx;
      }
      .label {
        width: 196rpx;
        text-align: left;
        color: #888888;
        font-size: 30rpx;
      }
      .value {
        display: flex;
        align-items: center;
        font-size: 30rpx;
        .name {
          font-size: inherit;
          color: #C4C4C4;
          margin-right: 18rpx;
          &.active {
            color: #333;
            // font-size: 34rpx;
            // font-weight: bold;
          }
        }
      }
      .noEditValue {
        color: #333333;
        font-size: 28rpx;
      }
    }
  }
  
</style>
