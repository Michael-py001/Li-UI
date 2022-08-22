import {onLoad, onPageScroll} from '@dcloudio/uni-app'
export function useNavHeight() {
   let navHeight = 95, // 默认高度 状态栏高度 + 内容高度
      statusBarHeight = 40, // 状态栏高度
      isNearTop = $ref(false),
      gapHeight = 14,
      btnHeight = 45
  
  const setData = ()=>{
    uni.getSystemInfo({
    	success: res => {
        // #ifdef MP-WEIXIN
        const btnInfo = wx.getMenuButtonBoundingClientRect()
        // #endif
        // #ifndef MP-WEIXIN
        const btnInfo = {
          bottom: 56,
          height: 32,
          left: 281,
          right: 367,
          top: 24,
          width: 86,
        }
        // #endif
        
        let btnGapHeight = (btnInfo.top - statusBarHeight) * 2,//状态栏到胶囊的间距+胶囊到内容的间距
        navHeight = gapHeight + btnHeight + statusBarHeight  //导航栏高度
        gapHeight = btnGapHeight<0?8:btnGapHeight
        btnHeight = btnInfo.height, //胶囊高度
        statusBarHeight = res.statusBarHeight //状态栏高度
    	}
    })
  }
  const holdHeight = $computed(()=>{gapHeight + navHeight})
  onPageScroll((res)=>{
    isNearTop = res.scrollTop > gapHeight
  })
  setData()
  return $$({
    holdHeight,
    navHeight,
    statusBarHeight,
    isNearTop,
    gapHeight,
    btnHeight,
  })
}