<!--
 * @Author: Wushili
 * @Date: 2022-08-25 15:06:22
 * @LastEditors: Wushili
 * @LastEditTime: 2022-08-25 16:31:16
 * @Description: 
 * @FilePath: \匠腾d:\项目切图\优口净水器二期\sell-side\src\pages\Facility\page\DeviceCalc\components\F2-for-Vue\F2-for-Vue.vue
-->
<template>
  <div class="F2-for-Vue">
    <canvas
      type="2d"
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
import {onMounted,ref,getCurrentInstance} from 'vue'

const instance = getCurrentInstance() //获取当前组件实例
// import ScrollBar from '@antv/f2/lib/plugin/scroll-bar'
// F2.Chart.plugins.register(ScrollBar);
let _chart = null,
    _canvasEl = null

function wrapEvent(e) {
  if (!e) return;
  if (!e.preventDefault) {
    e.preventDefault = function() {};
  }
  // if(!e.changedTouches && e.mp && e.mp.changedTouches) {
  //   e['changedTouches'] = e.mp.changedTouches
  // }
  return e;
}
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
  return new Promise((resolve,reject)=>{
    const query = wx.createSelectorQuery().in(instance);
    query.select('.f2-canvas')
      .fields({
        node: true,
        size: true
      })
      .exec(res => {
        const { node, width, height } = res[0];
        const context = node.getContext('2d');
        const pixelRatio = wx.getSystemInfoSync().pixelRatio;
        // 高清设置
        node.width = width * pixelRatio;
        node.height = height * pixelRatio;
        let config = { context, width, height, pixelRatio, canvas:node}
        resolve(config)
    });
  })
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