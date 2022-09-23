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
    <Title name="圆滑曲线图"></Title>
    <div class="LineChart" style="height:500rpx">
      <f2Vue  :onInit="basicLine4" />
    </div>
    <Title name="可拖动折线图 3.7.8"></Title>
    <div class="LineChart" style="height:500rpx">
      <f2Vue  :onInit="moveLine2" />
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
      const data = chartData.bacsicLine;
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
      const data = chartData.bacsicLine2;
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
      const data = chartData.basicLine3;
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
    // 圆滑曲线图
    const basicLine4 = (F2,config)=>{
      const data = chartData.basicLine3;
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
      chart.line().position('day*value').shape('smooth');
      // chart.point().position('day*value').style({
      //   stroke: '#fff',
      //   lineWidth: 1
      // });
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