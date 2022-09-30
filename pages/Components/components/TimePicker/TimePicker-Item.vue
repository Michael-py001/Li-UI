<template>
  <view class="TimePicker">
    <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange"
      class="picker-view">
      <picker-view-column>
        <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
      </picker-view-column>
      <picker-view-column>
        <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
      </picker-view-column>
      <picker-view-column>
        <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script>
  import dayjs from 'dayjs'
  export default {
    data() {
      const date = new Date()
      const years = []
      const year = date.getFullYear()
      const months = []
      const month = date.getMonth() + 1
      const days = []
      const day = date.getDate()
      //首次初始化
      let currentdate = `${year}-${month}-${day}`
      let daysInMonth = dayjs(date).daysInMonth() 
      for (let i = 1990; i <= date.getFullYear(); i++) {
        years.push(i)
      }
      for (let i = 1; i <= month; i++) {
        months.push(i)
      }
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(i)
      }
      this.$emit('update:Date',currentdate)
      return {
        title: 'picker-view',
        years,
        year,
        months,
        month,
        days,
        day,
        value: [9999, month - 1, day - 1],
        visible: true,
        indicatorStyle: `height: 50px;`,
        selectMonth:'',//保存选择的月份
        dayList:[]//生成的日
      }
    },
    methods: {
      bindChange: function(e) {
        const val = e.detail.value
        const monthIndex  = val[1] + 1
        this.year = this.years[val[0]]
        this.month = this.months[val[1]]
        this.day = this.days[val[2]]
        let date = `${this.year}-${this.month}`
        let daysInMonth = dayjs(date).daysInMonth()
        let newDays = []
        for (let i = 1; i <= daysInMonth; i++) {
          newDays.push(i)
        }
        this.days = newDays
        let resultDate = `${this.year}-${this.month}-${this.day}`
        this.$emit('update:Date',resultDate)
      }
    },
    computed: {},
  }
</script>

<style lang="scss" scoped>
  .TimePicker {
    .picker-view {
      width: 750rpx;
      height: 600rpx;
      margin-top: 20rpx;
    }

    .item {
      height: 50px;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
</style>
