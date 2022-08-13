<template>
  <view class="TagsPopup" v-show="innerShow">

    <view class="content">
      <!-- 任务类型 -->
      <view class="main" v-if="activeTab==0">
        <view class="right">
            <view class="box" :class="{'active':item.is_choose}" v-for="(item,index) in typeList"
              :key="index" @click="chooseBox(item,index)">
              {{item.tag_name}}
              <image class="box-selected" src="/static/Main/selected.png" mode="aspectFill" v-if="item.is_choose"></image>
            </view>
        </view>
      </view>
      <!-- 发布类型 -->
      <view class="main" v-if="activeTab==1">
        <view class="right">
          <view class="box" :class="{'active':item.is_choose}" v-for="(item,index) in publishTypes" :key="index"
            @click="choosePublishBox(item,index)">
            {{item.tag_name}}
            <image class="box-selected" src="/static/Main/selected.png" mode="aspectFill" v-if="item.is_choose"></image>
          </view>
        </view>
      </view>
      <!-- 任务状态 -->
      <view class="main" v-if="activeTab==2">
        <view class="right">
          <view class="box" :class="{'active':item.is_choose}" v-for="(item,index) in statusTypes" :key="index"
            @click="chooseStatusBox(item,index)">
            {{item.tag_name}}
            <image class="box-selected" src="/static/Main/selected.png" mode="aspectFill" v-if="item.is_choose"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      show: {
        default: false
      },
      activeTab: {
        default: 0
      },
      // 发布状态
      innerStatusTypes: {
        default:[]
      }
    },
    data() {
      return {
        innerShow: false,
        ActiveType: '',
        boxList: '',
        typeList:[
          { 
            tag_name: '全部',
            tag_id: 1,
            is_choose: false
          },
          {
            tag_name: '热门',
            tag_id: 1,
            is_choose: false
          },
          {
            tag_name: '普通',
            tag_id: 1,
            is_choose: false
          },
          
        ],
        selectPublishType:'',//选中的发布状态
        selectStatusType:'',//选中的任务状态
        publishTypes: [{
            id: 0,
            tag_name: '男',
            is_choose: false
          },
          {
            id: 1,
            tag_name: '女',
            is_choose: false
          },
          {
            id: 2,
            tag_name: '全部',
            is_choose: false
          },
        ],
        statusTypes:[]
      }
    },
    watch: {
      innerStatusTypes(value) {
        this.statusTypes = value
      },
      show(bool) {
        this.innerShow = bool
      },
      innerShow(bool) {
        if (!bool) {
          this.$emit('update:show', bool)
        }
      },
      isSelectStatusTypes(bool) {
        this.$emit('selectStatus', 0, bool)
      },
      isSelectTypeList(bool) {
        this.$emit('selectStatus', 2, bool)
      },
      isSelectPublishTypes(bool) {
        this.$emit('selectStatus', 1, bool)
      },
    },
    computed: {
      chooseBoxs() {
        let list = []
        if(this.typeList.length==0) return
        let chooseItem = this.typeList.filter(item => {
          return item.is_choose == true
        })
        list.push(...chooseItem)
        return list
      },
      isSelectStatusTypes() {
        let target = null
        if(this.typeList.length==0) return
        target = this.typeList.find(item => {
          if (item.is_choose == true) {
            return item
          }
        })
        return !!target
      },
      isSelectTypeList() {
        let target = this.statusTypes.find(item => {
          return item.is_choose == true
        })
        if(target) {
          this.selectStatusType = target.id
        }
        else {
          this.selectStatusType = ''
        }
        return !!target
      },
      isSelectPublishTypes() {
        let target = this.publishTypes.find(item => {
          return item.is_choose == true
        })
        if(target) {
          this.selectPublishType = target.id
        }
        else {
          this.selectPublishType = ''
        }
        return !!target
      }
    },
    mounted() {
      this.statusTypes = this.innerStatusTypes
      // this.ActiveType = Object.keys(this.typeList)[0]
      uni.$on('filterFinish', () => {
          this.$set(this.statusTypes[1], 'is_choose', true)
          // 开始筛选
          setTimeout(()=>{
            this.submit()
          },200)
          
          // this.getData()
        }),
        this.getData()
    },
    methods: {
      filterNew() {
        this.$set(this.statusTypes[0], 'is_choose', true)
        // 开始筛选
        setTimeout(()=>{
          this.submit()
        },200)
      },
      filterFinish() {
        this.$set(this.statusTypes[1], 'is_choose', true)
        // 开始筛选
        setTimeout(()=>{
          this.submit()
        },200)
      },
      getData() {
        // this.$Get('Common.GetPopupTags').then(res => {
          let typeList = [
            {
              tag_name: '选项1',
              tag_id: 1,
              is_choose: false
            },
            {
              tag_name: '选项2',
              tag_id: 2,
              is_choose: false
            },
            {
              tag_name: '选项3',
              tag_id: 3,
              is_choose: false
            },
            {
              tag_name: '选项4',
              tag_id: 4,
              is_choose: false
            },
            {
              tag_name: '选项5',
              tag_id: 5,
              is_choose: false
            },
          ]
          // res.data.lists.forEach(item => {
          //   typeList[item.category_name] = item.tag_list.map(item => {
          //     return {
          //       tag_name: item.tag_name,
          //       tag_id: item.tag_id,
          //       is_choose: false
          //     }
          //   })
          // })
          this.statusTypes = typeList
          // this.ActiveType = Object.keys(this.typeList)[0]
        // })
      },
      open() {
        this.innerShow = true
      },
      close() {
        this.innerShow = false
      },
      submit() {
        this.innerShow = false
        this.$emit('update:show', false)
        let ids = this.chooseBoxs.map(i=>i.tag_id)
        let selectPublishType
        if(this.selectPublishType!=='') {
          selectPublishType = this.selectPublishType
        }
        else {
          selectPublishType = '-1'
        }
        this.$emit('goFilter', {
          tag_ids: ids.join(','),
          task_type: selectPublishType,
          status: this.selectStatusType
        })
      },
      reset() {
        for (let key in this.typeList) {
          this.typeList[key].forEach(item => {
            item.is_choose = false
          })
        }
      },
      changeType(type) {
        this.ActiveType = type
      },
      chooseStatusBox(item, index) {
        if (item.is_choose) {
          item.is_choose = false
        } else {
          item.is_choose = true
        }
      },
      choosePublishBox(item, index) {

        let target = this.publishTypes[index]
        if (target.is_choose) {
          this.publishTypes.forEach(item => {
            item.is_choose = false
          })
          target.is_choose = false
        } else {
          this.publishTypes.forEach(item => {
            item.is_choose = false
          })
          target.is_choose = true
        }
        console.log(target)
      },
      chooseBox(item, index) {
        if (item.is_choose) {
          this.typeList.forEach(item => {
            item.is_choose = false
          })
          item.is_choose = false
        } else {
          this.typeList.forEach(item => {
            item.is_choose = false
          })
          item.is_choose = true
        }
      }
    }
  }
