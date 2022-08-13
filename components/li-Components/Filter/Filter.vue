<template>
  <view class="wrap">
    
    <view class="Filter">
      <view class="justify-between group_7">
        <view class="flex-row group_8" @click="selectTab(0)">
          <text :class="{'active':(activeTab==0&&showPopup) || activeList[0]}">热门推荐</text>
          <view class="icon" @click.stop="selectTab(-1)">
            <u-icon name="arrow-up-fill" size="15" color='#266EFF' v-if="activeTab==0&&showPopup "></u-icon>
            <u-icon name="arrow-down-fill" size="15" color='#266EFF' v-else-if="activeList[0]"></u-icon>
            <u-icon name="arrow-down-fill" size="15" v-else></u-icon>
          </view>
        </view>
        <view class="flex-row group_8" @click="selectTab(1)">
          <text :class="{'active':(activeTab==1&&showPopup) || activeList[1]}">性别</text>
          <view class="icon" @click.stop="selectTab(-1)">
            <u-icon name="arrow-up-fill" size="15" color='#266EFF' v-if="activeTab==1&&showPopup"></u-icon>
            <u-icon name="arrow-down-fill" size="15" color='#266EFF' v-else-if="activeList[1]"></u-icon>
            <u-icon name="arrow-down-fill" size="15" v-else></u-icon>
          </view>
        </view>
        <view class="flex-row group_8" @click="selectTab(2)">
          <text :class="{'active':(activeTab==2&&showPopup) || activeList[2]}">个性标签</text>
          <view class="icon" @click.stop="selectTab(-1)">
            <u-icon name="arrow-up-fill" size="15" color='#266EFF' v-if="activeTab==2&&showPopup "></u-icon>
            <u-icon name="arrow-down-fill" size="15" color='#266EFF' v-else-if="activeList[2]"></u-icon>
            <u-icon name="arrow-down-fill" size="15" v-else></u-icon>
          </view>
        </view>
      </view>
    </view>
    <view class="popup">
      <TagsPopup ref="TagsPopup" :innerStatusTypes="statusTypes" :show.sync="showPopup" @goFilter="goFilter" :activeTab="activeTab" @selectStatus="selectStatus"></TagsPopup>
    </view>
  </view>
  
</template>

<script>
  import TagsPopup from './TagsPopup.vue'
  export default {
    emits:['update:showCover'],
    props:{
      showCover:{
        default:false
      },
      statusTypes:{
        default: [
          {
            id: 'new',
            name: '最新发布',
            is_choose: false
          },
          {
            id: 'finished',
            name: '已完成',
            is_choose: false
          },
        ]
      }
    },
    components:{
      TagsPopup
    },
    data(){
      return {
        activeTab:0,
        showPopup:false,
        activeList:[false,false,false]
      }
    },
    computed:{
    },
    watch:{
      showPopup(bool) {
        this.$emit('update:showCover',bool)
      },
      showCover(bool) {
        this.showPopup = bool
      }
    },
    methods: {
      filterNew() {
        this.$refs.TagsPopup.filterNew()
      },
      filterFinish() {
        this.$refs.TagsPopup.filterFinish()
      },
      goFilter(obj) {
        this.$emit('goFilter',obj)
      },
      selectTab(index) {
        if(index==-1) {
          this.showPopup = !this.showPopup
          return
        }
        else {
          this.showPopup = true
        }
        this.activeTab = index
      },
      selectStatus(index,bool) {
        this.$set(this.activeList,index,bool) //通过下标改变vue2检测不到 要用$set
        // this.activeList[index] = bool
      }
    }
  }
</script>

<style lang="scss" >
  .wrap {
    position: relative;
    // background-color: #fff;
    .popup {
      position: relative;
      // position: absolute;
      // top: 50rpx;
      // left: -24rpx;
    }
  }
  .Filter{
    // background-color: #fff;
    background-color: transparent;
    padding: 0 24rpx;
    .flex-row {
      padding: 23rpx 0;
    }
    .active {
      color: #266EFF;
    }
    .icon {
      margin-left: 12rpx;
      display: flex;
      align-items: center;
    }
    .image_7 {
      align-self: center;
      width: 14rpx;
      height: 9rpx;
    }
    .group_7 {
      margin-top: 12rpx;
    }
    .group_8 {
      color: #666666;
      font-size: 30rpx;
      line-height: 36rpx;
      white-space: nowrap;
    }
  }
</style>
