export function wrapEvent(e) {
  if (!e) return;
  if (!e.preventDefault) {
    e.preventDefault = function() {};
  }
  // if(!e.changedTouches && e.mp && e.mp.changedTouches) {
  //   e['changedTouches'] = e.mp.changedTouches
  // }
  return e;
}

export const pixelRatio = uni.getSystemInfoSync().pixelRatio