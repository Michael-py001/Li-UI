<template>
  <view class="Stars" :style="{'margin-top':marginTop}">
    <view class="flex-row">
      <image :src="count(index)" :style="{'width':size+'rpx','height':size+'rpx'}" v-for="(item,index) in maxNum" :key="index"
        @click="select(innerActiveNum-index>0,index)" />
        
    </view>
  </view>
</template>

<script>
  /*
    <Rate marginTop="12rpx" :activeNum="4" size="small" @change="change"></Rate>
  */
  export default {
    props: {
      disabled: {
        default: true
      },
      marginTop: {
        default: '0'
      },
      size: {
        default: '27',//星星大小 small middle big
      },
      maxNum: {
        default: 5
      },
      activeNum: {
        default: 0
      },
      fillIcon:{
        default:'/static/Stars/star_fill.png'
      },
      emptyIcon:{
        default:'/static/Stars/star_gray.png'
      }
      
    },
    data() {
      return {
        innerActiveNum: 0,
      }
    },
    mounted() {
      this.innerActiveNum = parseInt(this.activeNum)
    },
    watch: {
      activeNum(value) {
        this.innerActiveNum = parseInt(value)
      }
    },
    methods: {
     count(index) {
       if (this.innerActiveNum - index > 0) {
         return this.fillIcon
       } else {
         return this.emptyIcon
       }
     },
      select(isFill, index) {
        if (this.disabled) return
        this.innerActiveNum = index + 1
        this.$emit('change',this.innerActiveNum) //返回点击的星星数量
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Stars {
    margin-top: 12rpx;

    .flex-row {
      display: flex;
      flex-direction: row;

      &.small {
        image {
          width: 29rpx;
          height: 27rpx;
        }
      }

      &.middle {
        image {
          width: 37rpx;
          height: 35rpx;
        }
      }
      &.big {
        image {
          width: 47rpx;
          height: 45rpx;
        }
      }

      image {
        width: 37rpx;
        height: 35rpx;
        margin-right: 4rpx
      }
    }
  }
</style>
