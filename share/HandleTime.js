import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

export function formatTime(timesamp,format='YYYY-MM-DD:HH:mm') {
  return dayjs(timesamp*1000).format(format)
}