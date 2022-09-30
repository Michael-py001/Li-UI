<template>
  <view class="" v-if="_popupShow">
    <view class="popup-wrap" :class="{'show':_popupShow}">
      <view class="popup " :class="{'showAnimate':_popupShow}">
        <view class="back-wrap" :class="{'open':openAnimate,'get':getAnimate}"
          :style="{'display':hideBack?'none':'block'}">
          <view class="content">
            <image class="img-back"
              src="/static/LucyMoney/back.png" mode="aspectFill">
            </image>
            <view class="desc">
              <view class="popup-desc">
                <view class="red">
                  {{backTitleOne}}
                </view>
                <view class="red mar-top">
                  <text class="big">{{money}}</text>{{unit}}
                </view>
                <view class="gold">
                  {{backTitleTwo}}
                </view>
              </view>
            </view>
            <view class="btn" @click="clickGetMoney">
              {{btnTitle}}
            </view>
          </view>
        </view>
        <image :style="{'opacity':closeShow?1:0}" class="close" src="/static/LucyWheel/close.png" mode="aspectFill"
          @click.stop="$emit('close')"/>
          <view class="front-wrap-wrap" :class="{'open':openAnimate,'get':getAnimate,'isOneNum':rollNum==1}">
            <view class="front">
              <view class="front-wrap">
                <view class="front-title">
                  {{frontTitle}}
                </view>
                <image class="img-front" src="/static/LucyMoney/front.png" mode="aspectFill"></image>
                <image @click="open" class="img-front-btn" :class="{'bigAnimate':bigAnimate}"
                  src="/static/LucyMoney/btn.png"
                  mode="aspectFill"></image>
              </view>
            </view>
          </view>
      </view>
    </view>
  </view>
</template>

<script>
  // 外部 @close="close" 关闭
  export default {
    props: {
      type: {
        default: 'balance', //activeNum活跃值 balance余额 redCoupon福星券
      },
      money: {
        default: '8.8'
      },
      backTitleOne:{
        default:'获得红包金额'
      },
      backTitleTwo:{
        default:' - 红包已存入余额 -'
      },
      frontTitle:{
        default:'红包奖励'
      },
      btnTitle:{
        default:'开心收下红包'
      },
      // 单位
      unit:{
        default:''
      },
      popupShow: {
        default: false,
      },
      // 总耗时
      totalTime:{
        default:1
      },
      // 总圈数
      rollNum:{
        default:1
      }
    },
    data() {
      return {
        openAnimate: false,
        hideBack: true,
        closeShow: false,
        getAnimate: false,
        bigAnimate: true,
        _popupShow:false
      }
    },
    watch:{
      popupShow(value) {
        this.reset()
        this._popupShow = value
      }
    },
    computed: {},
    methods: {
      reset(){
        this.hideBack = true
        this.bigAnimate = true
        this.openAnimate = false
        this.getAnimate = false
        this.closeShow = true
      },
      open() {
        this.hideBack = false
        this.bigAnimate = false
        setTimeout(() => {
          this.openAnimate = true
        }, 100)
        // 显示关闭按钮
        setTimeout(()=>{
          this.closeShow = true
        },900)
      },
      clickGetMoney() {
        this.closeShow = false
        this.getAnimate = true
        setTimeout(() => {
          this.$emit('close')
          // this._popupShow = false
          // this.reset()
        }, 700)
      }
    }
  }
</script>
<script setup>
  // TODO
  // 此处是uniapp的v-bind的bug，修复后删除
