(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['blockjs-api-share'] = global['blockjs-api-share'] || {})));
}(this, (function (exports) { 'use strict';

// 这里之所以没有写在一个对象里，是为了rollup合并后，可以压缩得更小
var ADTAG_QQ = 'qq';
var ADTAG_QZONE = 'qzone';
var ADTAG_WX = 'wx';
var ADTAG_TIMELINE = 'timeline';
var ADTAG_OTHER = 'other';


/**
 * 相对路径转绝对路径 
 */
function toAbsPath(relativelyURL) {
    var aDOM = document.createElement('a');
    aDOM.href = relativelyURL;
    return aDOM.href;
}

/**
 * 去掉URL参数 
 * @param {string} url  
 * @param {string} name 
 * @returns {string} 处理后的URL
 */
function clearUrlParam(url, name) {
    var emptyStr = "";
    var reg = new RegExp(("(\\"  + "?|&)" + name + "=($|&)"), 'g');
    return url.replace(reg, '$1');
}

/**
 * 增加URL参数 
 * @param {string} url  
 * @param {string} name 
 * @param {string} val 
 * @returns {string} 处理后的URL
 */
function addUrlParam(url, name, val) {
    return url + (location.href.indexOf('\?') != -1 ? '&' : '?') + name + '=' + val;
}

/**
 * 给URL增加adtag 
 * @param {string} url
 * @param {string} name adtag name
 * @param {string} val adtag 的格式字符串，如 FROM_to_TO 
 * @param {string} from 分享源头
 * @param {string} to 分享目的地
 * 
 */
function addAdtag(url, name, val, from, to) {
    return addUrlParam(url, name, val.replace('FROM', from).replace('TO', to));
}

exports.ADTAG_QQ = ADTAG_QQ;
exports.ADTAG_QZONE = ADTAG_QZONE;
exports.ADTAG_WX = ADTAG_WX;
exports.ADTAG_TIMELINE = ADTAG_TIMELINE;
exports.ADTAG_OTHER = ADTAG_OTHER;
exports.toAbsPath = toAbsPath;
exports.clearUrlParam = clearUrlParam;
exports.addUrlParam = addUrlParam;
exports.addAdtag = addAdtag;

Object.defineProperty(exports, '__esModule', { value: true });

})));
