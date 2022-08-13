import {ShowToast,ShowModal} from '@/utils/plugins/Interactive.js'
import {nav} from '@/pages/index.js'
// import {autoLogin} from '@/share/UserLogin.js'
import {request} from '@/utils/request'

let reRequestLimit = 5 //最大重新请求次数
let reRequestNum = 0
// 再次请求
const reRequest = (request_info)=>{
  return new Promise(async (resolve,reject)=>{
    reRequestNum += 1
    if(reRequestNum > reRequestLimit) {
      reject(false)
    }
    try{
      let res = await request(request_info.api_name,request_info.data,request_info.options)
      if(res.status) {
        reRequestNum = 0
        resolve(res)
      }
      else {
        reject(false)
      }
    }catch(e){
      console.log("err:",e)
      reject(false)
    }
  })
}
export default {
  /*
    code	说明
    200	请求成功
    400	请求失败
    506	登录凭证已过期
    507	需要入驻申请
    508	用户已拉黑
  */
	/**
	 * @param {object}  request_info 原请求信息
	 */
	"200": async (res, request_info) => {
		return res
	},
  "400": async (res,request_info) => {
    ShowToast(res.msg || '出错了~')
    return res
  },
  "506":  async (res,request_info) => {
    //登录凭证已过期
    let result =true
    // let result = await autoLogin()
    if(result) {
      let res = await reRequest(request_info)
      
      return res
    }
    else {
      // ShowToast(res.msg || '出错了~')
      ShowModal('您还未登录，是否前往登录？',{
        confirmText:'去登录',
        showCancel:true
      }).then(()=>{
        nav('User.Login')
      })
      return res
    }
    
  },
  "507" : async (res,request_info) => {
    await ShowToast(res.msg || '您需要先申请账号~')
    nav('Play.ApplyAccount',{},'redirectTo')
    return res
  },
  "508":async (res,request_info) => {
    await ShowToast(res.msg || '出错了~')
    return res
  },
  "unknowCode":async (res,request_info) => {
    await ShowToast(res.msg || '出错了~')
    return res
  }
}
