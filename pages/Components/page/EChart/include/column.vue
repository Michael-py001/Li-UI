<template>
  <view class="container">
    <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ec" ref="chart"></ec-canvas>
  </view>
</template>

<script>
  import ecCanvas from '@/pages/Components/components/EChart-for-Vue/EChart-for-Vue.vue'
  // import * as echarts from '@/pages/Components/components/EChart-for-Vue/echarts.js';
  import * as echarts from 'echarts'

  let chart = null;
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    legend: {
      data: ['热度', '正面', '负面']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [{
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666'
      }
    }],
    yAxis: [{
      type: 'category',
      axisTick: {
        show: false
      },
      data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666'
      }
    }],
    series: [{
        name: '热度',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [300, 270, 340, 344, 300, 320, 310],
        itemStyle: {
          // emphasis: {
          //   color: '#37a2da'
          // }
        }
      },
      {
        name: '正面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        data: [120, 102, 141, 174, 190, 250, 220],
        itemStyle: {
          // emphasis: {
          //   color: '#32c5e9'
          // }
        }
      },
      {
        name: '负面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        data: [-20, -32, -21, -34, -90, -130, -110],
        itemStyle: {
          // emphasis: {
          //   color: '#67e0e3'
          // }
        }
      }
    ]
  };

  function initChart(canvas, width, height, dpr) {
    chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);

    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        confine: true
      },
      legend: {
        data: ['热度', '正面', '负面']
      },
      grid: {
        left: 20,
        right: 20,
        bottom: 15,
        top: 40,
        containLabel: true
      },
      xAxis: [{
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }],
      yAxis: [{
        type: 'category',
        axisTick: {
          show: false
        },
        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }],
      series: [{
          name: '热度',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data: [300, 270, 340, 344, 300, 320, 310],
          itemStyle: {
            // emphasis: {
            //   color: '#37a2da'
            // }
          }
        },
        {
          name: '正面',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true
            }
          },
          data: [120, 102, 141, 174, 190, 250, 220],
          itemStyle: {
            // emphasis: {
            //   color: '#32c5e9'
            // }
          }
        },
        {
          name: '负面',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'left'
            }
          },
          data: [-20, -32, -21, -34, -90, -130, -110],
          itemStyle: {
            // emphasis: {
            //   color: '#67e0e3'
            // }
          }
        }
      ]
    };

    chart.setOption(option);
    return chart;
  }
  export default {
    components: {
      ecCanvas
    },
    data() {
      return {
        ec: {
          option: option,
        }

      }
    },
    computed: {},
    methods: {
      createChart() {
        var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              },
              confine: true
            },
            legend: {
              data: ['热度', '正面', '负面']
            },
            grid: {
              left: 20,
              right: 20,
              bottom: 15,
              top: 40,
              containLabel: true
            },
            xAxis: [
              {
                type: 'value',
                axisLine: {
                  lineStyle: {
                    color: '#999'
                  }
                },
                axisLabel: {
                  color: '#666'
                }
              }
            ],
            yAxis: [
              {
                type: 'category',
                axisTick: { show: false },
                data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
                axisLine: {
                  lineStyle: {
                    color: '#999'
                  }
                },
                axisLabel: {
                  color: '#666'
                }
              }
            ],
            series: [
              {
                name: '热度',
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'inside'
                  }
                },
                data: [300, 270, 340, 344, 300, 320, 310],
                itemStyle: {
                  // emphasis: {
                  //   color: '#37a2da'
                  // }
                }
              },
              {
                name: '正面',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true
                  }
                },
                data: [120, 102, 141, 174, 190, 250, 220],
                itemStyle: {
                  // emphasis: {
                  //   color: '#32c5e9'
                  // }
                }
              },
              {
                name: '负面',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'left'
                  }
                },
                data: [-20, -32, -21, -34, -90, -130, -110],
                itemStyle: {
                  // emphasis: {
                  //   color: '#67e0e3'
                  // }
                }
              }
            ]
          };
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
      this.createChart()
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
