<template>
  <view class="ChooseTimePopup">
     <u-popup v-model="show" mode="bottom" border-radius="24" closeable @close="updateModelValue(false)">
       <view class="ChooseTimePopup-content">
         <view class="title">
           预约时间
         </view>
         <TopTabs height="124rpx" :list="titleList" :customStyle="{'font-weight':550}" fontColor="#333333" activeTextColor="#2A85F5" activeFontSize="32" fontSize="32" @change="changeTab" tagColor="#2A85F5" bgColor="#fff" ></TopTabs>
         <view class="times" >
           <view class="time" v-for="(item,index) in timeList" :key="index" :class="{'active':item.choose==true,'disabled':item.disabled}" @click="clickItem(item)">
             {{item.label}}
           </view>
         </view>
         <scroll-view :scroll-y="true" class="text-scroll">
           <text class="tips">后台编辑注意事项，后台编辑注意事项，后台编辑注意事项，后台编辑注意事项，后台编辑注意事项</text>
         </scroll-view>
         <view class="btn">
           <li-Button @click="confirm">确认</li-Button>
         </view>
       </view>
     </u-popup>
  </view>
</template>

<script setup>
  import TopTabs from './TopTabs'
  import dayjs from 'dayjs'
  import 'dayjs/locale/zh-cn'
  dayjs.locale('zh-cn')
  import {ref,watch,reactive,getCurrentInstance} from 'vue'
  const {proxy:vueProxy} = getCurrentInstance()
  const emit = defineEmits(['update:modelValue','confirm'])
  const props = defineProps({
    modelValue:false
  })
  let show = ref(false),
      activeLabel = ref(''),
      selectTimes = []
  watch(()=>props.modelValue,(value)=>{
    show.value = value
  },{
    immediate:true
  })
  
  let titleList = []
  let timeList = reactive([
        {
          label:'08:00~09:00',
          disabled:true,
          choose:false,
          id:1
        },
        {
          label:'09:00~10:00',
          disabled:false,
          choose:false,
          id:2
        },
        {
          label:'10:00~11:00',
          disabled:false,
          choose:false,
          id:3
        },
        {
          label:'11:00~12:00',
          disabled:false,
          choose:false,
          id:4
        },
        {
          label:'12:00~13:00',
          disabled:true,
          choose:false,
          id:5
        },
        {
          label:'13:00~14:00',
          disabled:true,
          choose:false,
          id:6
        },
      ])
  activeLabel.value = timeList[0].label
  calcTimeList()
  function calcTimeList() {
    for(let i=0;i<15;i++) {
      let date = '',
          label = ''
      date = dayjs().add(i,'day')
      let dataFormat = date.format('MM-DD')
      if(i==0) {
        label = '今天'
      }
      else if(i==1) {
        label = '明天'
      }
      else {
        label = date.format('dddd')
      }
      titleList.push({
        id:dataFormat,
        name:`${label}`,
        date:dataFormat
      })
    }
  }
  function changeTab(e) {
    console.log(e)
  }
  function confirm() {
    emit('confirm',selectTimes.sort((a,b)=>a.id-b.id))
    close()
  }
  function clickItem(item) {
    if(item.disabled) return 
    if(selectTimes.length==0) {
      selectTimes[0] = item
      selectTimes[0].choose = true
    }
    else {
      if(selectTimes.includes(item)) {
        item.choose = false
        let targetIndex = selectTimes.findIndex(i=>i.id==item.id)
        selectTimes.splice(targetIndex,1)
      }
      else {
        if(Math.abs(item.id-selectTimes[0].id)>1) {
          return vueProxy.$ShowToast('只能预约连续时间段!')
        }
        if(selectTimes.length==1) {
          selectTimes[1] = item
          selectTimes[1].choose = true
        }
        else if(selectTimes.length==2) {
          selectTimes[1].choose = false
          selectTimes[1] = item
          selectTimes[1].choose = true
        }
      }
      
    }
    console.log(selectTimes)
  }
  function close() {
    show.value = false
  } 
  function open() {
    show.value = true
  } 
  
  function updateModelValue(bool) {
    emit('update:modelValue',bool)
  }
  defineExpose({
    close,
    open
  })
</script>

<style lang="scss" scoped>
  .ChooseTimePopup {
    &-content {
      min-height: 900rpx;
      padding: 31rpx 24rpx;
      .title {
        text-align: center;
        font-size: 30rpx;
        font-weight: bold;
        color: #333333;
        margin-bottom: 40rpx;
      }
      .text-scroll {
        margin: 40rpx 0;
        max-height: 300rpx;
      }
      .tips {
        display: inline-block;
        font-size: 28rpx;
        text-align: left;
        color: #b2b2b2;
        line-height: 44rpx;
      }
      .btn {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 24rpx 24rpx 0;
        @include saveBottom('24rpx');
      }
      .times {
        margin-top: 40rpx;
        display: grid;
        gap: 22rpx;
        grid-template-columns: repeat(3,1fr);
        .time {
          width: 214rpx;
          height: 72rpx;
          background: #f6f6f6;
          border-radius: 36rpx;
          font-size: 26rpx;
          text-align: center;
          color: #333333;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
          &.active {
            background: #158aff;
            color: #ffffff;
          }
          &.disabled {
            color:#d4d4d4;
            background-color: #f9f9f9;
          }
        }
      }
    }
    
  }
</style>