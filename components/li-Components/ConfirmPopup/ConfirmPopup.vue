<template>
	<u-popup v-model="show" :mode="mode" :border-radius="borderRadius" :closeable="closeable" :mask-close-able="maskCloseable">
			<view class="c-confirm-popup-warp" :class="{'bottom':mode=='bottom'}">
				<view class="title">
					{{title}}
				</view>
          <slot>
            <view class="content">
            	{{content||''}}
            </view>
          </slot>
				<view class="btn-row">
					<li-Button v-if="showCancel" type="hollow" size="lg" :customStyle="cancelCustomStyle" @click="handleCancel">{{cancelText}}</li-Button>
					<view class="space" v-if="showCancel&&showConfirm"></view>
					<li-Button v-if="showConfirm" size="lg" :customStyle="confirmCustomStyle" :shadow="false" @click="handleConfirm">{{confirmText}}</li-Button>
				</view>
			</view>
	</u-popup>
</template>

<script>
  // <li-ConfirmPopup  ref="canclePopup" content="您确定要取消关注吗？" @confirm="WatchPeople"/>
  import {defineExpose,ref} from 'vue'
	export default {
		props: {
      maskCloseable:{
        default:true
      },
      closeable:{
        default:false
      },
			mode: {
				default: 'center'
			},
			borderRadius: {
				default: 20
			},
			title: {
				default: '温馨提示'
			},
			content: {
				default: ""
			},
			showCancel: {
				default: true
			},
			showConfirm: {
				default: true
			},
			cancelText:{
				default:'取消'
			},
			confirmText:{
				default:'确定'
			},
			cancelCustomStyle:{
				default:"width:224rpx;"
			},
			confirmCustomStyle:{
				default:"width:224rpx;"
			}
		},
    setup() {
      let show = ref(false)
      const open = ()=> {
      	show.value = true
      }
      const close = ()=> {
      	show.value = false
      }
      defineExpose({
        open,
        close
      })
      return {
        show,
        open,
        close
      }
      
    },
		methods: {
			open() {
				this.show = true
			},
			close() {
				this.show = false
			},
			handleCancel() {
				this.$emit('cancel')
				this.close()
			},
			handleConfirm() {
				this.$emit('confirm')
				this.close()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.c-confirm-popup-warp {
		box-sizing: border-box;
		padding: 40rpx 32rpx;
		width: 630rpx;
		border-radius: 10rpx;
    &.bottom {
      width: 100%;
      .btn-row {
        @include saveBottom();
      }
    }
		.title {
			margin-bottom: 40rpx;
			line-height: 38rpx;
			font-size: 36rpx;
			font-weight: bold;
			text-align: center;
			color: #333333;
		}

		.content {
			
			line-height: 50rpx;
			font-weight: 400;
			text-align: center;
			color: #333333;
			font-size: 32rpx;
		}

		.btn-row {
			display: flex;
			align-items: center;
			justify-content: center;
      margin-top: 50rpx;
			.space {
				flex-shrink: 0;
				width: 25rpx;
			}
		}
	}
</style>
