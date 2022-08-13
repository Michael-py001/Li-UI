<template>
  <view class="form" :style="{padding:padding}">
    <view class="form-input" :style="formInputStyle" :class="{'column':direction=='column'}">
      <view class="label" :style="labelStyle">
        {{label}}
      </view>
      <view class="imgs" v-if="!noEditValue">
        <template v-if="imgList.length>0">
          <view class="img-wrap" v-for="(item,index) in imgList" :key="index">
            <image class="img" :src="item" mode="aspectFill" @click.stop="previewImg(index,imgList)"></image>
            <image :src="`/static/Form/ChooseImages/${deleteIconType=='one'?'close':'close2'}.png`" mode="aspectFill" class="delete" :class="{'delete2':deleteIconType!='one'}" @click="deleteImg">
            </image>
          </view>
          <image class="img" src="/static/Form/ChooseImages/add.png" mode="aspectFill" @click="chooseImg"
            v-if="imgList.length<limitNum"></image>
        </template>
        <template v-if="imgList.length==0">
          <view class="img-wrap">
            <image class="img" src="/static/Form/ChooseImages/add.png" mode="aspectFill" @click="chooseImg"></image>
          </view>

        </template>
      </view>
      <view class="imgs" v-if="noEditValue">
        <view class="img-wrap" v-for="(item,index) in noEditValue" :key="index">
          <image class="img" :src="item" mode="aspectFill" @click.stop="previewImg(index,noEditValue)"></image>
        </view>

      </view>
    </view>
  </view>
</template>

<script>
  /**
   * <ChooseImages label="站点图片" labelWidth="230" :imgList.sync="imgList"></ChooseImages>
   * 
   * imgList:[],//图片
   * 
   * */
  export default {
    props: {
      deleteIconType:{
        default:'one'
      },
      direction:{
        default:'row' //column
      },
      padding:{
        default:'0 24rpx'
      },
      label: {
        default: 'label'
      },
      labelWidth: {
        default: 196
      },
      limitNum: {
        default: 3
      },
      labelColor: {
        default: '#888888'
      },
      labelSize: {
        default: '28rpx'
      },
      noEditValue: { //直接显示value值模式
        default: ''
      },
      border:{
        default:true
      },
      modelValue:{
        default:()=>([])
      }
    },
    data() {
      return {
        imgList: []
      }
    },
    mounted() {
      if(this.modelValue.length>0) {
        this.imgList = this.modelValue
        this.$emit('update:modelValue', this.imgList)
      }
    },
    watch:{
      modelValue: {
        handler(value) {
          if(value.length>0) {
            //动态填充值
            setTimeout(()=>{
              this.imgList = value
              this.$emit('update:modelValue', this.imgList)
            })
          }
        },
        deep:true
      }
    },
    computed: {
      labelStyle() {
        return `width:${this.labelWidth}rpx;color:${this.labelColor};font-size:${this.labelSize}`
      },
      noEditValueStyle() {
        return `font-size:${this.labelSize};`
      },
      formInputStyle() {
        let str = ''
        if (this.noEditValue) {
          str = `border-bottom:none;` //有默认值不显示底部border
        } 
        if(this.border) {
          str +='border-bottom:  1rpx solid #E5E5E5;'
        }
        return str
      }
    },
    methods: {
      deleteImg(index) {
        this.imgList.splice(index, 1)
        this.$emit('update:imgList', this.imgList)
      },
      // 预览图片
      previewImg(index, imgList) {
        let that = this
        uni.previewImage({
          current: index,
          urls: imgList,
          success: (res) => {
            console.log(res)
          },
          fail: (res) => {

          }
        })
      },
      upLoadImg(url) {
        return new Promise((resolve, reject) => {
          this.$Request("User.UploadImage", {
            file: url,
            fileName: "iFile",
          }).then(res => {
            resolve(res.data.file_img_url)
          }).catch(err => {
            reject(err)
          })
        })
      },
      ChooseImage({
        count = 9,
        sizeType = ['original', 'compressed'],
        sourceType = ['album', 'camera']
      } = {}){
        return new Promise((resolve, reject) => {
          uni.chooseImage({
            count,
            sizeType,
            sourceType,
            success: res => {
              resolve(res)
            },
            fail: res => {
              reject(res)
            }
          })
        })
      },
      chooseImg(index) {

        this.ChooseImage({
          count: this.limitNum - this.imgList.length
        }).then(async res => {
          let tempUrl = res.tempFilePaths
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            // let url = await this.upLoadImg(tempUrl[i]) //取消内部上传，改成传给父组件临时地址上传
            this.imgList.push(tempUrl[i])
          }
          if (this.imgList.length > this.limitNum) {
            this.imgList.splice(this.limitNum)
            this.$ShowToast('超出数量限制')
          }
          this.$emit('update:modelValue', this.imgList)
          console.log("imgList:", this.imgList)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form {
    &-input {
      // margin-bottom: 24rpx;
      width: 100%;
      display: flex;
      align-items: center;
      // border-bottom: 1rpx solid #E5E5E5;
      &.column {
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 24rpx;
        .label {
          margin-bottom: 12rpx;
        }
      }
      
      .label {
        width: 196rpx;
        text-align: left;
        color: #888888;
      }

      .imgs {
        margin-top: 24rpx;
        .img {
          width: 140rpx;
          height: 140rpx;
        }

        .img-wrap {
          display: inline-block;
          box-sizing: border-box;
          text-align: left;
          position: relative;
          margin: 0 27rpx 24rpx 0;
          &:last-child {
            margin: 0 0rpx 24rpx 0;
          }
          .img {
            width: 140rpx;
            height: 140rpx;

          }

          .delete {
            position: absolute;
            top: 10rpx;
            right: 10rpx;
            content: "";
            width: 40rpx;
            height: 40rpx;
            &.delete2 {
              top: -10rpx;
              right: -10rpx;
            }
          }
        }

      }
    }
  }
</style>
