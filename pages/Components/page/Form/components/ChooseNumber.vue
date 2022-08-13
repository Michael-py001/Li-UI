<template>
  <view class="form" :style="{padding:padding}">
    <view class="form-form-input" :style="{...formInputStyle}">
      <view class="label" :style="labelStyle">
        {{label}}
      </view>
      <view class="value" @click="popupShow=true" v-if="!noEditValue"> 
        <u-number-box v-model="innerValue" @change="valChange" buttonSize="45" min="1" :bgColor="bgColor"></u-number-box>
      </view>
      <view class="noEditValue" :style="noEditValueStyle" v-else>
        {{noEditValue}}
      </view>
    </view>
  </view>
</template>

<script>
  // simple : <Form label="站点名称" labelWidth="230"  holderPlaceText="请输入站点名称" v-model="phone"></Form>
  export default {
    props: {
      bgColor:{
        default:'#EBECEE'
      },
      height:{
        default:'100rpx'
      },
      modelValue:{
        default:1
      },
      label:{
        default:'label'
      },
      labelWidth:{
        default:196
      },
      labelColor:{
        default:'#888888'
      },
      labelSize:{
        default:'28rpx'
      },
      noEditValue:{ //直接显示value值模式
        default:''
      },
      padding:{
        default:'0 24rpx'
      },
    },
    data(){
      return {
        innerValue:1
      }
    },
    mounted() {
      this.innerValue = this.modelValue
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
        if(this.height) {
          str += `height:${this.height};`
        }
        return str
      }
      
    },
    methods: {
      valChange(value) {
        console.log(value)
        this.$emit('update:modelValue',value.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form{
    &-form {
      &-input {
        margin-bottom: 24rpx;
        height: 100rpx;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:  1rpx solid #E5E5E5;
        .label {
          width: 196rpx;
          text-align: left;
          color: #888888;
        }
        .value {
        }
      }
    }
  }
  
</style>
