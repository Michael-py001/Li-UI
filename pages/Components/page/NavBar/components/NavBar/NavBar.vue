<template>
	<div class="custom-nav-warp" :style="wrapStyle">
      <div class="nav-fix" :style="{'color':titleColor,...customNavStyle}" >
        <view class="content">
          <div  class="btn-warp" v-if="showBack">
          	<div class="btn back"  @click="$nav('back')" >
              <u-icon name="arrow-left" size="45" :color="btnColor" @click="$nav('back')"></u-icon>
          	</div>
          </div>
           <text class="title" v-if="title">{{title}}</text>
        </view>
      </div>
	</div>
</template>

<script>
  /*
    <li-TopColumn titleColor="#333" :showBack="true" :background="false" :isNearTop="nearTop" changeColor="#e0e8ff" title="陪练详情"/>
  */
 import {useNavHeight} from '@/share/NavHeight.js'
	export default {
		components: {
		},
		data() {
			return {}
		},
		props: {
			showBack: {
				type: Boolean,
				default: true
			},
			titleColor: {
				type: String,
				default: "#ffffff"
			},
      // 父元素是否占位
      showPlace: {
      	default: true
      },
      // 变色颜色
      changeColor:{
        default:'transparent'
      },
			title: null,//标题
			isNearTop: null,//配合NavHeight
      backgroundColor:{//背景色
        type: String,
        default: ''
      },
      btnColor:{
        type: String,
        default: '#333'
      }
		},
    setup() {
      let {isNearTop,statusBarHeight,navHeight,gapHeight,btnHeight} = useNavHeight()
      return {
        navHeight,
        statusBarHeight,
        gapHeight,
        btnHeight
      }
    },
		computed: {
      wrapStyle() {
        let str = '',
            height = 0
        if(this.showPlace) {
          height = this.navHeight + this.gapHeight/2
        }
        str += `height:${height}px`
        return str
      },
			customNavStyle() {
				let bg = ''
				let padding_top =  this.statusBarHeight
        let bgImage = ''
        let position = ''
				if(this.isNearTop) {
          if(this.changeColor) {
            if(this.changeColor.includes('gradient')) {
              bg = `background-image:${this.changeColor};`
            }
            else {
               bg = `background-color:${this.changeColor};`
            }
           
          }
				  padding_top = this.statusBarHeight
				}
				if(!this.isNearTop) {
          if(this.backgroundColor) {
            if(this.backgroundColor.includes('gradient')) {
              bg = `background-image:${this.backgroundColor};`
            }
            else {
              bg = `background-color:${this.backgroundColor};`
            }
          }
          else {
            bg = 'background-color:transparent;'
          }
				   
				}
         // return `padding-top:${padding_top}px;height:${this.navHeight}px;${bg};`
         return `padding-bottom:${this.gapHeight/2}px; padding-top:${padding_top}px;height:${this.navHeight + this.gapHeight/2}px;${bg};`
			},
		},
		methods: {
			handleSearch(e) {
				this.$emit('search', e)
			},
		}
	}
</script>


<style lang="scss" scoped>
	.custom-nav-warp {
    .use-img {
      image{
        width: 487px;
        height: 52px;
      }
    }
		.nav-fix {
      position: relative;
      display: flex;
      align-items: center;
      z-index: 100;
      box-sizing: border-box;
      padding-left: 14rpx;
      width: 100%;
      position: fixed;
      top: 0;
      transition: 0.3s;
      .content {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        .title {
          font-weight: bold;
          font-size: 34rpx;
          text-align: center;
        }
      }
      .btn-warp {
      	position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      	display: flex;
      	height: 64rpx;
        width: 64rpx;
      	border-radius: 32rpx;
        // margin-top: 10rpx;
      	.btn {
      		display: flex;
      		align-items: center;
      		justify-content: center;
      		width: 64rpx;
      		height: 64rpx;
      
      		&.back {
      			border-radius: 50%;
            image {
              width: 36rpx;
              height: 36rpx;
            }
      		}
      		&.home {
      			border-radius: 0 32rpx 32rpx 0;
      		}
      		.iconfont {
      			font-size: 36upx;
      			color: #ffffff;
      		}
      		.icon {
      			width: 36rpx;
      			height: 36rpx;
      		}
      	}
      }
		}
		.search-box {}
	}
</style>
