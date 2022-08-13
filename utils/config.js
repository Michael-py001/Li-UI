import {GetStorageSync} from '@/utils/plugins/Storage'
export default {
	env: 'dev',
	host: {
		dev: 'http://lpw.sh.yimac.cn',
		dev2: 'http://tpw.sh.yimac.cn', 
		pro: ''
	},
	// 公共请求头
	header: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
    'TOKEN':()=> {
      let token = GetStorageSync('TOKEN')
      return token
    }
  },
	//项目版本号
	version: "1.0.0",
  // 存储本地的缓存失效时间
  localexpired: {
  	day: 90, // 天
  	hours: 0, // 小时
  	minutes: 0, // 分钟
  	seconds: 0, // 秒
  	open: true // 是否开启
  },
	getBaseUrl(host) {
    if(!host) {
      return this.host[this.env] || '/'
    }
		else {
      return this.host[host] || '/'
    }
	}
}
