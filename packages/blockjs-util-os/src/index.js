/**
 * 获取当前操作系统类型
 */
const ua = navigator.userAgent;
export const isAndroid = /(?:Android)/.test(ua);
export const isFirefox = /(?:Firefox)/.test(ua);
export const isMobile = /(?:Mobile)/.test(ua);
export const isAndroidPhone = isAndroid && isMobile;
export const isAndroidPad = isAndroid && !isAndroidPhone;
export const isIpad = /(?:iPad.*OS)/.test(ua);
export const isIphone = !isIpad && /(?:iPhone\sOS)/.test(ua);
export const isTablet = isIpad || isAndroidPad || /(?:PlayBook)/.test(ua) || isFirefox && /(?:Tablet)/.test(ua);
export const isPhone = !isTablet && (isAndroid || isIphone || /(?:(webOS|hpwOS)[\s\/]|BlackBerry.*Version\/|BB10.*Version\/|CriOS\/)/.test(ua) || isFirefox && isMobile);
export const isIOS = isIpad || isIphone;
export const isPc = !isAndroid && !isIphone && !isIpad;