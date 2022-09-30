<template>
  <view class="canvas-wrap">
    <!-- 新的：接口对齐了浏览器canvas语法 -->
    <canvas v-show="isUseNewCanvas" type="2d" class="ec-canvas" :canvas-id="canvasId" @init="init" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
    
    <!-- 旧的 -->
    <canvas v-show="!isUseNewCanvas" class="ec-canvas" :canvas-id="canvasId" @init="init" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
  </view>
</template>

<script>
  import WxCanvas from './wx-canvas';
  // import * as echarts from './echarts.min.js';
  import * as echarts from 'echarts'
  // import * as echarts from './echarts';
  
  let ctx;
  
  function wrapTouch(event) {
    console.log("event:",event)
    if (!event) return;
    if (!event.preventDefault) {
      event.preventDefault = function() {};
    }
    for (let i = 0; i < event.touches.length; ++i) {
      const touch = event.touches[i];
      touch.offsetX = touch.x;
      touch.offsetY = touch.y;
    }
    return event;
  }
  
  function compareVersion(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)
  
    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }
  
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i])
      const num2 = parseInt(v2[i])
  
      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
    return 0
  }
  export default {
    props: {
      canvasId: {
        type: String,
        value: 'ec-canvas'
      },
      
      ec: {
        type: Object
      },
      forceUseOldCanvas: {
        type: Boolean,
        value: false
      }
    },
    data() {
      return {
        $curChart: {},
        toHandleList: [],
        isUseNewCanvas: true
      }
    },
    onReady() {
      // // Disable prograssive because drawImage doesn't support DOM as parameter
      // // See https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.drawImage.html
      echarts.registerPreprocessor(option => {
        if (option && option.series) {
          if (option.series.length > 0) {
            option.series.forEach(series => {
              series.progressive = 0;
            });
          }
          else if (typeof option.series === 'object') {
            option.series.progressive = 0;
          }
        }
      });
      
      // if (!this.ec) {
      //   console.warn('组件需绑定 ec 变量，例：<ec-canvas id="mychart-dom-bar" '
      //     + 'canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>');
      //   return;
      // }
      
      // if (!this.ec.lazyLoad) {
      //   // 入口
      //   this.init();
      // }
    },
    methods: {
      init(callback) {
        const version = uni.getSystemInfoSync().SDKVersion
        const canUseNewCanvas = compareVersion(version, '2.9.0') >= 0;
        const forceUseOldCanvas = this.forceUseOldCanvas;
        const isUseNewCanvas = canUseNewCanvas && !forceUseOldCanvas;
        this.isUseNewCanvas = isUseNewCanvas
        if (forceUseOldCanvas && canUseNewCanvas) {
          console.warn('开发者强制使用旧canvas,建议关闭');
        }
        if (isUseNewCanvas) {
          // console.log('微信基础库版本大于2.9.0，开始使用<canvas type="2d"/>');
          // 2.9.0 可以使用 <canvas type="2d"></canvas>
          
          // 执行新方法
          this.initByNewWay(callback);
          // this.initByOldWay(callback);
        } else {
          const isValid = compareVersion(version, '1.9.91') >= 0
          if (!isValid) {
            console.error('微信基础库版本过低，需大于等于 1.9.91。'
              + '参见：https://github.com/ecomfe/echarts-for-weixin'
              + '#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82');
            return;
          } else {
            console.warn('建议将微信基础库调整大于等于2.9.0版本。升级后绘图将有更好性能');
            this.initByOldWay(callback);
          }
        }
      },
    
      initByOldWay(callback) {
        // 1.9.91 <= version < 2.9.0：原来的方式初始化
        ctx = uni.createCanvasContext(this.canvasId, this);
        const canvas = new WxCanvas(ctx, this.canvasId, false);
    
        echarts.setCanvasCreator(() => {
          return canvas;
        });
        // const canvasDpr = wx.getSystemInfoSync().pixelRatio // 微信旧的canvas不能传入dpr
        const canvasDpr = 1

        var query = uni.createSelectorQuery().in(this);
        query.select('.ec-canvas').boundingClientRect(async res => {
          // 
          const config = {canvas,width:res.width,height:res.height,devicePixelRatio:canvasDpr}
          if (typeof callback === 'function') {
            // 把配置传到回调中，供外部调用canvas
            this.chart = await callback(config)
          }
           else {
             this.chart = this.initChart(canvas, res.width,res.height, canvasDpr)
           }
           console.log("this.chart---:",this.chart)
          // if (typeof callback === 'function') {
          //   this.chart = callback(canvas, res.width, res.height, canvasDpr);
          // }
          // else if (this.ec && typeof this.ec.onInit === 'function') {
          //   this.chart = this.ec.onInit(canvas, res.width, res.height, canvasDpr);
          // }
          // else {
          //   this.$emit('init', {
          //     canvas: canvas,
          //     width: res.width,
          //     height: res.height,
          //     canvasDpr: canvasDpr // 增加了dpr，可方便外面echarts.init
          //   });
          // }
        }).exec();
      },
    
      async initByNewWay(callback) {
        console.log("this---:",this)
        // version >= 2.9.0：使用新的方式初始化
        const query = uni.createSelectorQuery().in(this)
        console.log("query:",query)
        query
          .select('.ec-canvas')
          .fields({ node: true, size: true })
          .exec(async res => {
            const canvasNode = res[0].node
            this.canvasNode = canvasNode
    
            const canvasDpr = uni.getSystemInfoSync().pixelRatio
            const canvasWidth = res[0].width
            const canvasHeight = res[0].height
    
            const ctx = canvasNode.getContext('2d')
    
            const canvas = new WxCanvas(ctx, this.canvasId, true, canvasNode)
            const config = {canvas,width:canvasWidth,height:canvasHeight,devicePixelRatio:canvasDpr}
            echarts.setCanvasCreator(() => {
              return canvas
            })
            if (typeof callback === 'function') {
               // config : { canvas, width, height, devicePixelRatio: dpr }
              this.chart = await callback(config)
            }
             else {
               this.chart = this.initChart(canvas, canvasWidth, canvasHeight, canvasDpr)
             }
            // else if (this.ec && typeof this.ec.onInit === 'function') {
            //   console.log("this.ec.onInit:",this.ec.onInit)
            //   this.chart = this.ec.onInit(canvas, canvasWidth, canvasHeight, canvasDpr)
            // } else {
            //   console.log("init---")
            //   this.$emit('init', {
            //     canvas: canvas,
            //     width: canvasWidth,
            //     height: canvasHeight,
            //     dpr: canvasDpr
            //   })
            // }
          })
      },
      canvasToTempFilePath(opt) {
        if (this.isUseNewCanvas) {
          // 新版
          const query = uni.createSelectorQuery().in(this)
          query
            .select('.ec-canvas')
            .fields({ node: true, size: true })
            .exec(res => {
              const canvasNode = res[0].node
              opt.canvas = canvasNode
              uni.canvasToTempFilePath(opt)
            })
        } else {
          // 旧的
          if (!opt.canvasId) {
            opt.canvasId = this.canvasId;
          }
          ctx.draw(true, () => {
            uni.canvasToTempFilePath(opt, this);
          });
        }
      },
    
      touchStart(e) {
        e.preventDefault = function() {};
        // if (!e.preventDefault) {
        //   e.preventDefault = function() {};
        // }
        if (this.chart && e.touches.length > 0) {
          var touch = e.touches[0];
          console.log("touch:",touch)
          var handler = this.chart.getZr().handler;
          handler.dispatch('mousedown', {
            zrX: touch.x,
            zrY: touch.y,
            // bug : https://github.com/ecomfe/echarts-for-weixin/pull/853   不添加会报错：e2.preventDefault is not a function
            preventDefault: () => {},
            stopPropagation: () => {}
          });
          handler.dispatch('mousemove', {
            zrX: touch.x,
            zrY: touch.y,
            preventDefault: () => {},
            stopPropagation: () => {}
          });
          handler.processGesture(wrapTouch(e), 'start');
        }
      },
    
      touchMove(e) {
        if (!e.preventDefault) {
          e.preventDefault = function() {};
        }
        if (this.chart && e.touches.length > 0) {
          var touch = e.touches[0];
          var handler = this.chart.getZr().handler;
          handler.dispatch('mousemove', {
            zrX: touch.x,
            zrY: touch.y,
            preventDefault: () => {},
            stopPropagation: () => {}
          });
          handler.processGesture(wrapTouch(e), 'change');
        }
      },
    
      touchEnd(e) {
        if (!e.preventDefault) {
          e.preventDefault = function() {};
        }
        if (this.chart) {
          const touch = e.changedTouches ? e.changedTouches[0] : {};
          var handler = this.chart.getZr().handler;
          handler.dispatch('mouseup', {
            zrX: touch.x,
            zrY: touch.y,
            preventDefault: () => {},
            stopPropagation: () => {}
          });
          handler.dispatch('click', {
            zrX: touch.x,
            zrY: touch.y,
            preventDefault: () => {},
            stopPropagation: () => {}
          });
          handler.processGesture(wrapTouch(e), 'end');
        }
      },
      initChart(canvas, width, height, canvasDpr) {
              this.$curChart = echarts.init(canvas, null, {
                width: width,
                height: height,
                devicePixelRatio: canvasDpr
              });
              canvas.setChart(this.$curChart);
              this.$curChart.setOption(this.ec.option);
              this.$emit('inited', this.$curChart)
              return this.$curChart
            }
    }
  }
  
</script>

<style lang="scss">
  .canvas-wrap {
    width: 100%;
    height: 100%;
  }
 .ec-canvas {
   width: 100%;
   height: 100%;
 }

  
</style>