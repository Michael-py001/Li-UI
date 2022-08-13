<template>
  <view class="imgUpload" :style="{padding:padding}">
    <div class="imgUpload-label">
    	<span class="tag" v-if="must">*</span>
    	{{label}}
    </div>
    <view class="imgUpload-img">
      <view class="item">
        <image src="/static/Form/IDCardUpload/front.png" mode="aspectFill" @click="chooseImg(0)" v-if="!waterMarkImg[0]"></image>
        <image :src="waterMarkImg[0]" mode="aspectFill" @click="chooseImg(0)" v-else></image>
        <image :src="`/static/Form/ChooseImages/${deleteIconType=='one'?'close':'close2'}.png`" mode="aspectFill" class="delete" @click="deleteImg(0)" v-if="waterMarkImg[0]"></image>
        <view class="text">
          请上传身份证国徽面
        </view>
      </view>
      <view class="item">
        <image src="/static/Form/IDCardUpload/back.png" mode="aspectFill"  @click="chooseImg(1)" v-if="!waterMarkImg[1]"></image>
        <image :src="waterMarkImg[1]" mode="aspectFill"  @click="chooseImg(1)" v-else></image>
        <image :src="`/static/Form/ChooseImages/${deleteIconType=='one'?'close':'close2'}.png`" mode="aspectFill" class="delete" @click="deleteImg(1)" v-if="waterMarkImg[1]"></image>
        <view class="text">
          请上传身份证人像面
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  /**
   * <IDCardUpload :imgList.sync="idCardList"  label="请上传您的有效身份证"></IDCardUpload>
   * 
   * 对外输出 imgList 数组 ['xxx','xxx']
   * 
   * */
  export default {
    props:{
     
      padding:{
        default:'0 24rpx'
      },
      label: { //label文字
        type: null,
        default: ''
      },
      must: { //显示*星号
        type: Boolean,
        default: false
      },
      modelValue:{
        default:()=>([])
      }
    },
    data(){
      return {
        imgList:[],//图片数组
        waterMark:''
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
    computed:{
      waterMarkImg(){
        let waterMark = this.waterMark
        let list = this.imgList.map(item=>{
          return item + waterMark
        })
        return list
      }
      
    },
    methods:{
      deleteImg(index) {
        this.imgList.splice(index,1)
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
      upLoadImg(url){
        return new Promise((resolve,reject)=>{
          this.$Request("User.UploadImage", {
          	file: url,
          	fileName: "file",
          }).then(res => {
          	resolve(res.data.file_img_url)
          }).catch(err => {
          	reject(err)
          })
        })
        
      },
      chooseImg(index){
        this.ChooseImage({count:1}).then(async res=>{
          let tempUrl = res.tempFilePaths[0]
          // let url = await this.upLoadImg(tempUrl)
          this.$set(this.imgList,index,tempUrl)
          this.$emit('update:imgList',this.imgList)
          console.log("imgList:",this.imgList)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .imgUpload{
    padding: 34rpx 0;
    margin: 36rpx 0 24rpx;
    // border-bottom: 1rpx solid #e5e5e5;
    
    &-label {
    	margin: 0 10rpx;
      // height: 103rpx;
      margin-bottom: 36rpx;
      font-size: 30rpx;
      color: #888888;
      
      span, .span {
        color: #ff4366;
      }
    }
    &-img {
      display: flex;
      justify-content: space-between;
      .item {
        // width: 50%;
        position: relative;
        image {
          width: 294rpx;
          height: 188rpx;
        }
        .delete {
          position: absolute;
          top: 10rpx;
          right: 20rpx;
          content: "";
          width: 40rpx;
          height: 40rpx;
        }
        .text {
          margin-top: 24rpx;
          font-size: 24rpx;
          text-align: center;
          color: #b2b2b2;
        }
      }
    }
  }
</style>
