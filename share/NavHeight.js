import {onLoad, onPageScroll} from '@dcloudio/uni-app'
export  function useNavHeight() {
   let navHeight = $ref(95), // 默认高度 状态栏高度 + 内容高度
      statusBarHeight = $ref(40), // 状态栏高度
      isNearTop = $ref(false),
      gapHeight = $ref(14),
      btnHeight = $ref(45)
      
  const setData = ()=> new Promise((resolve,reject)=>{
    uni.getSystemInfo({
    	success: res => {
        // #ifdef MP-WEIXIN
        const btnInfo = uni.getMenuButtonBoundingClientRect()
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
        statusBarHeight = res.statusBarHeight //状态栏高度
        console.log("btnInfo--:",btnInfo)
        let btnGapHeight = (btnInfo.top - statusBarHeight) * 2//状态栏到胶囊的间距+胶囊到内容的间距
        // #ifdef MP-WEIXIN
        gapHeight = btnGapHeight<0?8:btnGapHeight
        // #endif
        btnHeight = btnInfo.height, //胶囊高度
        
        navHeight = gapHeight + btnHeight + statusBarHeight  //导航栏高度
        console.log("btnGapHeight:",btnGapHeight)
        console.log("gapHeight:",gapHeight)
        console.log("btnHeight:",btnHeight)
        console.log("statusBarHeight:",statusBarHeight)
        console.log("navHeight:",navHeight)
        resolve()
    	}
    })
  })
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