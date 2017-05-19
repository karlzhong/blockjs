'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// 这里之所以没有写在一个对象里，是为了rollup合并后，可以压缩得更小
var ADTAG_QQ = 'qq';
var ADTAG_QZONE = 'qzone';
var ADTAG_WX = 'wx';
var ADTAG_TIMELINE = 'timeline';
var ADTAG_OTHER = 'other';


/**
 * 相对路径转绝对路径 
 */


/**
 * 去掉URL参数 
 * @param {string} url  
 * @param {string} name 
 * @returns {string} 处理后的URL
 */


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

var shareData;


function setQzoneShare(_shareData) {
    shareData = _shareData;

    //数组对应的是默认文案、QQ空间、手机QQ、微信、微信朋友圈
    if (window.QZAppExternal) {
        var adtagName = shareData.adtagName;
        var adtagVal = shareData.adtagVal;
        var url = shareData.url;
        var imgUrl = shareData.imgUrl;
        var title = shareData.title;
        var desc = shareData.desc;
        var wxTitle = shareData.wxTitle;
        window.QZAppExternal.setShare(function (d) {}, {
            'type': "share",
            'image': [imgUrl, imgUrl, imgUrl, imgUrl, imgUrl],
            'title': [title, title, title, title, wxTitle || title],
            'summary': [desc, desc, desc, desc, desc],
            'shareURL': [
                addAdtag(url, adtagName, adtagVal, ADTAG_QZONE, ADTAG_OTHER),
                addAdtag(url, adtagName, adtagVal, ADTAG_QZONE, ADTAG_QZONE),
                addAdtag(url, adtagName, adtagVal, ADTAG_QZONE, ADTAG_QQ),
                addAdtag(url, adtagName, adtagVal, ADTAG_QZONE, ADTAG_WX),
                addAdtag(url, adtagName, adtagVal, ADTAG_QZONE, ADTAG_TIMELINE) ]
        });
    }
}

exports.setQzoneShare = setQzoneShare;
