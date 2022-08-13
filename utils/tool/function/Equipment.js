
/**
 * 拨打电话
 */
export const MakePhoneCall = (phoneNumber = '') => {
	return new Promise((resolve, reject) => {
		uni.makePhoneCall({
			phoneNumber,
			success: () => {
				resolve()
			},
			fail: res => {
				reject(res)
			}
		})
	})
}

/**
 * 设置剪切板内容
 */
export const SetClipboardData = (value = '内容') => {
	return new Promise((resolve, reject) => {
		uni.setClipboardData({
			data: value,
			success: res => {
				resolve()
			},
			fail: res => {
				reject(res)
			}
		})
	})
}

/**
 * 打开扫一扫
 */
export const ScanCode = ({
	onlyFromCamera = false,
	scanType = ['barCode', 'qrCode']
} = {}) => {
	return new Promise((resolve, reject) => {
		uni.scanCode({
			onlyFromCamera,
			scanType,
			success: (res) => {
				resolve(res)
			},
			fail: erro => {
				reject(erro)
			}
		})
	})
}
