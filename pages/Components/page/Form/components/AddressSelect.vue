<template>
  <view class="form" :style="{padding:padding}">
    <view class="form-input" :style="formInputStyle">
      <view class="must" v-if="must">
        *
      </view>
      <view class="label" :style="labelStyle">
        {{label}}
      </view>
      <view class="content" x>
        <!-- 没有坐标不能编辑 -->
        <textarea :type="type"  :disabled="true" :value="address" @input="onInput" :placeholder="holderPlaceText"  placeholder-class="textarea-placeholder" @click="openLocation" v-if="disabled"/>
        <!-- 可以编辑 -->
        <textarea :type="type"   :value="address" @input="onInput" :placeholder="holderPlaceText"  placeholder-class="textarea-placeholder" @click="showTip" v-else/>
        <u-icon name="map" size="44" color="#FF8F4E" @click="openLocation"></u-icon>
      </view>
    </view>
  </view>
</template>

<script>
  /**
   * <AddressSelect label="详细地址" labelWidth="230" disabled holderPlaceText="请选择详细地址" @comfirm="comfirmAddress"></AddressSelect>
   * 
   * comfirmAddress(address){
        console.log("address:",address)
        this.addressDetail = address
      },
   * 
   * */
  export default {
    props: {
      phone:{
        default:''
      },
      type:{
        default:'string'
      },
      must:{ //显示星星必选
        default:false
      },
      mode:{
        default:'normal',//getCode 获取验证码
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
      labelColor:{ //label颜色
        default:'#888888'
      },
      disabled:{ //没有坐标是否禁用编辑
        default:false
      },
      location:{
        default:''
      },
      value:{
        default:''
      },
      border:{
        default:true
      },
      padding:{
        default:'0 24rpx'
      },
    },
    data(){
      return {
        address:'',
        latitude:'',
        longitude:''
      }
    },
    watch:{
      value(value) {
        this.address = value
      }
    },
    computed:{
      labelStyle(){
          return `width:${this.labelWidth}rpx;color:${this.labelColor};`
      },
      formInputStyle() {
        let str = ''
        if(this.border) {
          str +='border-bottom:  1rpx solid #E5E5E5;'
        }
        if(this.height) {
          str += `height:${this.height}rpx;`
        }
        return str
      },
    },
    methods: {
      showTip(){
        this.$ShowToast('请填写定位附近区域')
      },
      WechatAuthorize(scope){
        let _this = this
        return new Promise((resolve, reject) => {
          uni.authorize({
            scope: `scope.${scope}`,
            success: res => {
              resolve(res)
            },
            fail: res => {
              console.log("授权--:",res)
              _this.$ShowToast(res)
              reject(res)
            }
          })
        })
      },
      GetSetting(scope) {
        let _this = this
        return new Promise((resolve,reject)=>{
          uni.getSetting({
            success ({authSetting}) {
              console.log(authSetting)
              if(authSetting[`scope.${scope}`] !== false) {
                resolve()
              }
              else {
                _this.WechatAuthorize(scope).then(()=>{
                  resolve()
                }).catch(err=>{
                  // _this.$ShowToast('授权失败')
                  _this.$ShowConfirm('您尚未授权，是否前往授权',{
                    confirmText:'去授权'
                  }).then(()=>{
                    _this.$nav('User.Authorization',{
                      scope:scope
                    })
                  })
                  reject()
                })
              }
            },
            fail(err) {
              _this.$ShowToast(err)
            }
          })
        })
      },
      async openLocation(){
        let _this = this
        this.GetSetting('userLocation').then(res=>{
          uni.getLocation({
          	type: 'gcj02', //返回可以用于uni.openLocation的经纬度
            altitude:true,//高精度
          	success: function(res) {
          		const latitude = res.latitude;
          		const longitude = res.longitude;
          		uni.chooseLocation({
                latitude:latitude,
                longitude:longitude,
                success: function (res) {
                    console.log('位置名称：' + res.name);
                    console.log('详细地址：' + res.address);
                    console.log('纬度：' + res.latitude);
                    console.log('经度：' + res.longitude);
                    _this.$emit('comfirm',{
                      address:res.address + res.name,
                      latitude:res.latitude,
                      longitude:res.longitude,
                    })
                    _this.address = res.address + res.name
                    _this.latitude = res.latitude
                    _this.longitude = res.longitude
                }
          		});
          	},fail(err) {
              console.log(err)
          	  _this.$ShowToast('请打开手机位置信息服务')
          	}
          });
        }).catch((err)=>{console.log(err)})
       
      },
      onInput({detail:{value}}){
        console.log("value:",value)
        this.$emit('input',value)
        this.$emit('update:value',value)
        this.$emit('update:latitude',this.latitude)
        this.$emit('update:longitude',this.longitude)
      }
    }
  }
</script>

<style lang="scss">
  .textarea-placeholder {
    color: #C4C4C4;
  }
  .form{
    &-input {
      margin-bottom: 24rpx;
      height: 100rpx;
      width: 100%;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      .label {
        width: 196rpx;
        text-align: left;
        color: #888888;
      }
      .content {
        display: flex;
        align-items: center;
        padding: 12rpx 0;
        input {
          flex: 1;
        }
        textarea {
          width: 430rpx;
          height: 90rpx;
          padding: 5rpx;
        }
      }
     
    }
  }
  
</style>
