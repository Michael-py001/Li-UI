<template>
  <view class="flex-col items-center group_2">
    <u-image :width="width" :height="height" border-radius="24rpx" :src="src">
      <template #loading>
         <u-loading ></u-loading>
      </template>
    </u-image>
    <view class="wave" v-if="UserStore.Login">
      <li-Wave v-model="isPlaying"></li-Wave>
    </view>
    <!-- <image
      :src="`/static/Main/${isPlaying?'play2':'play1'}.png`"
      class="image_1"
      @click.stop="isPlaying=!isPlaying"
    /> -->
  </view>
</template>

<script setup>
  import {ref,watch} from 'vue'
  import useUserStore from '@/pages/User/li-store/'
  const props = defineProps({
    src:{
      default:''
    },
    width:{
      default:'180rpx'
    },
    height:{
      default:'180rpx'
    }
  })
  const UserStore= useUserStore()
  console.log("UserStore:",UserStore)
  let isPlaying = ref(false)
  let emits = defineEmits(['update:modelValue'])
  const AudioContext = createMusic(isPlaying)
  watch(isPlaying,(value)=>{
    emits('update:modelValue',value)
    if(value) {
      AudioContext.play()
    }
    else {
      AudioContext.stop()
    }
  })
  function createMusic(isPlaying) {
    const innerAudioContext = uni.createInnerAudioContext({useWebAudioImplement:true})
    innerAudioContext.autoplay = false
    innerAudioContext.src = 'https://downsc.chinaz.net/Files/DownLoad/sound1/201712/9483.mp3'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onStop((res) => {
      console.log('结束播放')
      isPlaying.value = false
    })
    innerAudioContext.onEnded((res) => {
      console.log('播放完毕')
      isPlaying.value = false
    })
    innerAudioContext.onError((res) => {
      console.log("播放失败--",res)
      isPlaying.value = false
    })
    return innerAudioContext
  }
</script>

<style lang="scss" scoped>
  .group_2 {
    display: inline-block;
    padding-bottom: 17rpx;
    width: 180rpx;
    position: relative;
  }
  .image {
    border-radius: 24rpx;
    width: 180rpx;
    height: 180rpx;
  }
  .wave {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .image_1 {
    box-shadow: 0px 4rpx 16rpx 0px #00000029;
    border-radius: 20rpx 12rpx 12rpx 20rpx;
    width: 156rpx;
    height: 40rpx;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>