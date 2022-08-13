import {request} from '@/utils/request'
import {DownloadFile} from '@/utils/tool/function/Media.js'

export const UploadImg = (tempFilePath)=>{
  if(!tempFilePath) throw SyntaxError("请输入图片路径")
  return new Promise(async (resolve,reject)=>{
    try{
      if(!tempFilePath.includes('http://tmp/')) {
         tempFilePath = await DownloadFile(tempFilePath)
      }
      console.log("tempFilePath:",tempFilePath)
      request('Tabs.ImageUpload',{
        file:tempFilePath
      }).then(res=>{
        console.log("图片上传成功--:",res.data.fileurl)
        resolve(res.data.fileurl)
      }).catch(e=>{
        console.log("图片上传错误:",e)
        reject(e)
      })
    }catch(e){
      reject(e)
    }
  })
}

export const UploadFile = (tempFilePath)=>{
  if(!tempFilePath) throw SyntaxError("请输入文件路径")
  return new Promise(async (resolve,reject)=>{
    try{
      if(!tempFilePath.includes('http://tmp/')) {
        tempFilePath = await DownloadFile(tempFilePath)
      }
      request('Tabs.FileUpload',{
        file:tempFilePath
      }).then(res=>{
        console.log("文件上传成功--:",res.data.fileurl)
        resolve(res.data.fileurl)
      }).catch(e=>{
        console.log("文件上传错误:",e)
        reject(e)
      })
    }catch(e){
      reject(e)
    }
  })
}