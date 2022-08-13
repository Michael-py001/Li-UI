// 基于uView api  防抖方法
import debounce from './function/debounce.js'
// 基于uView api  节流方法
import throttle from './function/throttle.js'

import * as Media from './function/Media.js'
import * as Equipment from './function/Equipment.js'
import * as Location from './function/Location.js'
import * as Validate from './function/Validate.js'

export default {
	debounce,
	throttle,
  ...Media,
  ...Equipment,
  ...Location,
  ...Validate
}
