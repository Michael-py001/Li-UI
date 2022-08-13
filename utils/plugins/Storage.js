import Config from '@/utils/config'

const setLocalexpired = (data, expire_second = 0) => {
	if (Config.localexpired.open || second != 0) {
		let millisecond = 0
		if (expire_second == 0) {
			var exdate = new Date();
			// 计算失效时间
			let {
				day = 0, hours = 0, minutes = 0, seconds = 0
			} = Config.localexpired
			let millisecond = (day * 60 * 60 * 24 * 1000) +
				(hours * 60 * 60 * 1000) +
				(minutes * 60 * 1000) +
				(seconds * 1000)
		} else {
			millisecond = expire_second * 1000
		}
		return {
			data,
			expired: exdate.getTime() + millisecond
		}
	} else {
		return {
			data,
			expired: 0
		}
	}
}

const getLocalexpired = (data) => {
	if (!data) {
		return data
	}
	// 过期失效
	if (Date.now() > data.expired && data.expired != 0) {
		return ''
	}
	return data
}

/**
 * 设置缓存(异步)
 */
export const SetStorage = (key, value, expire = 0) => {
	return new Promise((resolve, reject) => {
		value = setLocalexpired(value, expire)
		uni.setStorage({
			key,
			data: value,
			success: e => {
				resolve({
					...e,
					key,
					value
				})
			},
			fail: e => {
				reject(e)
			}
		})
	})
}

/**
 * 设置缓存
 */
export const SetStorageSync = (key, value, expire = 0) => {
	value = setLocalexpired(value, expire)
	let e = uni.setStorageSync(key, value)
	return {
		...e,
		key,
		value
	}
}

/**
 * 获取指定key缓存(异步)
 */
export const GetStorage = key => {
	return new Promise((resolve, reject) => {
		uni.getStorage({
			key,
			success: e => {
				e = getLocalexpired(e.data)
				if (e) {
					resolve({
						...e,
						key
					})
				} else {
					resolve(e)
				}
			},
			fail: e => {
				reject(e)
			}
		})
	})
}

/**
 * 获取指定key缓存
 */
export const GetStorageSync = key => {
	let e = uni.getStorageSync(key)
	return getLocalexpired(e.data)
}


/**
 * 获取缓存信息(异步)
 */
export const GetStorageInfo = () => {
	return new Promise((resolve, reject) => {
		uni.getStorageInfo({
			success: e => {
				resolve(e)
			},
			fail: e => {
				reject(e)
			}
		})
	})
}

/**
 * 获取缓存信息
 */
export const GetStorageInfoSync = () => {
	return uni.getStorageInfoSync()
}


/**
 * 移除指定key缓存(异步)
 */
export const RemoveStorage = key => {
	return new Promise((resolve, reject) => {
		uni.removeStorage({
			key,
			success: e => {
				resolve({
					...e,
					key
				})
			},
			fail: e => {
				reject(e)
			}
		})
	})
}

/**
 * 移除指定key缓存
 */
export const RemoveStorageSync = key => {
	return uni.removeStorageSync(key)
}



/**
 * 清除所有的storage缓存(异步)
 */
export const ClearStorage = () => {
	return new Promise((resolve, reject) => {
		uni.clearStorage({
			success: e => {
				resolve(e)
			},
			fail: e => {
				reject(e)
			}
		})
	})
}


/**
 * 清除所有的storage缓存
 */
export const ClearStorageSync = () => {
	return uni.clearStorageSync()
}
export default {
	install: Vue => {
		Vue.config.globalProperties.$SetStorageSync = SetStorageSync
		Vue.config.globalProperties.$GetStorageSync = GetStorageSync
		Vue.config.globalProperties.$GetStorageInfoSync = GetStorageInfoSync
		Vue.config.globalProperties.$RemoveStorageSync = RemoveStorageSync
		Vue.config.globalProperties.$ClearStorageSync = ClearStorageSync
		Vue.config.globalProperties.$SetStorage = SetStorage
		Vue.config.globalProperties.$GetStorage = GetStorage
		Vue.config.globalProperties.$GetStorageInfo = GetStorageInfo
		Vue.config.globalProperties.$RemoveStorage = RemoveStorage
		Vue.config.globalProperties.$ClearStorage = ClearStorage
	},
	SetStorageSync,
	GetStorageSync,
	RemoveStorageSync,
	ClearStorageSync,
	GetStorageInfoSync,
	SetStorage,
	GetStorage,
	RemoveStorage,
	ClearStorage,
	GetStorageInfo
}
