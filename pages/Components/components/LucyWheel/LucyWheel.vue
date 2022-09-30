<template>
  <view class="ZhuanPan" ref="panWrap2" v-if="popupShow">
    <view class="popup-wrap" :class="{'show':popupShow}">
      <view class="popup" :class="{'showAnimate':popupShow}">
        <view class="content">
         <image class="pan" src="/static/LucyWheel/pan-bg.png" mode="aspectFill"></image>
         <view class="pan-wrap" :class="{'activeRun':animateRunning}">
            <image class="pan_inner" src="/static/LucyWheel/pan-center.png" mode="aspectFill"></image>
            <view class="user-avatar-wrap">
              <view class="user-avatar">
                <image :class="'avatar-'+index" class="avatar" :src="item" mode="aspectFill"
                  v-for="(item,index) in calcUserAvatarList"></image>
              </view>
            </view>
          </view>
          <!-- 中间按钮 -->
          <image class="btn" src="/static/LucyWheel/pan-btn.png" mode="aspectFill" @click="clickStart"></image>
         <image class="light" 
            src="/static/LucyWheel/light.gif" mode="aspectFill"></image>
          <image class="close" v-show="!running" src="/static/LucyWheel/close.png" mode="aspectFill" @click.stop="closePopup"></image>

        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      // 中奖第几位
      getIndex:{
        default:1
      },
      // 总用时 秒
      totalTime:{
        default:3
      },
      //转的圈数
      rollNum:{ 
        default:5
      },
      //中奖概率
      getPercent:{ 
        default:50
      },
      // 自动抽奖
      autoBegin:{
        default:true
      },
      // 禁用
      disabled:{
        default:false
      },
      // 控制显示
      popupShow:{
        default:false
      },
      // 中奖头像
      getUser:{
        default:'https://tinypng.com/images/apng/panda-waving.png'
      },
      // 头像信息
      userList:{
        default: ()=>{
          return [ 'https://tinypng.com/images/apng/panda-waving.png',
            'https://tinypng.com/images/example-shrunk.png',
            'https://tinypng.com/images/pro/panda-pro.png'
          ]
        }
      }
    },
    data() {
      return {
        deg: 0,
        totalDeg: 360,
        running: false,//是否在转
        color:'#333',
        animateRunning:false,
        isGet:false
      }
    },
    watch:{
      popupShow(bool){
        if(bool) {
          this.totalDeg = 0
          if(this.autoBegin) {
            setTimeout(()=>{
              this.clickStart()
            },800)
          }
        }
      }
    },
    computed: {
      prizeDeg() {
        if(this.getIndex > 0) {
          return -20 + (this.getIndex - 1) * 36
        }
        else return -20
      },
      // 计算头像列表
      calcUserAvatarList() {
        let list = []
        let joinListAvatar = this.userList.map(item => {
          return item.avatar_url || '/static/LucyWheel/default.png'
        })
        if (joinListAvatar.length < 10) {
          let num = 10 - joinListAvatar.length //10个坑位 剩余数量
          list.push(this.getUser, ...joinListAvatar) //先填充返回的
          let index = 0
          for (let i = 0; i < num - 1; i++) { //剩余几个就循环几个
            if (index > joinListAvatar.length - 1) {//如果index大于返回的数量，重置为0，重复循环
              index = 0
            }
            list.push(joinListAvatar[index])//把剩余的坑位填充完
            index++
          }
        } else if (joinListAvatar.length > 10) {
          list.push(getUser, ...joinListAvatar.slice(1, 9))
        } else if (joinListAvatar.length == 10) {
          list.push(getUser, ...joinListAvatar.slice(1, 9))
        }
        return list
      }
    },
    methods: {
      closePopup() {
        this.$emit('close')
      },
      openPopup() {
        this.popupShow = true
      },
      // 计算概率
      calcCanGet() {
        let percent = Math.floor(this.getPercent*1),
            list = new Array(100).fill(false)
        
        for(let i=0;i<percent;i++) {
          list[i] = true
        }
        
        let randomNum = Math.floor(Math.random() * 100)
        return list[randomNum]
        
      },
      async clickStart() {
        if (this.running || this.disabled) return
        if(!this.running && this.animateRunning) {
          this.animateRunning = false
          await new Promise(resolve=>{
            setTimeout(()=>{
              resolve()
            },1000)
          })
        }
        this.running = true
        let degree = ''
        this.isGet = this.calcCanGet()
        if(this.isGet) { //中奖
          degree = this.prizeDeg
        }
        else {
          degree = 360 - parseInt(200*Math.random()) //不中奖随机度数
          degree = 320
          if(degree >= 314 && degree <=360) {
            degree += parseInt(Math.random() * (200 - 50) + 50) 
          }
        }
        this.start(degree)
    },
      start(deg) {
        if(this.rollNum<0) {
          this.totalDeg = 360 * 1 + deg
        }
        else {
          this.totalDeg = 360 * this.rollNum + deg
        }
        this.animateRunning = true
        setTimeout(()=>{
          // 停止时
          this.$emit('finish',{
            isGet:this.isGet
          })
          this.running = false
        },this.totalTime * 1000)
      },
    }
  }
