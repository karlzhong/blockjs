(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['blockjs-util-os'] = global['blockjs-util-os'] || {})));
}(this, (function (exports) { 'use strict';

/**
 * 获取当前操作系统类型
 */
var ua = navigator.userAgent;
function isAndroid() {
  return /(?:Android)/.test(ua)
}
function isFirefox() {
  return /(?:Firefox)/.test(ua)
}
function isMobile() {
  return /(?:Mobile)/.test(ua)
}
function isAndroidPhone() {
  return isAndroid() && isMobile()
}
function isAndroidPad() {
  return isAndroid() && !isAndroidPhone()
}
function isIpad() {
  return /(?:iPad.*OS)/.test(ua)
}
function isIphone() {
  return !isIpad() && /(?:iPhone\sOS)/.test(ua)
}
function isTablet() {
  return isIpad() || isAndroidPad() || /(?:PlayBook)/.test(ua) || isFirefox() && /(?:Tablet)/.test(ua)
}
function isPhone() {
  return !isTablet() && (isAndroid() || isIphone() || /(?:(webOS|hpwOS)[\s\/]|BlackBerry.*Version\/|BB10.*Version\/|CriOS\/)/.test(ua) || isFirefox() && isMobile())
}
function isIOS() {
  return isIpad() || isIphone()
}
function isPc() {
  return !isAndroid() && !isIphone() && !isIpad()
}

exports.isAndroid = isAndroid;
exports.isFirefox = isFirefox;
exports.isMobile = isMobile;
exports.isAndroidPhone = isAndroidPhone;
exports.isAndroidPad = isAndroidPad;
exports.isIpad = isIpad;
exports.isIphone = isIphone;
exports.isTablet = isTablet;
exports.isPhone = isPhone;
exports.isIOS = isIOS;
exports.isPc = isPc;

Object.defineProperty(exports, '__esModule', { value: true });

})));
