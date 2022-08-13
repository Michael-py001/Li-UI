<template>
  <view class="Stars" :style="{'margin-top':marginTop}">
    <view class="flex-row" :class="[size]">
      <image :style="{'margin-right':gap}" :src="count(index)" v-for="(item,index) in parseInt(maxNum)" :key="index"
        @click="select(innerActiveNum-index>0,index)" />
    </view>
    <view class="showText" v-if="showText" :style="{'color':textColor}">
      {{text}}
    </view>
  </view>
</template>

<script>
  /*
    <li-Stars marginTop="12rpx" :activeNum="4" size="small"></li-Stars> 
     <li-Stars :disabled="!!info.is_evaluate" :activeNum="info.stars" @change="starChange"></li-Stars>
     <li-Stars marginTop="0rpx" :activeNum="5" size="small" gap="10rpx"></li-Stars> 
  */
  export default {
    props: {
      disabled: {
        default: true
      },
      marginTop: {
        default: '0rpx'
      },
      gap: {
        default: '4rpx'
      },
      size: {
        default: ''
      },
      maxNum: {
        default: 5
      },
      activeNum: {
        default: 0
      },
      showText:{
        default:false
      },
      textColor:{
        default:'#F73E3E'
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
    computed:{
      text() {
        let num = this.innerActiveNum / this.maxNum
        if(0<num && num<=0.2) {
          return '非常差'
        }
        else if(0.2<num && num<=0.4) {
          return '差'
        }
        else if(0.4<num && num <=0.6) {
          return '一般'
        }
        else if(0.6<num && num<=0.8) {
          return '好'
        }
        else if(0.8<num&& num<=1) {
          return '非常好'
        }
        else {
          return ''
        }
        
      }
    },
    watch: {
      activeNum(value) {
        this.innerActiveNum = parseInt(value)
      }
    },
    methods: {
     count(index) {
       if (this.innerActiveNum - index > 0) {
         return '/static/Play/star.png'
       } else {
         return '/static/Play/star_empty.png'
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
    display: flex;
    align-items: center;
    .showText {
      margin-left: 20rpx;
    }
    .flex-row {
      display: flex;
      flex-direction: row;

      &.small {
        image {
          width: 24rpx;
          height: 24rpx;
        }
      }

      &.middle {
        image {
          width: 37rpx;
          height: 35rpx;
        }
      }

      image {
        width: 42rpx;
        height: 42rpx;
        margin-right: 4rpx
      }
    }
  }
</style>
