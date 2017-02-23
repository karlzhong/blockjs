'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
    var reg = new RegExp(("(?|&)" + key + "=($|&)"), 'g');
    return path.replace(reg, '$1');
}

/**
 * 去掉URL参数 
 * @param {string} url  
 * @param {string} name 
 * @param {string} val 
 * @returns {string} 处理后的URL
 */
function addUrlParam(url, name, val) {
    return url + (location.href.match('?') ? '&' : '?') + name + '=' + val;
}

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
