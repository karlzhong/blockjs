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
    return url + (location.href.match('?') ? '&' : '?') + name + '=' + val;
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

function setMqqShare(_shareData) {
    shareData = _shareData;

    setTimeout(function () {
        mqq.ui.setOnShareHandler(function (type) {
            onShareHandler(type);
        });
    }, 200);
}


var onShareHandler = function (type) {
    //0：QQ好友;
    //1：QQ空间;
    //2：微信好友
    //3：微信朋友圈
    var url = shareData.url;
    var adtagName = shareData.adtagName;
    var adtagVal = shareData.adtagVal;
    var title = shareData.title;
    var wxTitle = shareData.wxTitle;
    var desc = shareData.desc;
    var imgUrl = shareData.imgUrl;

    //这里可以根据type调整链接参数
    switch (type) {
        case 0:
            addAdtag(url, adtagName, adtagVal, ADTAG_QQ, ADTAG_QQ);
            break
        case 1:
            addAdtag(url, adtagName, adtagVal, ADTAG_QQ, ADTAG_QZONE);
            break
        case 2:
            addAdtag(url, adtagName, adtagVal, ADTAG_QQ, ADTAG_WX);
            break
        case 3:
            addAdtag(url, adtagName, adtagVal, ADTAG_QQ, ADTAG_TIMELINE);
            break
    }
    // 分享到朋友圈之后，由于只显示title，这里往往要对title做一定修改
    var shareTitle = type == 3 ? wxTitle || title : title;

    var _shareData = {
        title: shareTitle,
        desc: desc,
        share_type: type,
        back: true,
        image_url: shareData.imgUrl,
        share_url: shareUrl,
    };

    if (shareData.puin !== undefined) {
        _shareData.puin = shareData.puin;
    }

    if (shareData.sourceName !== undefined) {
        _shareData.sourceName = shareData.sourceName;
    }

    mqq.ui.shareMessage(_shareData, function (res) {
        //这里可以添加分享成功的上报
    });


};

exports.setMqqShare = setMqqShare;

Object.defineProperty(exports, '__esModule', { value: true });

})));
