<template>
  <view class="column">
    <Title name="基础柱状图"></Title>
    <div class="chart" style="height:500rpx">
      <f2Vue ref="bacsicColumn" />
    </div>
  </view>
  <view class="column">
    <Title name="带图例柱状图"></Title>
    <div class="chart" style="height:500rpx">
      <f2Vue ref="column2" />
    </div>
  </view>
  <view class="column">
    <Title name="可点击选中柱状图"></Title>
    <div class="chart" style="height:500rpx">
      <f2Vue ref="column3" />
    </div>
  </view>
  <view class="column">
    <Title name="可平移柱状图"></Title>
    <div class="chart" style="height:500rpx">
      <f2Vue ref="column4" />
    </div>
  </view>
  <view class="column">
    <Title name="渐变色柱状图"></Title>
    <div class="chart" style="height:500rpx">
      <f2Vue ref="column5" />
    </div>
  </view>
  <view class="column">
    <Title name="纹理柱状图"></Title>
    <div class="chart" style="height:500rpx">
      <f2Vue ref="column6" />
    </div>
  </view>
</template>

<script setup>
  import f2Vue from '../../../components/F2-for-Vue/F2-for-Vue'
  import Title from '@/components/MainUI/Title.vue'
  import chartData from '../data.json'
  import {onReady} from '@dcloudio/uni-app'
  import {ref} from 'vue'
  import F2 from '@antv/f2/dist/f2-all.min';
  
  let bacsicColumn = ref(''),
      column2 = ref(''),
      column3 = ref(''),
      column4 = ref(''),
      column5 = ref(''),
      column6 = ref('')
  
  const createBacsicColumn = (config)=>{
    bacsicColumn.value.init((config)=>{
      const chart = new F2.Chart(config)
      const data = chartData.basicColumn;
      chart.source(data, {
        sales: {
          tickCount: 5
        }
      });
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = '¥ ' + items[0].value;
        }
      });
      chart.interval().position('year*sales');
      chart.render();
      return chart;
    })
  }
  
  const createColumn2 = (config)=>{
    column2.value.init((config)=>{
      const chart = new F2.Chart({
        ...config,
        aria: true, // 开启无障碍描述生成
        title: '销量' // 图表标题，可被无障碍识别
      })
      const data = chartData.column2;
      chart.source(data);
      chart.interval()
        .position('genre*sold')
        .color('genre');
      chart.render();
      return chart;
    })
  }
  
  const createColumn3 = (config)=>{
    column3.value.init((config)=>{
      const chart = new F2.Chart(config)
      const data = chartData.basicColumn;
      chart.source(data, {
        sales: {
          tickCount: 5
        }
      });
      chart.tooltip(false);
      chart.interval().position('year*sales');
      chart.render();
      
      // 绘制柱状图文本
      const offset = -5;
      const canvas = chart.get('canvas');
      const group = canvas.addGroup();
      const shapes = {};
      data.forEach(function(obj) {
        const point = chart.getPosition(obj);
        const text = group.addShape('text', {
          attrs: {
            x: point.x,
            y: point.y + offset,
            text: obj.sales,
            textAlign: 'center',
            textBaseline: 'bottom',
            fill: '#808080'
          }
        });
      
        shapes[obj.year] = text; // 缓存该 shape, 便于后续查找
      });
      
      let lastTextShape; // 上一个被选中的 text
      // 配置柱状图点击交互
      chart.interaction('interval-select', {
        selectAxisStyle: {
          fill: '#000',
          fontWeight: 'bold'
        },
        mode: 'range',
        defaultSelected: {
          year: '1962 年',
          sales: 38
        },
        onEnd: function onEnd(ev) {
          const data = ev.data,
            selected = ev.selected;
      
          lastTextShape && lastTextShape.attr({
            fill: '#808080',
            fontWeight: 'normal'
          });
          if (selected) {
            const textShape = shapes[data.year];
            textShape.attr({
              fill: '#000',
              fontWeight: 'bold'
            });
            lastTextShape = textShape;
          }
          canvas.draw();
        }
      })
      return chart;
    })
  }
  
  const createColumn4 = (config)=>{
    column4.value.init((config)=>{
      const chart = new F2.Chart(config)
      const data = chartData.column4;
      const originDates = [];
      const originSteps = [];
      const firstDayArr = [];
      // 转千分符
      function formatNumber(n) {
        return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      data.forEach(function(obj) {
        if (obj.date >= '2018-05-01') {
          originDates.push(obj.date);
          originSteps.push(obj.steps);
        }
  
        if (obj.first) {
          firstDayArr.push(obj);
        }
      });
      chart.source(data, {
        date: {
          type: 'timeCat',
          tickCount: 5,
          values: originDates,
          mask: 'MM-DD'
        },
        steps: {
          tickCount: 5
        }
      });
  
      chart.axis('date', {
        tickLine: {
          length: 4,
          stroke: '#cacaca'
        },
        label: {
          fill: '#cacaca'
        },
        line: {
          top: true
        }
      });
      chart.axis('steps', {
        position: 'right',
        label: function label(text) {
          return {
            text: formatNumber(text * 1),
            fill: '#cacaca'
          };
        },
  
        grid: {
          stroke: '#d1d1d1'
        }
      });
      chart.tooltip({
        showItemMarker: false,
        background: {
          radius: 2,
          padding: [ 3, 5 ]
        },
        onShow: function onShow(ev) {
          const items = ev.items;
          items[0].name = '';
          items[0].value = items[0].value + ' 步';
        }
      });
      chart.interval().position('date*steps').style({
        radius: [ 2, 2, 0, 0 ]
      });
  
      firstDayArr.forEach(function(obj) {
        chart.guide().line({
          top: false,
          start: [ obj.date, 'min' ],
          end: [ obj.date, 'max' ],
          style: {
            lineWidth: 1,
            stroke: '#A4A4A4'
          }
        });
        chart.guide().text({
          position: [ obj.date, 'max' ],
          content: obj.date,
          style: {
            textAlign: 'start',
            fill: '#cacaca',
            textBaseline: 'top'
          },
          offsetX: 5,
          offsetY: 5
        });
      });
      // 定义进度条
      chart.scrollBar({
        mode: 'x',
        xStyle: {
          backgroundColor: '#e8e8e8',
          fillerColor: '#808080',
          offsetY: -2
        }
      });
      chart.interaction('pan');
      chart.render();
      return chart;
    })
  }
  
  const createColumn5 = (config)=>{
    column5.value.init((config)=>{
      const chart = new F2.Chart(config)
      const data = chartData.column5;
      chart.source(data, {
        sales: {
          tickCount: 5
        }
      });
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = '¥ ' + items[0].value;
        }
      });
      chart.interval().position('year*sales').color('l(90) 0:#1890ff 1:#70cdd0')
      chart.render();
      return chart;
    })
  }
  const createColumn6 = (config)=>{
    column6.value.init(async (config)=>{
      const chart = new F2.Chart(config)
      const data = chartData.column5;
      chart.source(data, {
        sales: {
          tickCount: 5
        }
      });
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = '¥ ' + items[0].value;
        }
      });
      // 创建纹理对象
      // 获取 canvas 上下文对像
      const ctx = chart.get('canvas').get('context');
      let {canvas} = config
      console.log("canvas:",canvas)
      const canvasImg = canvas.createImage();
      await new Promise(async (resolve, reject) => {
        canvasImg.onload = (e) => {
          const pattern = ctx.createPattern(canvasImg, 'repeat');
          chart.interval().position('year*sales').color(pattern);
          chart.render();
          resolve()
        }
        canvasImg.onerror = (e) => {
          console.error('err:', e)
          reject()
        }
        canvasImg.src = 'https://gw.alipayobjects.com/zos/rmsportal/cNOctfQVgZmwaXeBITuD.jpg'
        // canvasImg.src = await this.DownloadFile(url)
      })
      return chart;
    })
  }
  
  onReady(()=>{
    createBacsicColumn()
    createColumn2()
    createColumn3()
    createColumn4()
    createColumn5()
    createColumn6()
  })
</script>

<style lang="scss" scoped>
  .column {
    padding: 24rpx;
    .chart {
      width: 100%;
      height: 600rpx;
      margin-bottom: 24rpx;
    }
  }
</style>