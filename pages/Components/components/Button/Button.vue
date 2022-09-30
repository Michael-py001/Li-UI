<template>
	<button 
    class="c-button-warp m" 
    :class="[size, type,{'plain':plain,'disabled':disabled}]" 
    :style="innerCustomStyle" 
    :disabled="disabled"
    :open-type="openType" 
    @tap.stop="handleClick" 
    @getphonenumber="getPhoneNumber" 
    @getuserinfo="getUserInfo"
    @openSetting="openSetting"
  >
  <view class="loading" v-show="loading">
    <Loading></Loading>
  </view>
		<slot>{{title}}</slot>
	</button>
</template>

<script>
  import Loading from '../Loading/Loading'
	export default {
    components:{
      Loading
    },
		props: {
			title: {
				type: null,
				default: '标题'
			},
      // 是否镂空
      plain:{
        type: Boolean,
        default: false
      },
			openType: {
				type: null,
				default: ''
			},
			size: {
				type: String,
				default: 'm'
			},
			type: {
				type: String,
				default: 'primary'
			},
			disabled: {
				type: Boolean,
				default: false
			},
			customStyle: {
        type: [String],
				default: ''
			},
      // 字体颜色
      textColor:{
        type: [String],
        default:'#fff'
      },
      // 按钮背景色
      bgColor:{
        type: [String],
        default:''
      },
      // 显示loading
      loading:{
        type: Boolean,
        default:false
      }
		},
		data() {
			return {
        
			};
		},
		computed: {
      innerCustomStyle() {
        let str = ''
        if(this.textColor && !this.plain) {//镂空按钮不设置颜色
          str += `color:${this.textColor};`
        }
        if(this.bgColor) {
          if(this.bgColor.includes('linear-gradient')) { //渐变色
            str += `background-image: ${this.bgColor};`
          }
          else {
            str += `background:${this.bgColor};`
          }
          
        }
        str += this.customStyle
        return str
      }
		},
		methods: {
			handleClick() {
				if (!this.disabled) {
          this.$u.debounce(()=>this.$emit('click'),500,true)
				} else {
					this.$emit('disabledClick');
				}
			},
			getUserInfo(e) {
				this.$emit('getuserinfo', e);
			},
			getPhoneNumber(e) {
				this.$emit('getphonenumber', e);
			},
			openSetting(e) {
				console.log('e', e)
				this.$emit('openSetting', e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.c-button-warp {
		box-sizing: border-box;
		width: 100%;
		color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading {
      margin-right: 12rpx;
    }
		&:active {
			opacity: .9;
		}
    // 主题
    &.theme {
      background: $themeColor;
      &.plain {
        background: transparent;
        color: $themeColor;
        border: 2rpx solid $themeColor;
      }
    }
		// 成功
		&.primary {
			background: $primaryColor;
      // background: linear-gradient(131deg,$themeColor 15%, #4ab6e8 88%);
      &.plain {
        background: transparent;
        color: $primaryColor;
        border: 2rpx solid $primaryColor;
      }
		}
    // 危险
    &.danger {
      background: $dangerColor;
      &.plain {
        background: transparent;
        color: $dangerColor;
        border: 2rpx solid $dangerColor;
      }
    }
    // 警告
    &.warn {
      background: $warnColor;
      &.plain {
        background: transparent;
        color: $warnColor;
        border: 2rpx solid $warnColor;
      }
    }
    // 禁用
    &.disabled {
    	opacity: .6;
      color: #fff; 
    }
    
		// 大小
		&.m {
			height: 80rpx;
			line-height: 80rpx;
			border-radius: 44rpx;
			font-size: 32rpx;
		}

		&.xl {
			height: 108rpx;
			line-height: 108rpx;
			border-radius: 64rpx;
			font-size: 36rpx;
		}
		&.s {
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 40rpx;
			font-size: 26rpx;
		}
	}
</style>
