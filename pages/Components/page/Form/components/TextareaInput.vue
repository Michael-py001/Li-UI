<template>
  <view class="form" :style="{padding:padding}">
    <view class="form-input" :style="formInputStyle">
      <view class="label" :style="labelStyle">
        <view class="must" v-if="must">
          *
        </view>
        {{label}}
      </view>
      <view class="textarea-wrap" :class="[direction]">
        <textarea class="textarea" :show-confirm-bar="false" :style="textareaStyle" :disabled="disabled" :cursor-spacing="cursorpacing" @input="onInput" :value="innerValue" :placeholder="holderPlaceText" />
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      padding:{
        default:'0 24rpx'
      },
      value:{
        default:''
      },
      label:{
        default:'label'
      },
      holderPlaceText:{
        default:'请输入'
      },
      labelWidth:{
        default:196
      },
      labelColor: {
        default: '#888888'
      },
      labelSize: {
        default: '28rpx'
      },
      disabled:{
        default:false
      },
      border:{
        default:true
      },
      bgColor:{
        default:''
      },
      cursorSpacing:{
        default:0
      },
      must:{ //显示星星必选
        default:true
      },
      direction:{
        default:'row' ,//colunm 垂直方向 row水平方向
      },
      textareaWidth:{
        default:100
      }
    },
    watch:{
      value(value){
        this.$emit('update:value',value)
        this.$emit('input',value)
        this.innerValue = value
      },
    },
    mounted() {
      if(this.value) {
        this.innerValue = this.value
      }
    },
    data(){
      return {
        innerValue:'',
      }
    },
    computed:{
      textareaStyle(){
        return `background:${this.bgColor};width:${this.textareaWidth}%;`
      },
      labelStyle() {
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
        if (this.disabled) {
          str = `border-bottom:none;` //不可编辑不显示底部border
        } else {
          str = str + ``
        }
        if(this.direction=='row') {
          str +='display:flex;'
        }
        return str
      }
    },
    methods: {
      onInput({detail:{value}}){
        this.$emit('input',value)
        this.innerValue = this.value
      }
    }
  }
</script>

<style lang="scss">
  .form{
    padding: 24rpx 0;
    margin-bottom: 24rpx;
    &-input {
      height: 100%;
      width: 100%;
      align-items: flex-start;
      padding-bottom: 24rpx;
      .label {
        width: 196rpx;
        text-align: left;
        color: #888888;
      }
      .must {
        display: inline-block;
        font-size: 30rpx;
        font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 2.0-55 Regular;
        font-weight: 55 Regular;
        text-align: left;
        color: #ff2c4c;
        line-height: 36rpx;
      }
      .textarea-wrap {
        flex: 1;
        padding: 0 24rpx;
        &.colunm {
          margin-top: 24rpx;
        }
        .textarea {
          width: 100%;
          min-height: 116rpx;
          background: #f3f3f3;
          border-radius: 8rpx;
          padding: 20rpx;
        }
      }
    }
  }
  
</style>
