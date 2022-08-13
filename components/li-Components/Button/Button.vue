<template>
	<button class="c-button-warp lg" :class="[size, type,showShadow]" :style="innerCustomStyle" :disabled="disabled"
		:open-type="openType" @tap.stop="handleClick" @getphonenumber="getPhoneNumber" @getuserinfo="getUserInfo"
		@openSetting="openSetting">
		<slot>{{title}}</slot>
	</button>
</template>

<script>
	export default {
		props: {
			title: {
				type: null,
				default: '标题'
			},
			openType: {
				type: null,
				default: ''
			},
			size: {
				type: String,
				default: 'lg'
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
				default: ''
			},
			shadow: {
				default: true
			}
		},
		data() {
			return {
        
			};
		},
		computed: {
			showShadow() {
				return this.shadow ? '' : 'noShadow'
			},
      innerCustomStyle() {
        let str = ''
        if(this.disabled) {
          str += 'opacity:0.4;'
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
		background: #c4c4c4;
		color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
		&.noShadow {
			box-shadow: none !important;
		}

		&:active {
			opacity: .9;
		}

		// 主题
		&.primary {
			// background: $themeColor;
      background: linear-gradient(131deg,#2a85f5 15%, #4ab6e8 88%);
			// box-shadow: $boxShadow;
			color: #FFFFFF;
		}

		&.primaryTransparent {
			border: 1rpx solid #c7defc;
			background: rgba(199, 222, 252, .5);
			font-size: 30rpx !important;
			color: #FF6047;
		}

		&.cancel {
			background: #d1d1d1;
			color: #ffffff;
		}
    &.cancle2 {
      background: #fff;
      border: 2rpx solid #f73e3e;
      color: #f73e3e;
    }
    &.cancle3 {
      background: #fff;
      border: 2rpx solid #E5E5E5;
      color: #333333;
    }
    &.reject {
      background: linear-gradient(270deg,#ff7d74, #f73e3e);
      color: #ffffff;
    }
		&.hollow {
			background-color: transparent;
			color: #333333;
			border: 2rpx solid #e5e5e5;
		}

		&.hollowDdelete {
			color: #b2b2b2;
			background-color: transparent;
			border: none;
		}

		&.transparent {
			background-color: transparent;
			color: #b2b2b2;
			border: 2rpx solid transparent;
		}

		&.disabled {
			background: #c4c4c4;
			color: #ffffff;
		}

		&.disabledLogin {
			background: #c6cfdc;
			color: #ffffff;
		}

		&.primary-hollow {
			background-color: #ffffff;
			border: 2rpx solid $themeColor;
			color: $themeColor;
		}

		&.primary-border {
			background-color: #F3F8FF;
			border: 2rpx solid #c7defc;
			color: #FF6047;
			font-weight: bold;
		}

		&.green-border {
			background-color: #EFFCF9;
			border: 2rpx solid #a5e5d4;
			color: #03CB95;
			font-weight: bold;
		}

		&.green {
			background-color: #dcf8f0;
			border: 2rpx solid #dcf8f0;
			color: #03cb95;
			font-weight: bold;
		}

		&.LogOut {
			background-color: #F0F0F0;
			border: none;
			color: #999999;
		}

		&.default {
			background-color: #FFFFFF;
			border: 2rpx solid #e5e5e5;
			color: #333333;
		}


		&.offLine {
			background: #f6f6f6;
			border: 2rpx solid #e5e5e5;
			color: #b2b2b2;
		}

		// 大小
		&.lg {
			height: 80rpx;
			line-height: 80rpx;
			border-radius: 44rpx;
			font-size: 32rpx;
		}

		&.xl {
			height: 88rpx;
			line-height: 86rpx;
			border-radius: 44rpx;
			font-size: 32rpx;
		}

		&.xxl {
			height: 98rpx;
			line-height: 96rpx;
			border-radius: 40rpx;
			font-size: 36rpx;
		}

		&.x {
			height: 70rpx;
			line-height: 70rpx;
			border-radius: 37rpx;
			font-size: 32rpx;
		}

		&.md {
			height: 64rpx;
			line-height: 64rpx;
			border-radius: 40rpx;
			font-size: 28rpx;
		}

		&.sm {
			height: 50rpx;
			line-height: 50rpx;
			border-radius: 40rpx;
			font-size: 26rpx;
		}

		&.xs {
			height: 40rpx;
			line-height: 40rpx;
			border-radius: 40rpx;
			font-size: 26rpx;
		}
	}
</style>