</script>
<style lang="scss" scoped>
  .popup-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
    overflow: hidden;
    display: none;
    transition: all 0.1s;
    opacity: 0;

    &.show {
      display: block;
      opacity: 1;
    }
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    text-align: center;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.2s;
    opacity: 0;

    &.showAnimate {
      display: flex;
      opacity: 1;
      -webkit-transform-style: flat;
      -webkit-transform-origin: center;
      animation: show 0.5s linear 0s 1 normal forwards;
      backface-visibility: hidden;
      -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

      @keyframes show {
        0% {
          transform: scale(0.5);
        }

        50% {
          transform: scale(1.2);
        }

        100% {
          transform: scale(1);
        }
      }
    }

    .close {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 147rpx;
      width: 64rpx;
      height: 64rpx;
      margin-top: 64rpx;
      transition: opacity 0.3s;
    }

    .front-wrap-wrap {
      position: absolute;
      width: 494rpx;
      height: 622rpx;
      transition: all;
      z-index: 1;
      &.get {
        -webkit-transform-style: flat;
        -webkit-transform-origin: center;
        -webkit-animation: leave 1s ease-in-out 0s 1 normal forwards;
        -webkit-backface-visibility: hidden;
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      }
      
      @keyframes leave {
        0% {
          transform: translateY(0rpx);
        }
      
        20% {
          transform: translateY(-100rpx);
        }
      
        100% {
          transform: translateY(2000rpx);
          // z-index: 0;
          // opacity: 0;
        }
      }
      // -webkit-transform: rotateY(180deg);
      &.open {
        -webkit-transform-style: flat;
        -webkit-transform-origin: center;
        -webkit-animation: front calc(v-bind(totalTime) * 1s) ease-in-out 0s 1 normal forwards;
        &.isOneNum {
          -webkit-backface-visibility: hidden;
        }
        // -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      @keyframes front {
        0% {
          transform: rotateY(0);
          // opacity: 1;
          // opacity: 0;
        }

        100% {
          transform: rotateY(calc(v-bind(rollNum) * 360deg - 180deg));
          z-index: -1;
          // opacity: 0;
        }
      }

      .front {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        
        .front-wrap {
          width: 494rpx;
          height: 622rpx;
          position: relative;
          .front-title {
            font-size: 40rpx;
            font-weight: bold;
            position: absolute;
            top:35%;
            left: 50%;
            transform: translate(-50%,-50%);
            z-index: 2;
            color: #ffd38e;
            letter-spacing: 5rpx;
          }
          .img-front {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
          }

          .img-front-btn {
            position: absolute;
            left: 100rpx;
            top: 282rpx;
            // transform: translate(-50%, -14%);
            width: 296rpx;
            height: 296rpx;
            z-index: 2;

            &.bigAnimate {
              -webkit-transform-style: flat;
              -webkit-transform-origin: center;
              -webkit-animation: big 0.5s ease-out 0s infinite alternate;
              -webkit-backface-visibility: hidden;
              // -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
            }

            @keyframes big {
              0% {
                transform: scale(0.9);
              }

              // 50% {
              //   transform: scale(1.1);
              // }
              100% {
                transform: scale(1.1);
              }
            }
          }

        }
      }
    }

    .back-wrap {
      width: 494rpx;
      height: 622rpx;
      position: absolute;
      transition: all;
      z-index: 0;

      &.open {
        -webkit-transform: rotateY(180deg);
        -webkit-transform-style: flat;
        -webkit-transform-origin: center;
        -webkit-animation: back calc(v-bind(totalTime) * 1s)  ease-in-out 0s 1 normal forwards;
        -webkit-backface-visibility: hidden;
        // -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      &.get {
        -webkit-transform-style: flat;
        -webkit-transform-origin: center;
        -webkit-animation: leave 1s ease-in-out 0s 1 normal forwards;
        -webkit-backface-visibility: hidden;
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      }

      @keyframes leave {
        0% {
          transform: translateY(0rpx);
        }

        20% {
          transform: translateY(-100rpx);
        }

        100% {
          transform: translateY(2000rpx);
          // z-index: 0;
          // opacity: 0;
        }
      }

      @keyframes back {
        0% {
          transform: rotateY(180deg);
        }

        100% {
          // transform: rotateY(-360deg);
          transform: rotateY(calc(v-bind(rollNum) * 360deg));
          // z-index: 1;
        }
      }

      .content {
        width: 100%;
        height: 100%;
        position: relative;


        .img-back {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .close {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -128rpx;
          width: 64rpx;
          height: 64rpx;
          margin-top: 64rpx;
        }

        .desc {

          .title {
            font-size: 54rpx;
            font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 2.0-55 Regular;
            font-weight: 55 Regular;
            text-align: center;
            color: #ffffff;
            line-height: 58rpx;
            margin-top: 48rpx;
            z-index: 10;
          }

          .popup-desc {
            min-height: 171rpx;
            padding-top: 54rpx;

            .red {
              font-size: 32rpx;
              font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 2.0-55 Regular;
              font-weight: 55 Regular;
              text-align: center;
              color: #ff3029;
              line-height: 58rpx;

              .big {
                font-size: 88rpx;
              }

            }

            .mar-top {
              margin-top: 48upx;
            }

            .gold {
              margin-top: 55rpx;
              font-size: 26rpx;
              text-align: center;
              color: #DB9824;
              line-height: 44rpx;

              view {
                font-size: 26rpx;
              }

              .big {
                font-size: 40rpx;
              }
            }
          }

          .share-title {
            margin-top: 110rpx;
            font-size: 32rpx;
            text-align: center;
            color: #333333;
            line-height: 52rpx;

            .red {
              color: #FF3029;
            }
          }

          .popup-content {
            border-top-left-radius: 20upx;
            border-top-right-radius: 20upx;
            position: relative;

            .close-icon {
              position: absolute;
              top: -40upx;
              right: 20upx;

              .iconfont {
                color: #FFFFFF;
                font-size: 40upx;
              }
            }

            .row {
              display: flex;
              padding: 41upx 40upx 0;
              justify-content: space-around;

              .col {
                .none-button {
                  line-height: 42upx;
                  background-color: transparent;

                  &::after {
                    border: none;
                  }
                }

                .text {
                  line-height: 42upx;
                  font-size: 26upx;
                  color: #999999;
                }

                img {
                  width: 110upx;
                  height: 110upx;
                }
              }

            }
          }
        }

        .btn {
          position: absolute;
          bottom: 55rpx;
          left: 50%;
          transform: translateX(-50%);
          width: 400rpx;
          height: 80rpx;
          background: linear-gradient(90deg, #fff1c4, #ffd080);
          border-radius: 40rpx;
          text-align: center;
          line-height: 80rpx;
          color: #FF3029;
        }
      }
    }

  }
</style>
