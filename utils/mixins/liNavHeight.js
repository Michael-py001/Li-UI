let myFn = null
export default {
	data() {
		return {
			screenHeight: 0,
			screenWidth: 0,
			navHeight: 95, // 默认高度 状态栏高度 + 内容高度
			statusBarHeight: 40, // 状态栏高度
			contentHeight: 45, // 内容高度
			isNearTop: false,
      isNearTopLess:false,
			windowWidth: 414,
			windowHeight: 814,
      gapHeight:14,
      btnHeight:45,
		}
	},
	onShow() {
		wx.getSystemInfo({
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
        let statusBarHeight = res.statusBarHeight, //状态栏高度
            btnHeight = btnInfo.height, //胶囊高度
            gapHeight = (btnInfo.top - statusBarHeight) * 2,//状态栏到胶囊的间距+胶囊到内容的间距
            navHeight = gapHeight + btnHeight + statusBarHeight  //导航栏高度
        this.gapHeight = gapHeight<0?8:gapHeight
        this.btnHeight = btnHeight
				this.screenHeight = res.screenHeight
				this.screenWidth = res.screenWidth
        this.statusBarHeight = statusBarHeight//  + 7 // 胶囊的上边距7px
        this.contentHeight = /iOS/ig.test(res.system) ? 48 : 45 // ios胶囊区域48px，安卓胶囊区域40px
				// this.statusBarHeight = /iOS/ig.test(res.system) ? res.statusBarHeight+1 : (res.statusBarHeight*1 + 7) //  + 7 // 胶囊的上边距7pxholdHeightLess
				// this.contentHeight = /iOS/ig.test(res.system) ? 48 : 45 // ios胶囊区域48px，安卓胶囊区域40px
				this.navHeight = navHeight
				this.windowWidth = res.windowWidth
				this.windowHeight = res.windowHeight
			}
		})
		myFn = this.checkScrollTop()
	},
  computed:{
    holdHeight() {
      return this.gapHeight + this.navHeight
    },
    holdHeightMore() {
      return this.gapHeight*2  + this.navHeight
    },
    holdHeightLess() {
      return this.gapHeight/2 + this.navHeight
    },
    holdHeightLess2() {
      return  this.gapHeight/2 + this.navHeight/1.2
    },
    holdHeightLess3() {
      return  this.navHeight
    },
  },
	methods: {
		checkScrollTop() {
			return (scrollTop) => {
        // #ifndef MP-WEIXIN
          this.isNearTop = scrollTop > this.gapHeight/2
        // #endif
        
        // #ifdef MP-WEIXIN
          this.isNearTop = scrollTop > this.gapHeight // scrollTop > this.navHeight
        // #endif
				this.isNearTopLess = scrollTop >  140 + this.btnHeight  - this.gapHeight
			}
		}
	},
	watch: {},
	onPageScroll(Object) {
		myFn && myFn(parseFloat(Object.scrollTop))
	}
}
