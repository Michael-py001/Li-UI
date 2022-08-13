import {
	nav
} from '@/pages/index.js'

import Config from '@/utils/Config.js'

/**
 * 打开加载层
 */
export const ShowLoading = (title = '加载中…', {
	mask = false
} = {}) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title,
			mask,
			success: res => {
				resolve(res)
			},
			fail: res => {
				reject(res)
			}
		})
	})
}
/**
 * 关闭加载层
 */
export const CloseLoading = () => {
	return new Promise((resolve, reject) => {
		uni.hideLoading({
			success: res => {
				resolve(res)
			},
			fail: res => {
				reject(res)
			}
		})
	})
}
/**
 * 打开消息提示框
 */
export const ShowToast = (title = '温馨提示', {
	icon = 'none',
	image = '',
	duration = 1500,
	mask = true
} = {}) => {
	return new Promise((resolve, reject) => {
		uni.showToast({
			title,
			icon,
			image,
			duration,
			mask,
			success: res => {
        setTimeout(()=>{
          resolve(res)
        },duration)
				
			},
			fail: res => {
				reject(res)
			}
		})
	})
}
/**
 * 关闭消息提示框
 */
export const CloseToast = () => {
	return new Promise((resolve, reject) => {
		uni.hideToast({
			success: res => {
				resolve(res)
			},
			fail: res => {
				reject(res)
			}
		})
	})
}

/**
 * 打开询问框
 */
export const ShowModal = (content = '确认吗？', {
	title = '提示',
	showCancel = false,
	cancelText = '取消',
	cancelColor = '#000000',
	confirmText = '确定',
	confirmColor = '#576B95'
} = {}) => {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title,
			content,
			showCancel,
			cancelText,
			cancelColor,
			confirmText,
			confirmColor,
			success: res => {
				resolve(res)
			}
		})
	})
}

/**
 * 打开询问框
 */
export const ShowConfirm = (content = '确认吗？', {
	title = '提示',
	cancelText = '取消',
	confirmText = '确定',
	confirmColor = '#576B95',
	showCancel = true
} = {}) => {
	return ShowModal(content, {
		title,
		cancelText,
		confirmText,
		confirmColor,
		showCancel
	})
}

/**
 * 打开操作菜单
 */
export const ShowActionSheet = (itemList = [], {
	itemColor = '#000000',
	valueKey = 'value'
} = {}) => {
	return new Promise((resolve, reject) => {
		const _itemList = itemList.map(item => item[valueKey])
		uni.showActionSheet({
			itemList: _itemList,
			itemColor,
			success: ({
				tapIndex
			}) => {
				resolve({
					value: itemList[tapIndex][valueKey],
					selectItem: itemList[tapIndex],
					tapIndex
				})
			},
			fail: res => {
				reject(res)
			}
		})
	})
}
/**
 *  骨架屏渲染占位元素
 */
export const SkeletonText = (text = '', loading = false, count = 4) => {
	if (typeof text !== 'string') {
		//如果传的是空对象，直接为空字符串
		text = ''
	}
	if (!text && loading) {
		let show_string = ""
		for (let i = 0; i < count; i++) {
			show_string += "　"
		}
		return show_string;
	} else {
		return text
	}
}

export const SkeletonArray = (array = '', loading = false, count = 4) => {
	if (array.length == 0 && loading) {
		let show_array = []
		for (let i = 0; i < count; i++) {
			show_array.push({})
		}
		return show_array;
	} else {
		return array
	}
}

/**
 * 微信授权
 */
export const WechatAuthorize = scope => {
	return new Promise((resolve, reject) => {
		uni.authorize({
			scope: `scope.${scope}`,
			success: res => {
        console.log("WechatAuthorize--success:",res)
				resolve(res)
			},
			fail: res => {
        console.log("WechatAuthorize--fail:",res)
				reject(res)
			}
		})
	})
}
/**
 * 授权管理
 */
export const GetSetting = ({
	scope,
	title = '您尚未授权，是否前往授权',
	confirmText = '去授权'
}) => {
	return new Promise((resolve, reject) => {
		uni.getSetting({
			success: ({
				authSetting
			}) => {
				if (authSetting[`scope.${scope}`]) {
					resolve()
				} else {
					WechatAuthorize(scope).then(() => {
						resolve()
					}).catch(() => {
						ShowConfirm(title, {
							confirmText
						}).then(res => {
              wx.openSetting({
                success:(res)=>{
                  if(res.authSetting[`scope.${scope}`]) {
                    ShowToast('设置成功')
                  }
                  else {
                    ShowToast('设置失败，请重新检查设置，否则将影响功能使用')
                  }
                }
              })
						})
					})
				}
			}
		})
	})
}

// 图片上传
export const ImageUpload = (op = {}) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '上传中...',
			mask: true
		})
		let url = `${Config.host[Config.env]}/Upload/UploadPublicApi/uploadFile`
		let option = Object.assign({
			url,
			filePath: '',
			name: 'file'
		}, op)
		uni.uploadFile({
			url,
			filePath: option.filePath,
			name: option.name,
			success: (res) => {
				let data = res.data
				if (typeof data != "object") {
					data = JSON.parse(res.data)
				}

				if (data.data) {
					resolve(data.data)
				} else {
					reject(data)
				}
			},
			fail: err => {
				reject(err)
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}

export default {
	install: Vue => {
		Vue.config.globalProperties.$ShowLoading = ShowLoading
		Vue.config.globalProperties.$CloseLoading = CloseLoading
		Vue.config.globalProperties.$ShowToast = ShowToast
		Vue.config.globalProperties.$CloseToast = CloseToast
		Vue.config.globalProperties.$ShowModal = ShowModal
		Vue.config.globalProperties.$ShowConfirm = ShowConfirm
		Vue.config.globalProperties.$ShowActionSheet = ShowActionSheet
		Vue.config.globalProperties.$st = SkeletonText
		Vue.config.globalProperties.$sa = SkeletonArray
		Vue.config.globalProperties.$GetSetting = GetSetting
		Vue.config.globalProperties.$ImageUpload = ImageUpload
		
	},
	ShowLoading,
	CloseLoading,
	ShowToast,
	CloseToast,
	ShowModal,
	ShowConfirm,
	ShowActionSheet,
	GetSetting,
	ImageUpload
}
