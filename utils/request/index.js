import {
	apis
} from "@/pages/index.js"
import qs from 'qs'
import stringify from "qs/lib/stringify"
import Config from '../config.js'
import CodeHandle from './handle/code-handle.js'
import {ShowLoading,CloseLoading,ShowToast} from '@/utils/plugins/Interactive.js'
let getCommonHeader = () => {
  let header = {}
  Object.keys(Config['header']).forEach(i=>{      let value = Config['header'][i]      if(typeof value ==='function') {
        header[i] = value()      }
      else {
        header[i] = value
      }
  })
	return header
}

export const request = (api_name, data = {}, options = {}) => {
  return new Promise(async (resolve,reject)=>{
    //api名称不区分大小写
    api_name = api_name.toLowerCase()
    let api = apis[api_name]
    if (api) {
    	let method = (api['method'] || options['method'] || "GET").toUpperCase()
    	let {
    		header = {},
    		code_handle = {},
        loading = true
    	} = options
    
    	// 请求header优先级：传入>api>公共
    	header = {
    		...getCommonHeader(),
    		...(api['header'] || {}),
    		...header,
    	}
    	//参数
    	data = {
    		...(api['params'] || {}),
    		...data
    	}
      if(method==='post' || method === 'POST') {
        data = qs.stringify(data)
        loading&&ShowLoading()
      }
    	let url = Config.getBaseUrl(api['host']) + (api['url'] || '')
    	let res = null
    	if (method === 'UPLOAD') {
        loading&&ShowLoading()
    		//上传配置
    		let request_config = {
    			url,
    			filePath: data.file,
    			name: data.file_name || 'file',
    			formData: data,
    			header
    		}
    		res = await uni.uploadFile(request_config).catch(errorFunction)
    		if (typeof res.data === 'string') {
    			res.data = JSON.parse(res.data)
    		}
    	} else {
    		//请求全局配置
    		let request_config = {
    			url,
    			data,
    			header,
    			dataType: 'json',
    			method,
    		}
    		res = await uni.request(request_config).catch(errorFunction)
    	}
      CloseLoading()
    	let {
    		code = 200
    	} = (res.data || {})
    
    	//获取处理方法
    	code_handle = {
    		...CodeHandle,
    		...code_handle
    	}
      let handle_res 
      let handle_data =  {
    			api_name,
    			data,
    			options
    		}
    	if (code_handle[code] && typeof code_handle[code] === 'function') {
    		handle_res  = await code_handle[code](res.data,handle_data)
    		if (handle_res&&handle_res.status == false) {
          reject(handle_res)
    		}
        else if(handle_res.status) {
          resolve(handle_res) 
        }
        else {
          ShowToast(handle_res.message || '出错了~')
          reject(handle_res)
        }
    		
    	}
      else {
        handle_res = await code_handle['unknowCode'](res.data, handle_data)
        reject(handle_res)
      }
    } else {
      ShowToast('找不到该api')
      reject()
    	throw "找不到该api"
    }
  })
}

/**
 * 处理请求错误
 */
let errorFunction = (res) => {
	let {
		statusCode = 0
	} = res
	if (statusCode !== 0) {
		uni.showToast({
			title: '系统错误' + statusCode,
			duration: 2000,
			icon: 'none'
		})
	}
	//这里是详细的请求记录，可以及日志保留
	console.error('err', res)
}
