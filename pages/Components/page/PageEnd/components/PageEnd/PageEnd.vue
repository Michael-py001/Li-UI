<template>
	<view class="c-page-end-warp">
    <view class="nodata" v-if="type==='noData'">
      <image class="icon" :src="noDataIcon" mode="aspectFit"></image>
      <view class="text">
        {{noDataText}}
      </view>
    </view>
    <view class="noMore" v-if="type==='noMore'">
      <image class="icon" src="/static/PageEnd/nomore.png" mode="aspectFill"></image>
    </view>
    <view class="loading" v-if="type==='loading'">
      <text>{{loadingText}}</text>
    </view>
	</view>
</template>

<script>
  // <li-PageEnd :type='loadingText'></li-PageEnd> 
  // <li-PageEnd :type='page_end_type' noDataText="暂无订单噢~"></li-PageEnd>
  /**
   *  loadingText:'loading',
      loadingText2:'noMore',
      loadingText3:'noData'
   * */
	export default {
		props: {
			// noData noMore loading
			type:{
				default:'loading'
			},
      noDataIcon:{ //无数据图片icon
        default:'/static/PageEnd/none.png'
      },
			noDataText:{ //无数据文案
				default:'暂无记录噢'
			},
			loadingText:{//加载中文案
				default:'数据加载中...'
			},
      mode:{ //normal文字正常模式 img 只显示单独图片
        default:'normal'
      }
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.c-page-end-warp {
		padding: 60upx 0;
		.nodata {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.icon {
				margin-bottom: 20upx;
				width: 190upx;
				height: 190upx;
			}

			.text {
				font-size: 26upx;
				font-weight: 400;
				text-align: center;
				color: #999999;
			}
		}

		.noMore {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.icon {
				width: 191upx;
				height: 20upx;
			}
		}
		
		.loading {
			font-size: 26rpx;
			color: #b2b2b2;
			text-align: center;
      .bottom-img {
        margin: 32rpx 0;
        text-align: center;
        image {
          width: 404rpx;
          height: 32rpx;
        }
      }
		}
	}
</style>
