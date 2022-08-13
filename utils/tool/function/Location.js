import {ShowConfirm,ShowToast} from '@/utils/plugins/Interactive.js'
/**
 * 选择位置
 */
export const ChooseLocation = (latitude, longitude, keyword = "") => {
	return new Promise((resolve, reject) => {
		uni.chooseLocation({
			keyword,
			success: data => {
				resolve(data)
			},
			fail: erro => {
				reject(erro)
			}
		})
	})
}

/**
 * 获取位置
 */
export const GetLocation = (type = "wgs84") => {
	return new Promise((resolve, reject) => {
		uni.getLocation({
			type,
			success: data => {
				resolve(data)
			},
			fail: erro => {
				reject(erro)
			}
		})
	})
}

/**
 * 打开地址位置查看
 */
export const OpenLocation = (latitude, longitude, scale = 18, {
	name = '',
	address = ''
} = {}) => {
	return new Promise((resolve, reject) => {
		uni.openLocation({
			latitude: latitude * 1,
			longitude: longitude * 1,
			scale,
			name,
			address,
			success: () => {
				resolve()
			},
			fail: erro => {
				reject(erro)
			}
		})
	})
}

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
              uni.openSetting({
                success: (res) => {
                  console.log("openSetting:", res)
                  if (res.authSetting[`scope.${scope}`]) {
                    ShowToast('设置成功')
                    resolve()
                  } else {
                    ShowToast('设置失败，请重新检查设置，否则将影响功能使用')
                    reject()
                  }
                }
              })

            })
          })
        }
      },
      fail() {
        reject(false)
      }
    })
  })
}
/**
 * 微信授权
 */
export const WechatAuthorize = scope => {
  return new Promise((resolve, reject) => {
    uni.authorize({
      scope: `scope.${scope}`,
      success: res => {
        console.log("WechatAuthorize--success:", res)
        resolve(res)
      },
      fail: res => {
        console.log("WechatAuthorize--fail:", res)
        reject(res)
      }
    })
  })
}