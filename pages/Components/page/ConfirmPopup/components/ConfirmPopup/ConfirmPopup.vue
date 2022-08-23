<template>
	<u-popup :show="show" :mode="mode" :border-radius="borderRadius" :safeAreaInsetBottom="false">
			<view class="c-confirm-popup-warp">
				<view class="title">
					{{title}}
				</view>
        <slot>
          <view class="content">
            {{content||''}}
          </view>
        </slot>
				<view class="btn-row">
					<li-button v-if="showCancel" type="hollow" size="lg" :customStyle="cancelCustomStyle" @click="handleCancel">{{cancelText}}</li-button>
					<view class="space" v-if="showCancel&&showConfirm"></view>
					<li-button v-if="showConfirm" size="lg" :customStyle="confirmCustomStyle" :shadow="false" @click="handleConfirm">{{confirmText}}</li-button>
				</view>
			</view>
	</u-popup>
</template>

<script>
  // <li-ConfirmPopup  ref="canclePopup" content="您确定要取消关注吗？" @confirm="WatchPeople"/>
	export default {
		props: {
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
			},
      show:{
        type:Boolean,
        default:false
      }
		},
		data() {
			return {
			};
		},
		methods: {
			handleCancel() {
				this.$emit('cancel')
			},
			handleConfirm() {
				this.$emit('confirm')
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

		.title {
			margin-bottom: 40rpx;
			line-height: 38rpx;
			font-size: 36rpx;
			font-weight: bold;
			text-align: center;
			color: #333333;
		}

		.content {
			margin-bottom: 50rpx;
			line-height: 50rpx;
			font-weight: 400;
			text-align: center;
			color: #333333;
			font-size: 32rpx;
		}

		.btn-row {
      margin-top: 24rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.space {
				flex-shrink: 0;
				width: 25rpx;
			}
		}
	}
</style>