</script>

<style lang="scss">
  .TagsPopup {
    // margin-top: 15rpx;
    background-color: #fff;
    width: 750rpx;
    position: absolute;
    top: 0;
    left: 0;
    .cover {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100%;
      background-color: #000000;
      opacity: .5;
      z-index: 0;
      transition: .2s;
    }

    .content {
      z-index: 10;
      .main {
        display: flex;
        .right {
          display: flex;
          flex: 1;
          padding: 0rpx 30rpx;
          background-color: #ffffff;
          justify-content: flex-start;
          flex-direction: column;
            .box {
              display: flex;
              height: 98rpx;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 30rpx;
              font-weight: 400;
              text-align: left;
              color: #000000;
              border-bottom: 1rpx solid #e5e5e5;
              box-sizing: border-box;
              position: relative;
              &:last-child {
                border-bottom: none;
              }
              .box-selected {
                position: absolute;
                right: 24rpx;
                top: 50%;
                transform: translateY(-50%);
                width: 40rpx;
                height: 40rpx;
              }
              &.active {
                color: #266EFF;
              }
            }

        }
      }

      .btns {
        // position: fixed;
        bottom: 0rpx;
        left: 0;
        margin-top: 37rpx;
        width: 100%;
        height: 100rpx;
        justify-content: center;
        display: flex;
        padding: 0 24rpx;
        justify-content: space-between;
        // background-color: #fff;
        @include saveBottom(24rpx);
        z-index: 101;

        .reset {
          flex: 1 auto;
          margin-right: 24rpx;
        }

        .cancle {
          // width: 45%;
          flex: 1 auto;
        }
      }
    }
  }
</style>
