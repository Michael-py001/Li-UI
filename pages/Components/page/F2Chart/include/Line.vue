<template>
  <view class="Line">
    <Title name="带图例折线图"></Title>
    <div class="LineChart" style="height:500rpx">
      <f2Vue  :onInit="bacsicLine" />
    </div>
    <Title name="隐藏图例折线图"></Title>
    <div class="LineChart" style="height:500rpx">
      <f2Vue  :onInit="bacsicLine2" />
    </div>
    <Title name="带点折线图"></Title>
    <div class="LineChart" style="height:500rpx">
      <f2Vue  :onInit="basicLine3" />
    </div>
    <Title name="可拖动折线图 3.7.8"></Title>
    <div class="LineChart" style="height:500rpx">
      <f2Vue  :onInit="moveLine2" />
    </div>
    
    <Title name="可拖动折线图-f2 3.2.3"></Title>
    <div class="LineChart" style="height:500rpx">
      <ff-canvas id="lineChart" ref="chart" canvas-id="column" />
    </div>
    
  </view>
</template>

<script setup>
  import f2Vue from '../../../components/F2-for-Vue/F2-for-Vue'
  import Title from '@/components/MainUI/Title.vue'
  import chartData from '../data.json'
  import {onLoad} from '@dcloudio/uni-app'
  
  // 基础折线图1
  const bacsicLine = (F2, config)=> {
      const chart = new F2.Chart(config);
      const data = [
        { value: 23.4, city: 'New York', date: '2011-10-01' },
        { value: 86.7, city: 'Alaska', date: '2011-10-01' },
        { value: 75.2, city: 'Austin', date: '2011-10-01' },
        { value: 48, city: 'New York', date: '2011-10-02' },
        { value: 44.9, city: 'Alaska', date: '2011-10-02' },
        { value: 93.7, city: 'Austin', date: '2011-10-02' },
        { value: 83.3, city: 'New York', date: '2011-10-03' },
        { value: 59.1, city: 'Alaska', date: '2011-10-03' },
        { value: 63.4, city: 'Austin', date: '2011-10-03' },
      ];
      chart.source(data, {
        date: {
          range: [0, 1],
          type: 'timeCat',
          mask: 'MM-DD'
        },
        value: {
          max: 300,
          tickCount: 4
        }
      });
      chart.area().position('date*value').color('city').adjust('stack');
      chart.line().position('date*value').color('city').adjust('stack');
      chart.render();
      // 注意：需要把chart return 出来
      return chart;
    }
    
    // 基础折线图2
    const bacsicLine2 = (F2, config)=> {
      const chart = new F2.Chart(config);
      const data = [{
        date: '2017-06-05',
        value: 116
      }, {
        date: '2017-06-06',
        value: 129
      }, {
        date: '2017-06-07',
        value: 135
      }, {
        date: '2017-06-08',
        value: 86
      }, {
        date: '2017-06-09',
        value: 73
      }, {
        date: '2017-06-10',
        value: 85
      }, {
        date: '2017-06-11',
        value: 73
      }, {
        date: '2017-06-12',
        value: 68
      }, {
        date: '2017-06-13',
        value: 92
      }, {
        date: '2017-06-14',
        value: 130
      }, {
        date: '2017-06-15',
        value: 245
      }, {
        date: '2017-06-16',
        value: 139
      }, {
        date: '2017-06-17',
        value: 115
      }, {
        date: '2017-06-18',
        value: 111
      }, {
        date: '2017-06-19',
        value: 309
      }, {
        date: '2017-06-20',
        value: 206
      }, {
        date: '2017-06-21',
        value: 137
      }, {
        date: '2017-06-22',
        value: 128
      }, {
        date: '2017-06-23',
        value: 85
      }, {
        date: '2017-06-24',
        value: 94
      }, {
        date: '2017-06-25',
        value: 71
      }, {
        date: '2017-06-26',
        value: 106
      }, {
        date: '2017-06-27',
        value: 84
      }, {
        date: '2017-06-28',
        value: 93
      }, {
        date: '2017-06-29',
        value: 85
      }, {
        date: '2017-06-30',
        value: 73
      }, {
        date: '2017-07-01',
        value: 83
      }, {
        date: '2017-07-02',
        value: 125
      }, {
        date: '2017-07-03',
        value: 107
      }, {
        date: '2017-07-04',
        value: 82
      }, {
        date: '2017-07-05',
        value: 44
      }, {
        date: '2017-07-06',
        value: 72
      }, {
        date: '2017-07-07',
        value: 106
      }, {
        date: '2017-07-08',
        value: 107
      }, {
        date: '2017-07-09',
        value: 66
      }, {
        date: '2017-07-10',
        value: 91
      }, {
        date: '2017-07-11',
        value: 92
      }, {
        date: '2017-07-12',
        value: 113
      }, {
        date: '2017-07-13',
        value: 107
      }, {
        date: '2017-07-14',
        value: 131
      }, {
        date: '2017-07-15',
        value: 111
      }, {
        date: '2017-07-16',
        value: 64
      }, {
        date: '2017-07-17',
        value: 69
      }, {
        date: '2017-07-18',
        value: 88
      }, {
        date: '2017-07-19',
        value: 77
      }, {
        date: '2017-07-20',
        value: 83
      }, {
        date: '2017-07-21',
        value: 111
      }, {
        date: '2017-07-22',
        value: 57
      }, {
        date: '2017-07-23',
        value: 55
      }, {
        date: '2017-07-24',
        value: 60
      }];
      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0
        },
        date: {
          type: 'timeCat',
          range: [ 0, 1 ],
          tickCount: 3
        }
      });
      chart.tooltip({
        custom: true,
        showXTip: true,
        showYTip: true,
        snap: true,
        crosshairsType: 'xy',
        crosshairsStyle: {
          lineDash: [ 2 ]
        }
      });
      chart.axis('date', {
        labelOffset:10,//坐标轴文本距离轴线的距离
        tickLine: {//坐标轴刻度线的样式配置，设置 null 不显示
          length: 4,
          stroke: '#e8e8e8',
          lineWidth: 1
        },
        // 调整x轴label位置显示
        label: function label(text, index, total) {
          const textCfg = {
            rotate: 0//Math.PI / 4,// x轴的文字旋转角度
          };
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        }
      });
      chart.line().position('date*value');
      chart.render();
      // 注意：需要把chart return 出来
      return chart
    }
    
    // 带点折线图
    const basicLine3 = (F2,config)=>{
      const data = [{
        day: '周一',
        value: 300
      }, {
        day: '周二',
        value: 400
      }, {
        day: '周三',
        value: 350
      }, {
        day: '周四',
        value: 500
      }, {
        day: '周五',
        value: 490
      }, {
        day: '周六',
        value: 600
      }, {
        day: '周日',
        value: 900
      }];
      const chart = new F2.Chart(config);
      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0
        },
        day: {
          range: [ 0, 1 ]
        }
      });
      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items;
          items[0].name = null;
          items[0].value = '$ ' + items[0].value;
        }
      });
      chart.axis('day', {
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        }
      });
      chart.line().position('day*value');
      chart.point().position('day*value').style({
        stroke: '#fff',
        lineWidth: 1
      });
      chart.render()
      return chart
    }
    
    // 3.7.8版本
    const moveLine2 = (F2,config)=>{
        const data = [
          {
            x:1,
            y:20,
            type:'机型A'
          },
          {
            x:2,
            y:50,
            type:'机型A'
          },
          {
            x:3,
            y:75,
            type:'机型A'
          },
          {
            x:4,
            y:100,
            type:'机型A'
          },
          {
            x:5,
            y:120,
            type:'机型A'
          },
          {
            x:6,
            y:90,
            type:'机型A'
          },
          {
            x:7,
            y:20,
            type:'机型A'
          },
          {
            x:8,
            y:50,
            type:'机型A'
          },
          {
            x:9,
            y:75,
            type:'机型A'
          },
          {
            x:10,
            y:100,
            type:'机型A'
          },
          {
            x:11,
            y:120,
            type:'机型A'
          },
          {
            x:12,
            y:90,
            type:'机型A'
          },
          // B
           {
            x:1,
            y:10,
            type:'机型B'
          },
          {
            x:2,
            y:40,
            type:'机型B'
          },
          {
            x:3,
            y:85,
            type:'机型B'
          },
          {
            x:4,
            y:105,
            type:'机型B'
          },
          {
            x:5,
            y:140,
            type:'机型B'
          },
          {
            x:6,
            y:111,
            type:'机型B'
          },
          {
            x:7,
            y:10,
            type:'机型B'
          },
          {
            x:8,
            y:40,
            type:'机型B'
          },
          {
            x:9,
            y:85,
            type:'机型B'
          },
          {
            x:10,
            y:105,
            type:'机型B'
          },
          {
            x:11,
            y:140,
            type:'机型B'
          },
          {
            x:12,
            y:111,
            type:'机型B'
          },
          // C
           {
            x:1,
            y:19,
            type:'机型C'
          },
          {
            x:2,
            y:57,
            type:'机型C'
          },
          {
            x:3,
            y:45,
            type:'机型C'
          },
          {
            x:4,
            y:165,
            type:'机型C'
          },
          {
            x:5,
            y:123,
            type:'机型C'
          },
          {
            x:6,
            y:178,
            type:'机型C'
          },
          {
            x:7,
            y:19,
            type:'机型C'
          },
          {
            x:8,
            y:57,
            type:'机型C'
          },
          {
            x:9,
            y:45,
            type:'机型C'
          },
          {
            x:10,
            y:165,
            type:'机型C'
          },
          {
            x:11,
            y:123,
            type:'机型C'
          },
          {
            x:12,
            y:178,
            type:'机型C'
          },
        ]
        // const data = chartData.lineData || []
        // F2.Chart.registerInteraction('pan', Pan);
        const chart = new F2.Chart(config);
        
        console.log("chart:",chart)
        const dateList = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        chart.source(data, {
          y: {
            tickCount: 5,
            alias: '饮水总量(L)',
            range: [ 0, 1 ],
            min: 0,
            minLimit: 0,
            formatter (e) {
              return Number(e).toFixed(2) + ''
            }
          },
          x: {
            type:'linear',
            min: 1,
            max:6,
            formatter(value) {
              return dateList[Math.floor(value)-1]
            },
            tickCount: 6,
            range: [ 0, 1 ]
          }
        })
        // 移动动态显示图例数值
        
        chart.tooltip({
          showCrosshairs: true,
          custom: true, // 自定义 tooltip 内容框
          onChange: function onChange(obj) {
            const legend = chart.get('legendController').legends.top[0];
            const tooltipItems = obj.items;
            const legendItems = legend.items;
            const map = {};
            legendItems.forEach(function(item) {
              map[item.name] = JSON.parse(JSON.stringify(item));
            });
            tooltipItems.forEach(function(item) {
              const name = item.name;
              const value = item.value;
              if (map[name]) {
                map[name].value = value;
              }
            });
            legend.setItems(Object.values(map));
          },
          onHide: function onHide() {
            const legend = chart.get('legendController').legends.top[0];
            legend.setItems(chart.getLegendItems().country);
          }
        })
      // chart.tooltip({
      //   showCrosshairs: true,
      //   showItemMarker: true,//显示各项的小圆圈
      //   custom: false,//是否自定义显示
      //   showXTip: false,//X轴数值显示
      //   showYTip: false,//Y轴数值显示
      //   // onShow: function onShow(ev) {
      //   //   const items = ev.items;
      //   //   items[0].name = null;
      //   //   items[0].value = '$ ' + items[0].value;
      //   // }
      // });
       chart.scrollBar({       
        mode: "x",        
        xStyle: {           
          backgroundColor: "#e8e8e8",            
          fillerColor: "#808080",            
          offsetY: -2        
          }      
       });  // 按照x轴滑动      
        
      chart.interaction("pan",{          
        mode: 'x', // 图表平移的方向，默认为 'x'         
        onEnd(ev) { }   
      });
      
        chart.line().position('x*y').shape('smooth').color('type',['#40A9FF', '#FF7875', '#FFC069' ])
        // chart.area().position('x*y').shape('smooth').color('type');    
        chart.point(e=>{
          console.log("point:",e)
        }).position('x*y').color('type',['#40A9FF', '#FF7875', '#FFC069' ]);
      
        chart.render()
        return chart
    }
