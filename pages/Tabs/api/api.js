export default {
  getUserInfo:{
    url:'/waiter/user/user',
  },
  // 公共接口
  ImageUpload:{
     url:'/common/upload.api/imageUpload',
     method:'UPLOAD',
     host:'dev2'
  },
  FileUpload:{
    url:'/common/upload.api/fileUpload',
    method:'UPLOAD',
    host:'dev2'
  },
  updateWorkStatus:{
    url:'/waiter/user/work',
    method:'POST',
  },
  GetOrderList:{
    url:'/waiter/order/order_list'
  },
  getOrderStatusList:{
    url:'/waiter/order/order_state_list'
  }
}
