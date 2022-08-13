<template>
  <view class="Form">
    <view class="box">
      <TextInput label="平台昵称" height="114rpx" labelWidth="230"  holderPlaceText="请输入平台昵称" type="nickname" v-model="nickName"></TextInput>
      <TextInput label="身高" height="114rpx" type="number" labelWidth="230"  holderPlaceText="请输入身高" v-model="height">
        <template #pix>
          <view class="pix">cm</view>
        </template>
      </TextInput>
      <TemplateSlot label="头像(插槽)" height="144rpx">
        <view class="avatar-wrap">
          <button class="avatar" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
            <u-image width="120rpx" height="120rpx" radius="50%" :src="avatar?avatar:'/static/Main/default.png'" ></u-image>
          </button>
          <u-icon name="arrow-right" size="30" color="#C4C4C4"></u-icon>
        </view>
      </TemplateSlot>
      <ChoosePopup height="114rpx" :list="sexList" label="性别" labelWidth="230"  holderPlaceText="请选择性别" v-model="sex" ></ChoosePopup>
      <ChoosePopup height="114rpx"  mode="date" label="选择时间" labelWidth="230"  holderPlaceText="请选择时间" v-model="date" @confirm="confirmTime"></ChoosePopup>
      <ChooseNumber label="预估重量(Kg)" height="114rpx" labelWidth="230" v-model="weight"></ChooseNumber>
      <TextInput label="手机号" height="114rpx" labelWidth="230"  holderPlaceText="请输入手机号" type="number" v-model="phone" :handleGetCodeFunc="handleGetCodeFunc" mode="getCode" ></TextInput>
      <AddressSelect label="详细地址"  :border="true" labelWidth="190" :disabled="false" holderPlaceText="请选择详细地址" @comfirm="comfirmAddress"></AddressSelect>
      <ChooseExpressTime shake label="期望上门时间" labelWidth="230" :value="expressTime" @change="expressTimeChange"></ChooseExpressTime>
       <ChooseImages direction="column" :border="true" label="上传截图(纵向)" labelWidth="230" deleteIconType='two' :limitNum="5"  v-model="imgList"></ChooseImages>
        <ChooseImages  :border="true" label="上传截图(横向)" labelWidth="230" deleteIconType='two' :limitNum="5"  v-model="imgList"></ChooseImages>
        <IDCardUpload direction="column" v-model="idCardList"  deleteIconType='two' label="请上传您的有效身份证"></IDCardUpload>
        <TextareaInput direction="row" labelWidth="180" label="简介(横向)" holderPlaceText="请输入简介" v-model="detail"></TextareaInput>
        <TextareaInput   direction="colunm" label="简介(纵向)" holderPlaceText="请输入简介" v-model="detail"></TextareaInput>
    </view>
  </view>
</template>

<script setup>
  import TextInput from './components/TextInput'
  import ChoosePopup from './components/ChoosePopup'
  import ChooseImages from './components/ChooseImages'
  import IDCardUpload from './components/IDCardUpload'
  import TextareaInput from './components/TextareaInput'
  import AddressSelect from './components/AddressSelect'
  import TemplateSlot from './components/TemplateSlot'
  import ChooseNumber from './components/ChooseNumber'
  import ChooseExpressTime from './components/ChooseExpressTime'
  import dayjs from 'dayjs'
  let sexList =[
        {
            value: 1,
            label: '男'
          },
          {
            value: 2,
            label: '女'
          }
      ]
  let phone = $ref(''),
      imgList  = [],
      avatar = $ref(''),
      date = $ref('')
  const onChooseAvatar = ({detail:{avatarUrl}})=>{
    avatar = avatarUrl
  }
  const confirmTime = (value)=> {
    date = dayjs(value).format('YYYY-MM-DD')
  }
  const handleGetCodeFunc = ()=>{
    let data = {
      phone : phone
    }
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve()
      },1000)
    })
  }
</script>

<style lang="scss" scoped>
  .Form {
    padding: 24rpx;
    .box {
      display: flex;
      flex-direction: column;
      border-radius: 24rpx;
      overflow: hidden;
      margin-bottom: 24rpx;
      background-color: #fff;
      .pix {
        margin-left: 12rpx;
      }
      .avatar-wrap {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .avatar {
          margin-right: 12rpx;
        }
      }
      
    }
  }
</style>