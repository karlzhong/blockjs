'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 获取当前操作系统类型
 */
var ua = navigator.userAgent;
var isAndroid = /(?:Android)/.test(ua);
var isFirefox = /(?:Firefox)/.test(ua);
var isMobile = /(?:Mobile)/.test(ua);
var isAndroidPhone = isAndroid && isMobile;
var isAndroidPad = isAndroid && !isAndroidPhone;
var isIpad = /(?:iPad.*OS)/.test(ua);
var isIphone = !isIpad && /(?:iPhone\sOS)/.test(ua);
var isTablet = isIpad || isAndroidPad || /(?:PlayBook)/.test(ua) || isFirefox && /(?:Tablet)/.test(ua);
var isPhone = !isTablet && (isAndroid || isIphone || /(?:(webOS|hpwOS)[\s\/]|BlackBerry.*Version\/|BB10.*Version\/|CriOS\/)/.test(ua) || isFirefox && isMobile);
var isIOS = isIpad || isIphone;
var isPc = !isAndroid && !isIphone && !isIpad;

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
