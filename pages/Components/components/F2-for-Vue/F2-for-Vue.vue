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

<script>
import F2 from '@antv/f2';
import PieLabel from '@antv/f2/lib/plugin/pie-label'
F2.Chart.plugins.register(PieLabel);

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

export default {
  props: {
    onInit: {
      type: Function,
      default: () => {}
    }
  },
  data() { 
    return {

    }
  },
  methods: {
    touchStart(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      canvasEl.dispatchEvent('touchstart', wrapEvent(e));
    },
    touchMove(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      canvasEl.dispatchEvent('touchmove', wrapEvent(e));
    },
    touchEnd(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      canvasEl.dispatchEvent('touchend', wrapEvent(e));
    }
  },
  mounted () {
    const query = wx.createSelectorQuery().in(this);
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
        const config = { context, width, height, pixelRatio };
        const chart = this.onInit(F2, config);
        if (chart) {
          this.chart = chart;
          this.canvasEl = chart.get('el');
        }
      });
  }
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