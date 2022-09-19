<template>
  <view class="Pie">
    <Title name="基础饼图"></Title>
    <div class="CircleChart" style="height:500rpx">
      <f2Vue  :onInit="basicPie" />
    </div>
    <Title name="带标签饼图"></Title>
    <div class="CircleChart" style="height:550rpx">
      <f2Vue  :onInit="withLabelPie" />
    </div>
    <Title name="带标签,文本的饼图"></Title>
    <div class="CircleChart" style="height:650rpx">
      <f2Vue  :onInit="labelAndLegendPie" />
    </div>
    <Title name="可点击,自定义插槽的饼图"></Title>
    <div class="CircleChart" style="height:650rpx">
      <f2Vue  :onInit="canClickLabelPie">
        <template #center>
          <view class="slot-center">
            <view class="title">{{title}}</view>
            <view class="money">{{money?`￥${money}`:''}}</view>
          </view>
        </template>
      </f2Vue>
    </div>
  </view>
</template>

<script>
import f2Vue from '../../../components/F2-for-Vue/F2-for-Vue'
import Title from '@/components/MainUI/Title.vue'
export default {
  components: {
    f2Vue,
    Title
  },
  data() { 
    return {
      title:'',
      money:'',
      data:[
            { genre: 'Sports', sold: 275 },
            { genre: 'Strategy', sold: 115 },
            { genre: 'Action', sold: 120 },
            { genre: 'Shooter', sold: 350 },
            { genre: 'Other', sold: 150 }
        ],
    }
  },
  methods: {
    basicPie(F2,config) {
      const map = {
        芳华: '40%',
        妖猫传: '20%',
        机器之血: '18%',
        心理罪: '15%',
        寻梦环游记: '5%',
        其他: '2%'
      };
      const data = [{
        name: '芳华',
        percent: 0.4,
        a: '1'
      }, {
        name: '妖猫传',
        percent: 0.2,
        a: '1'
      }, {
        name: '机器之血',
        percent: 0.18,
        a: '1'
      }, {
        name: '心理罪',
        percent: 0.15,
        a: '1'
      }, {
        name: '寻梦环游记',
        percent: 0.05,
        a: '1'
      }, {
        name: '其他',
        percent: 0.02,
        a: '1'
      }];
      const chart = new F2.Chart(config);
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + '%';
          }
        }
      });
      chart.legend({
        position: 'right',
        itemFormatter: function itemFormatter(val) {
          return val + '  ' + map[val];
        }
      });
      chart.tooltip(false);
      chart.coord('polar', {
        transposed: true,
        radius: 0.85
      });
      chart.axis(false);
      chart.interval()
        .position('a*percent')
        .color('name', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0' ])
        .adjust('stack')
        .style({
          lineWidth: 1,
          stroke: '#fff',
          lineJoin: 'round',
          lineCap: 'round'
        })
        .animate({
          appear: {
            duration: 1200,
            easing: 'bounceOut'
          }
        });
      
      chart.render();
      return chart
    },
    // 带标签的饼图
    withLabelPie(F2,config) {
      const data = [{
        name: '其他消费',
        y: 6371664,
        const: 'const'
      }, {
        name: '生活用品',
        y: 7216301,
        const: 'const'
      }, {
        name: '通讯物流',
        y: 1500621,
        const: 'const'
      }, {
        name: '交通出行',
        y: 586622,
        const: 'const'
      }, {
        name: '饮食',
        y: 900000,
        const: 'const'
      }];
      
      const chart = new F2.Chart(config);
      
      chart.source(data);
      chart.coord('polar', {
        transposed: true,
        radius: 0.75
      });
      chart.legend(false);
      chart.axis(false);
      chart.tooltip(false);
      
      // 添加饼图文本
      chart.pieLabel({
        sidePadding: 40,
        label1: function label1(data, color) {
          return {
            text: data.name,
            fill: color
          };
        },
        label2: function label2(data) {
          return {
            text: '￥' + String(Math.floor(data.y * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            fill: '#808080',
            fontWeight: 'bold'
          };
        }
      });
      
      chart.interval()
        .position('const*y')
        .color('name', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864' ])
        .adjust('stack');
      chart.render();
      return chart

    },
    // 带标签、图例的饼图
    labelAndLegendPie(F2,config) {
      let data = [
      {
        amount: 20,
        ratio: 0.1,
        memo: '学习',
        const: 'const'
      }, {
        amount: 100,
        ratio: 0.5,
        memo: '睡觉',
        const: 'const'
      }, {
        amount: 10,
        ratio: 0.05,
        memo: '吃饭',
        const: 'const'
      }, {
        amount: 30,
        ratio: 0.15,
        memo: '讲礼貌',
        const: 'const'
      }, {
        amount: 10,
        ratio: 0.05,
        memo: '其他',
        const: 'const'
      }, {
        amount: 20,
        ratio: 0.1,
        memo: '运动',
        const: 'const'
      }, {
        amount: 10,
        ratio: 0.05,
        memo: '暂无备注',
        const: 'const'
      }]
      const chart = new F2.Chart(config)
      chart.source(data)
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.4,
        radius: 0.75
      });
      chart.axis(false);
      chart.legend({
        position: 'bottom',
        align: 'center'
      });
      chart.tooltip(false);
      // 配置文本饼图
      chart.pieLabel({
        sidePadding: 75,
        label1: function label1(data) {
          return {
            text: data.memo,
            fill: '#808080'
          };
        },
        label2: function label2(data) {
          return {
            fill: '#000000',
            text: '$' + data.amount.toFixed(2),
            fontWeight: 500,
            fontSize: 10
          };
        }
      });
      chart.interval()
        .position('const*ratio')
        .color('memo', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#3436C7', '#223273' ])
        .adjust('stack');
      chart.render();
      // 绘制内阴影
      const frontPlot = chart.get('frontPlot');
      const coord = chart.get('coord'); // 获取坐标系对象
      frontPlot.addShape('sector', {
        attrs: {
          x: coord.center.x,
          y: coord.center.y,
          r: coord.circleRadius * coord.innerRadius * 1.2, // 全半径
          r0: coord.circleRadius * coord.innerRadius,
          fill: '#000',
          opacity: 0.15
        }
      });
      chart.get('canvas').draw();
      return chart
    },
    // 可点击,自定义插槽的饼图
    canClickLabelPie(F2,config) {
      let that = this
      const data = [{
        const: 'const',
        type: '交通出行',
        money: 51.39
      }, {
        const: 'const',
        type: '饮食',
        money: 356.68
      }, {
        const: 'const',
        type: '生活日用',
        money: 20.00
      }, {
        const: 'const',
        type: '住房缴费',
        money: 116.53
      }];
      const chart = new F2.Chart(config);
      chart.source(data);
      chart.coord('polar', {
        transposed: true,
        radius: 0.9,
        innerRadius: 0.5
      });
      chart.axis(false);
      chart.legend(false);
      chart.tooltip(false);
      chart.interval()
        .position('const*money')
        .adjust('stack')
        .color('type', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14' ]);
      chart.pieLabel({
        sidePadding: 30,
        activeShape: true,
        label1: function label1(data) {
          return {
            text: '￥' + data.money,
            fill: '#343434',
            fontWeight: 'bold'
          };
        },
        label2: function label2(data) {
          return {
            text: data.type,
            fill: '#999'
          };
        },
        onClick: function onClick(ev) {
          const data = ev.data;
          if (data) {
            console.log(data)
            that.title = data.type
            that.money = data.money
            // $('#title').text(data.type);
            // $('#money').text(data.money);
          }
        }
      });
      chart.render();
      return chart
    },
    // 柱状图
    initChart(F2,config) {
        // Step 1: 创建 Chart 对象
        const chart = new F2.Chart(config)
        // Step 2: 载入数据源
        chart.source(this.data)
        // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
        chart.interval()
        .position('genre*sold')
        .color('genre')
        // Step 4: 渲染图表
        chart.render()
        return chart
    },
  }
 }
</script>

<style lang="less" scoped>
  .Pie {
    padding: 24rpx;
    .CircleChart{
      width: 100%;
      height: 600rpx;
      margin-bottom: 24rpx;
      .slot-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        .title {
          font-size: 26rpx;
          color: #888;
        }
        .money {
          font-size: 34rpx;
          font-weight:bold;
          color: #333;
        }
      }
    }
  }
  
</style>