</script>

<script>
  // import F2 from '@antv/f2/dist/f2.min'
  // import F2 from '/wxcomponents/f2-canvas/lib/f2'
  import F2 from '/wxcomponents/f2-canvas/lib/f2-es'
  console.log("F2-es:",F2)
  F2.Util.addEventListener = function (source, type, listener) {
    source.addListener(type, listener);
  };
  
  F2.Util.removeEventListener = function (source, type, listener) {
    source.removeListener(type, listener);
  };
  
  F2.Util.createEvent = function (event, chart) {
    const type = event.type;
    let x = 0;
    let y = 0;
    const touches = event.touches;
    if (touches && touches.length > 0) {
      x = touches[0].x;
      y = touches[0].y;
    }
  
    return {
      type,
      chart,
      x,
      y
    };
  };
  export default {
    onLoad() {
      this.$scope.selectComponent('#lineChart').init(this.moveLine)
      // console.log(this.$scope.selectComponent('#lineChart'))
    },
    methods:{
      // 单折线平移 3.2.3
      moveLine(canvas, width, height){
      // moveLine(F2,config){
        // #ifdef APP-PLUS
        
        // #endif
        const data = [
          {
            x:1,
            y:20,
            type:'机型A'
          },
          {
            x:2,
            y:50,
            type:'机型A'
          },
          {
            x:3,
            y:75,
            type:'机型A'
          },
          {
            x:4,
            y:100,
            type:'机型A'
          },
          {
            x:5,
            y:120,
            type:'机型A'
          },
          {
            x:6,
            y:90,
            type:'机型A'
          },
          {
            x:7,
            y:20,
            type:'机型A'
          },
          {
            x:8,
            y:50,
            type:'机型A'
          },
          {
            x:9,
            y:75,
            type:'机型A'
          },
          {
            x:10,
            y:100,
            type:'机型A'
          },
          {
            x:11,
            y:120,
            type:'机型A'
          },
          {
            x:12,
            y:90,
            type:'机型A'
          },
          // B
           {
            x:1,
            y:10,
            type:'机型B'
          },
          {
            x:2,
            y:40,
            type:'机型B'
          },
          {
            x:3,
            y:85,
            type:'机型B'
          },
          {
            x:4,
            y:105,
            type:'机型B'
          },
          {
            x:5,
            y:140,
            type:'机型B'
          },
          {
            x:6,
            y:111,
            type:'机型B'
          },
          {
            x:7,
            y:10,
            type:'机型B'
          },
          {
            x:8,
            y:40,
            type:'机型B'
          },
          {
            x:9,
            y:85,
            type:'机型B'
          },
          {
            x:10,
            y:105,
            type:'机型B'
          },
          {
            x:11,
            y:140,
            type:'机型B'
          },
          {
            x:12,
            y:111,
            type:'机型B'
          },
          // C
           {
            x:1,
            y:19,
            type:'机型C'
          },
          {
            x:2,
            y:57,
            type:'机型C'
          },
          {
            x:3,
            y:45,
            type:'机型C'
          },
          {
            x:4,
            y:165,
            type:'机型C'
          },
          {
            x:5,
            y:123,
            type:'机型C'
          },
          {
            x:6,
            y:178,
            type:'机型C'
          },
          {
            x:7,
            y:19,
            type:'机型C'
          },
          {
            x:8,
            y:57,
            type:'机型C'
          },
          {
            x:9,
            y:45,
            type:'机型C'
          },
          {
            x:10,
            y:165,
            type:'机型C'
          },
          {
            x:11,
            y:123,
            type:'机型C'
          },
          {
            x:12,
            y:178,
            type:'机型C'
          },
        ]
        // const data = chartData.lineData || []
        // F2.Chart.registerInteraction('pan', Pan);
        const chart = new F2.Chart({
          el: canvas,
          width,
          height,
          padding: 'auto'
        });
        // const chart = new F2.Chart(config);
        
        console.log("chart:",chart)
        const dateList = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        chart.source(data, {
          y: {
            tickCount: 5,
            alias: '饮水总量(L)',
            range: [ 0, 1 ],
            min: 0,
            minLimit: 0,
            formatter (e) {
              return Number(e).toFixed(2) + ''
            }
          },
          x: {
            type:'linear',
            min: 1,
            max:6,
            formatter(value) {
              return dateList[Math.floor(value)-1]
            },
            tickCount: 6,
            range: [ 0, 1 ]
          }
        })
        chart.tooltip({
          showCrosshairs: true,
          custom: true, // 自定义 tooltip 内容框
          onChange: function onChange(obj) {
            const legend = chart.get('legendController').legends.top[0];
            const tooltipItems = obj.items;
            const legendItems = legend.items;
            const map = {};
            legendItems.forEach(function(item) {
              map[item.name] = JSON.parse(JSON.stringify(item));
            });
            tooltipItems.forEach(function(item) {
              const name = item.name;
              const value = item.value;
              if (map[name]) {
                map[name].value = value;
              }
            });
            legend.setItems(Object.values(map));
          },
          onHide: function onHide() {
            const legend = chart.get('legendController').legends.top[0];
            legend.setItems(chart.getLegendItems().country);
          }
        })
       chart.scrollBar({       
        mode: "x",        
        xStyle: {           
          backgroundColor: "#e8e8e8",            
          fillerColor: "#808080",            
          offsetY: -2        
          }      
       });  // 按照x轴滑动      
        
      chart.interaction("pan",{          
        mode: 'x', // 图表平移的方向，默认为 'x'         
        onEnd(ev) { }   
      });
      
        chart.line().position('x*y').shape('smooth').color('type',['#40A9FF', '#FF7875', '#FFC069' ])
        // chart.area().position('x*y').shape('smooth').color('type');    
        chart.point(e=>{
          console.log("point:",e)
        }).position('x*y').color('type',['#40A9FF', '#FF7875', '#FFC069' ]);
      
        chart.render()
        return chart
      }
    }
  }
</script>
    
<style lang="scss" scoped>
  .Line {
    padding: 24rpx;
    .LineChart {
      width: 100%;
      height: 600rpx;
      margin-bottom: 24rpx;
    }
  }
</style>