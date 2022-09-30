<template>
  <view class="form" :style="{padding:padding}">
    <view class="form-input" :style="formInputStyle">
      <view class="must" v-if="must">
        *
      </view>
      <view class="label" :style="labelStyle">
        {{label}}
      </view>
      <input :type="type" :cursor-spacing="cursorSpacing" :style="inputStyle" :disabled="disabled" :value="innerValue" @input="onInput" :placeholder="holderPlaceText"  placeholder-class="placeholderClass"/>
      <template v-if="mode=='getCode'">
        <view class="form-input-code" @click="getCode">
          {{isSendCode?countdowNum:'获取验证码'}}
        </view>
      </template>
      <slot name="pix"></slot>
    </view>
  </view>
</template>

<script>
  // <Form label="站点名称" labelWidth="230"  holderPlaceText="请输入站点名称" v-model="phone"></Form>
  /*
    <TextInput label="陪练单价" height="114rpx" labelWidth="230"  holderPlaceText="请输入陪练单价" v-model="name">
      <template #pix>
        <view>/小时</view>
      </template>
    </TextInput>
  */
  // labelWidth 默认196rpx
  export default {
    emits:['update:modelValue'],
    props: {
      padding:{
        default:'0 24rpx'
      },
      height:{
        default:'100rpx'
      },
      cursorSpacing:{
        default:0
      },
      type:{ //input输入类型 string password
        default:'string'
      },
      mode:{
        default:'normal',//getCode 显示获取验证码 normal 普通输入
      },
      label:{ //label文字
        default:'label'
      },
      holderPlaceText:{ //holderPlace文字
        default:'请输入'
      },
      labelWidth:{ //label宽度
        default:196
      },
      disabled:{ //是否禁用input
        default:false
      },
      must:{ //显示星星必选
        default:false
      },
      fontSize:{
        default:'30'
      },
      labelColor:{
        default:'#888888'
      },
      border:{
        default:true
      },
      textAlign:{
        default:'right' //input框文字方向
      },
      value:{
        default:''
      },
      modelValue:{
        default:''
      },
      handleGetCodeFunc:{
        type:Function
      }
    },
    data(){
      return {
        innerValue:'',
        countDown:60,
        isSendCode:false,
      }
    },
    watch:{
      modelValue(value) {
        if(!this.innerValue) {
          this.innerValue = value
        }
      }
    },
    mounted() {
      // #ifdef VUE3
        this.innerValue = this.modelValue
      // #endif
      // #ifndef VUE3
        this.innerValue = this.value
      // #endif
    },
    computed:{
      countdowNum() {
        return `${this.countDown<10?'0'+this.countDown:this.countDown}s`
      },
      labelStyle(){
          return `width:${this.labelWidth}rpx;color:${this.labelColor};font-size:${this.fontSize}rpx`
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
      },
      inputStyle() {
        let str = `font-size:${this.fontSize}rpx;`
        str +=`text-align:${this.textAlign};`
        return str
      }
    },
    methods: {
      getCode() {
        if(this.isSendCode) return
        console.log("this.modelValue:",this.modelValue)
        let phone = this.modelValue || this.value
        console.log("phone:",phone)
        if(!/^1\d{10}/.test(phone)) {
          this.$ShowToast('请输入正确的手机号')
          return
        }
        let data = {
          phone : phone
        }
        this.handleGetCodeFunc().then(res=>{
        // this.$Request('Play.getPhoneCode',data).then(res=>{
          this.$ShowToast('发送成功')
          this.isSendCode = true
          let timer = setInterval(()=>{
            this.countDown -=1
            if(this.countDown===0) {
              this.isSendCode = false
              this.countDown = 60
              clearInterval(timer)
            }
          },1000)
        })
        
      },
      onInput({detail:{value}}){
        this.$emit('input',value)
        this.$emit('update:modelValue',value)
      }
    }
  }
</script>

<style lang="scss">
  
  .form{
    background-color: #fff;
    padding: 0 24rpx;
      &-input {
        height: 100rpx;
        width: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        // border-bottom:  2rpx solid #E5E5E5;
        .must {
          display: inline-block;
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
        }
        input {
          flex: 1;
        }
        .placeholderClass {
          // font-size: 30rpx;
          // font-weight: 55 Regular;
          // text-align: left;
          color: #C4C4C4;
        }
        .form-input-code {
          font-size: 30rpx;
          text-align: right;
          color: #2a85f5;
          margin-left: 12rpx;
          // width: 170rpx;
          // height: 60rpx;
          // background: #073B84;
          // border-radius: 32rpx;
          // font-size: 26rpx;
          // text-align: center;
          // color: #fff;
          // line-height: 60rpx;
        }
      }
      &-btn {
        margin-top: 80rpx;
      }
  }
  
</style>
