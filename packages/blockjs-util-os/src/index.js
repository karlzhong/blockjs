/**
 * 获取当前操作系统类型
 */
const ua = navigator.userAgent
export function isAndroid() {
  return /(?:Android)/.test(ua)
}
export function isFirefox() {
  return /(?:Firefox)/.test(ua)
}
export function isMobile() {
  return /(?:Mobile)/.test(ua)
}
export function isAndroidPhone() {
  return isAndroid() && isMobile()
}
export function isAndroidPad() {
  return isAndroid() && !isAndroidPhone()
}
export function isIpad() {
  return /(?:iPad.*OS)/.test(ua)
}
export function isIphone() {
  return !isIpad() && /(?:iPhone\sOS)/.test(ua)
}
export function isTablet() {
  return isIpad() || isAndroidPad() || /(?:PlayBook)/.test(ua) || isFirefox() && /(?:Tablet)/.test(ua)
}
export function isPhone() {
  return !isTablet() && (isAndroid() || isIphone() || /(?:(webOS|hpwOS)[\s\/]|BlackBerry.*Version\/|BB10.*Version\/|CriOS\/)/.test(ua) || isFirefox() && isMobile())
}
export function isIOS() {
  return isIpad() || isIphone()
}
export function isPc() {
  return !isAndroid() && !isIphone() && !isIpad()
}