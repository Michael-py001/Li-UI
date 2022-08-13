import {
	ShowToast,
	ShowLoading,
	CloseLoading,
	ShowConfirm
} from '@/utils/plugins/Interactive'

/**
 * 选择图片
 */
export const ChooseImage = ({
	count = 9,
	sizeType = ['original', 'compressed'],
	sourceType = ['album', 'camera']
} = {}) => {
	return new Promise((resolve, reject) => {
		uni.chooseImage({
			count,
			sizeType,
			sourceType,
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
 * 选择聊天文件
 */
export const chooseMessageFile = (
  {
    count=1,
    type = 'all',
    extension = ['mp3','aac','m4a','ogg','wav','flac','3gpp','amr']
  } ={}
)=>{
  return new Promise((resolve, reject)=>{
    uni.chooseMessageFile({
      count,
      type,
      extension,
      success:res => {
				resolve(res.tempFiles)
			},
			fail: err => {
        console.log("err:",err)
				reject(err)
			}
    }) 
  })
}

/**
 * 选择视频
 */
export const ChooseVideo = ({
	count = 1,
	mediaType = ['video'],
	sourceType = ['album', 'camera'],
  maxDuration = 15,
  camera = 'back'
} = {}) => {
	return new Promise((resolve, reject) => {
		uni.chooseMedia({
			count,
			mediaType,
			sourceType,
      maxDuration,
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
 * 保存图片至相册
 */
export const SaveImageToAlbum = url => {
	return new Promise((resolve, reject) => {
		DownloadFile(url).then((res) => {
			uni.saveImageToPhotosAlbum({
				filePath: res.tempFilePath,
				success: res => {
					ShowToast('保存成功')
					resolve()
				},
				fail: res => {
					console.log(res)
					ShowToast('保存失败,请重试')
					reject(res)
				}
			})
		}).catch((erro) => {
			reject(erro)
		});
	})
}

/**
 * 浏览图片
 */
export const PreviewImage = (list = [], index = 0) => {
	return new Promise((resolve, reject) => {
		const current = list[index]
		uni.previewImage({
			urls: list,
			current,
			success: () => {
				resolve()
			},
			fail: (res) => {
				reject(res)
			}
		})
	})
}

/**
 * 下载文件
 */
export const DownloadFile = url => {
	return new Promise((resolve, reject) => {
		// ShowLoading('下载中')
		uni.downloadFile({
			url,
			success: res => {
				if (res.statusCode === 200) {
					resolve(res.tempFilePath)
				} else {
					reject(res)
				}
			},
			fail: (err) => {
				reject(err)
			},
			complete: () => {
				// CloseLoading()
			}
		})
	})
}
