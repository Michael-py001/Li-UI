<template>
  <view class="container">
    <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec" ref="chart"></ec-canvas>
    <button type="primary" @click="getList">数据更新</button>
  </view>
</template>

<script>
  import ecCanvas from '@/pages/Components/components/EChart-for-Vue/EChart-for-Vue.vue'
  import * as echarts from 'echarts'
  export default {
    components: {
      ecCanvas
    },
    data() {
      return {
        ec: {},
        list:[]
      }
    },
    computed: {},
    methods: {
      getList() {
        this.list = [{
            "x": "10/01",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/02",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/03",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/04",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/05",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/06",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/07",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/08",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/09",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/10",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/11",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/12",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/13",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/14",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/15",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/16",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/17",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/18",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/19",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/20",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/21",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/22",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/23",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/24",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/25",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/26",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/27",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/28",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/29",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/30",
            "y": Math.round(Math.random()*100) 
          },
          {
            "x": "10/31",
            "y": Math.round(Math.random()*100) 
          }
        ]
        this.createChart()
      },
      createChart() {
       let option = {
         tooltip: {
           trigger: 'axis', //触发类型。坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
           axisPointer: {
             // 坐标轴指示器，坐标轴触发有效
             type: 'line' // 默认为直线，可选为：'line' | 'shadow'
           },
           confine: true //是否将 tooltip 框限制在图表的区域内。
         },
         // 内置型数据区域缩放组件 https://echarts.apache.org/zh/option.html#dataZoom-inside
         dataZoom: [
           /**
            * slider显示单独滑动条
            * 
            * */
           {
             type: 'slider',
             show: true,
             xAxisIndex: [0],
             start: 1,
             end: 80
           },
           /**
            * 开启坐标系内滑动
            * 
            * */
           {
             type: 'inside',
             xAxisIndex: [0],
             start: 0,
             end: 80
           },
         ],
         grid: {
           left: "18%", //x 偏移量
           top: "10%", // y 偏移量
           width: "74%", // 宽度
           height: "65%" // 高度
         },
         xAxis: {
           type: 'category',
           boundaryGap: false,
           data: this.list.map(i => i.x),
         },
         yAxis: {
           type: 'value',
           splitNumber: 5,
           minInterval: 100,
           min: 0,
           splitLine: {
             lineStyle: {
               type: 'dashed' // y轴分割线类型
             }
           },
           axisLabel: {
             formatter: '{value}ml'
           },
         },
         series: [{
           symbol: 'none',//是否显示点 //circle  去掉这一项，默认显示空心圆
           smooth: false,//是否圆滑折线
           lineStyle: {
             color: '#179aff', //线条颜色
             width: 3
           },
           data: this.list.map(i => i.y),
           type: 'line',//折线图
           areaStyle: {
             color: '#e7f4fd' //背景色
           },
           "splitLine": { //网格线
             "show": false
           }
         }]
       }
        this.$refs.chart.init(config => {
          console.log("config:", config)
          const {
            canvas
          } = config;
          const chart = echarts.init(canvas, null, config);

          canvas.setChart(chart);
          chart.setOption(option);
          // 需要把 chart 返回
          return chart;
        });
      }
    },
    onReady() {
      // 创建方式一 ec:{option} 传入配置数据 直接init
      // this.$refs.chart.init()

      //创建方式二 在函数里初始化 并传入配置数据
      this.getList()
    }
  }
</script>

<style lang="scss" scoped>

  ec-canvas {
    width: 100%;
    height: 100%;
  }
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  } 
</style>
