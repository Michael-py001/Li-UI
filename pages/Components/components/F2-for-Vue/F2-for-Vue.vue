<template>
  <div class="F2-for-Vue">
    <canvas
      type="2d"
      :id="canvasId"
      :canvas-id="canvasId"
      class="f2-canvas"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
    <slot name="center"></slot>
    </canvas>
  </div>
</template>

<script setup>
import F2 from '@antv/f2/dist/f2-all.min';
import {wrapEvent , pixelRatio} from './utils.js'
import {onBeforeMount,onMounted,ref,getCurrentInstance,computed} from 'vue'

const instance = getCurrentInstance() //获取当前组件实例
// import ScrollBar from '@antv/f2/lib/plugin/scroll-bar'
// F2.Chart.plugins.register(ScrollBar);
let _chart = null,
    _canvasEl = null,
    canvasId = ref(''),
    use2dCanvas = false
    
    
 canvasId.value = `Li_${new Date().getTime()}`
// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-ALIPAY
  use2dCanvas = true
// #endif


onMounted(()=>{
 if(props.onInit) {
   init()
 }
}) 
const props = defineProps({
  onInit: {
    type: Function,
  }
})
defineExpose({
  init
})
async function init(config={}) {
  let _config = Object.assign(await getContext(),config) 
  let chart = null
  // 挂载时渲染
  if(Object.prototype.toString.call(config).toLowerCase()=='[object object]' && props.onInit) {
    chart = await props.onInit(F2, _config);
  }
  // 手动渲染
  else if(Object.prototype.toString.call(config).toLowerCase()=='[object function]') {
    chart = await config(_config)
  }
  if (chart) {
    _chart = chart;
    _canvasEl = chart.get('el');
  }
}
function getContext() {
  if(use2dCanvas) { //使用2d
    return new Promise((resolve,reject)=>{
      const query = uni.createSelectorQuery().in(instance);
      query.select(`#${canvasId.value}`)
        .fields({
          node: true,
          size: true
        })
        .exec(res => {
          const { node, width, height } = res[0];
          const context = node.getContext('2d');
          // 高清设置
          node.width = width * pixelRatio;
          node.height = height * pixelRatio;
          let config = { context, width, height, pixelRatio, canvas:node}
          resolve(config)
      });
    })
  }
  else {
    return new Promise((resolve,reject)=>{
      const query = uni.createSelectorQuery().in(instance);
      query.select(`#${canvasId.value}`)
        .boundingClientRect()
        .exec(res => {
          const { width = 300, height=300 } = res[0];
          const context = uni.createCanvasContext(canvasId.value, instance);
          let config = { 
            context:context, 
            width, 
            height, 
            pixelRatio
          }
          resolve(config)
      });
    })
  }
}  
function touchStart(e) {
  const canvasEl = _canvasEl;
  if (!canvasEl) {
    return;
  }
  canvasEl.dispatchEvent('touchstart', wrapEvent(e));
}
function touchMove(e) {
  const canvasEl = _canvasEl;
  if (!canvasEl) {
    return;
  }
  canvasEl.dispatchEvent('touchmove', wrapEvent(e));
}
function touchEnd(e) {
  const canvasEl = _canvasEl;
  if (!canvasEl) {
    return;
  }
  canvasEl.dispatchEvent('touchend', wrapEvent(e));
}
  
</script>

<style lang="less" scoped>
  .F2-for-Vue{
    width: 100%;
      height: 100%;
    .f2-canvas {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
</style>