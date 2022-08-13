import {
  onLoad,
  onShow,
  onReachBottom as _onReachBottom,
  onPullDownRefresh as _onPullDownRefresh
} from "@dcloudio/uni-app";
import {
  request
} from '@/utils/request/index.js'

import {ref,computed,watchEffect,toRefs,watch,isRef} from 'vue'


export function useListPage(params={}) {
  let customParams = params
  let customParamsDeRef = $computed(()=>{
    let obj = {}
    Object.keys(customParams).forEach(i=>{
      let item = customParams[i]
      if(isRef(item)) {
        item = item.value
      }
      obj[i] = item
    })
    return obj
  })
  let _page = ref(1),
      _per_page = ref(20),
      _total_page = ref(0),
      _list = ref([]),
      _is_loading = ref(false),
      _innerRequestParams = null,
      _innerRequest = null,
      _limit = 20,
      _response = ref()
  
  const page_end_type = computed(()=>{
    //loading noData noMore loadMore
    if(_is_loading.value && _list.value.length === 0 ) return 'loading'
    else if (!_is_loading.value && _list.value.length === 0 ) return 'noData'
    else if(_list.value.length > 0 &&  _page.value < _total_page.value && !_is_loading.value) return 'loadMore'
    else if(_list.value.length>0 && _page.value === _total_page.value && !_is_loading.value) return 'noMore'
    else return '....'
  })
  const getBasicParams = ()=>{
    let params = {
      page:_page.value,
      per_page:_per_page.value,
      ...customParamsDeRef
    }
    return params
  }
   const innerGetList = (url,params={},options={}) => {
     return new Promise( async (resolve,reject) => {
       _is_loading.value = true
       // let {data:response} = await getMore()
       let {data:response} = await request(url,params,options)
       let {
         // 当前页面
         current_page = 1,
         // 总页数， total_pages 和 last_page 相同
         last_page,
         //每页数据量
         per_page = 20,
         //总数据个数
         total = 0,
         // 数据
         data = []
       } = response || {}
       _page.value = current_page
       if(!last_page) {
         last_page = Math.ceil(total/per_page)
       }
       _total_page.value = last_page
       if(_page ===1 ) {
         _list.value = data
       }
       else {
         _list.value = [..._list.value,...data]
       }
       _is_loading.value = false
       _response.value = response
       resolve( {
         data:_list.value
       })
     })
   }
  const  GetList = (url,params={},options={}) =>{
    if(!url) throw new warn('请传入url')
    reset()
    _innerRequestParams = Object.assign(getBasicParams(),params)
    _innerRequest = (reFreshParams)=> {
      let innerParams = Object.assign({},_innerRequestParams,reFreshParams)
      innerGetList(url,innerParams,options)
    }
    return innerGetList(url,_innerRequestParams,options)
  }
  const reset = ()=> {
    _page.value = 1
    _total_page.value = 0
    _is_loading.value = false
    _list.value = []
  }
   const RefreshList = (reFreshParams={})=> {
     reset()
    let params = Object.assign(getBasicParams(),reFreshParams)
    _innerRequest&&_innerRequest(params)
    
  }
  
  const onReachBottom = ()=> _onReachBottom(()=>{
    console.log("--onReachBottom--")
    if(!_is_loading.value && _page.value < _total_page.value ) {
      _page.value ++ 
      _innerRequest&&_innerRequest()
    }
  })  
  const onPullDownRefresh = () => _onPullDownRefresh(()=>{
    console.log("--onPullDownRefresh--")
    RefreshList()
    uni.stopPullDownRefresh()
  })
  onReachBottom()
  onPullDownRefresh()
  return {
    onReachBottom,
    onPullDownRefresh,
    GetList,
    RefreshList,
    page_end_type,
    list : _list,
    response:_response
  }
}