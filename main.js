import {
	nav,
	store
} from '@/pages/index.js'
import tool from '@/utils/tool/index.js'
import {
	request
} from '@/utils/request/index.js'


// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
Vue.prototype.$nav = nav
Vue.prototype.$Tool = tool
Vue.prototype.$Request = request
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$store = new Vuex.Store({
	modules: store
})

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif


// #ifdef VUE3

import {
	createSSRApp
} from 'vue'
import {
	createStore
} from 'vuex'
import * as Pinia from 'pinia';
import App from './App.vue'
// 引入uview
import uView from '@/components/uview-ui_2.0.33';
import Storage from '@/utils/plugins/Storage'
import Interactive from '@/utils/plugins/Interactive'
import Config from '@/utils/config.js'
export function createApp() {
	const app = createSSRApp(App)
  app.config.globalProperties.$Config = Config
	//路由导航
	app.config.globalProperties.$nav = nav
	//常用工具方法
	app.config.globalProperties.$Tool = tool
	//网络请求、文件上传
	app.config.globalProperties.$Request = request
	//vuex
	app.use(createStore({
		modules: store
	}))
  app.use(Pinia.createPinia());
  app.use(uView);
  uni.$u.config.unit = 'rpx'
  app.use(Interactive);
  app.use(Storage);
	return {
		app,
    Pinia
	}
}
// #endif
