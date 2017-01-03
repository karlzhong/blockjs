"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 获取当前操作系统类型
 */
var ua = navigator.userAgent;
var isAndroid = exports.isAndroid = /(?:Android)/.test(ua);
var isFirefox = exports.isFirefox = /(?:Firefox)/.test(ua);
var isMobile = exports.isMobile = /(?:Mobile)/.test(ua);
var isAndroidPhone = exports.isAndroidPhone = isAndroid && isMobile;
var isAndroidPad = exports.isAndroidPad = isAndroid && !isAndroidPhone;
var isIpad = exports.isIpad = /(?:iPad.*OS)/.test(ua);
var isIphone = exports.isIphone = !isIpad && /(?:iPhone\sOS)/.test(ua);
var isTablet = exports.isTablet = isIpad || isAndroidPad || /(?:PlayBook)/.test(ua) || isFirefox && /(?:Tablet)/.test(ua);
var isPhone = exports.isPhone = !isTablet && (isAndroid || isIphone || /(?:(webOS|hpwOS)[\s\/]|BlackBerry.*Version\/|BB10.*Version\/|CriOS\/)/.test(ua) || isFirefox && isMobile);
var isIOS = exports.isIOS = isIpad || isIphone;
var isPc = exports.isPc = !isAndroid && !isIphone && !isIpad;