</script>

<script setup>
  // TODO
  // 此处是uniapp的v-bind的bug，修复后删除
</script>
<style lang="scss">

  .test {
    color: v-bind(color);
  }
  .ZhuanPan {
    .activeRun {
      animation:zhuan calc(v-bind(totalTime) * 1s)  ease-in-out forwards;
    }
    @keyframes zhuan {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(calc(v-bind(totalDeg) * 1deg));
      }
    }
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
      transition: all 0.2s;
      opacity: 0;
      &.show {
        display: block;
        opacity: 1;
      }
    }
    .popup {
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 999;
      overflow: hidden;
      opacity: 0;
      transition: all 0.5s;
      &.showAnimate {
        display: flex;
        opacity: 1;
        -webkit-transform-style: flat;
        -webkit-transform-origin: center;
        -webkit-animation: show 1s linear 0s 1 normal forwards;
        backface-visibility: hidden;
        -webkit-animation-timing-function:cubic-bezier(0.25,0.1,0.25,1);
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
      .content {
        width: 750rpx;
        height: 750rpx;
        position: relative;

        .light {
          position: absolute;
          left: 0;
          top: 0;
          width: 750rpx;
          height: 750rpx;
          // animation: light linear 1s alternate infinite;
          @keyframes light {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(20deg);
            }
          }
        }
        .text {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          font-size: 28rpx;
          color: #fff;
          z-index: 25;
        }
        .btn {
          position: absolute;
          left: 225rpx;
          top: 226rpx;
          transition: all;
          width: 300rpx;
          height: 300rpx;
          z-index: 20;
          // animation:zhuan 5s linear infinite;
        }

        .pan {
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .pan-wrap {
          position: absolute;
          left: 0;
          top: 0;
          width: 750rpx;
          height: 750rpx;
          // transform: rotate(720deg);

          // animation:zhuan 5s linear infinite;

          .pan_inner {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 500rpx;
            height: 500rpx;
            z-index: 1;
          }

          .user-avatar-wrap {
            position: absolute;
            left: 0;
            top: 0;
            width: 750rpx;
            height: 750rpx;

            .user-avatar {
              position: relative;
              z-index: 10;

              .avatar {
                width: 64rpx;
                height: 64rpx;
                border: 3rpx solid #ff5872;
                border-radius: 50%;
                position: absolute;
              }

              .avatar-0 {
                top: 162rpx;
                left: 400rpx;

                &::after {
                  content: '中奖';
                  color: black;
                  font-size: 26rpx;
                }
              }

              .avatar-1 {
                top: 231rpx;
                left: 497rpx;
              }

              .avatar-2 {
                top: 343rpx;
                left: 533rpx;
              }

              .avatar-3 {
                top: 453rpx;
                left: 497rpx;
              }

              .avatar-4 {
                top: 524rpx;
                left: 400rpx;
              }

              .avatar-5 {
                top: 162rpx;
                left: 285rpx;
              }

              .avatar-6 {
                top: 231rpx;
                left: 189rpx;
              }

              .avatar-7 {
                top: 343rpx;
                left: 152rpx;
              }

              .avatar-8 {
                top: 453rpx;
                left: 189rpx;
              }

              .avatar-9 {
                top: 524rpx;
                left: 285rpx;
              }
            }
          }
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
      }
    }
  }
</style>
