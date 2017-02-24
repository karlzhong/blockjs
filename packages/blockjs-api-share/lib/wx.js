'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var isInit = false;

var IMG_SIZE = 120;

var MENU_SHARE = 'menu:share:';

function setWXShare(_shareData) {
    shareData = _shareData;
    if (!isInit) {
        isInit = true;
        initShare();
    }
}

function initShare() {
    if (typeof top.window.WeixinJSBridge == "undefined" || !top.window.WeixinJSBridge.invoke) {
        //没有就监听ready事件
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        //初始化结束直接就执行吧！
        onBridgeReady();
    }
}

function onBridgeReady() {
    var _WeixinJSBridge = WeixinJSBridge;

    var errorFun = function (res) {
        _WeixinJSBridge.log(res.err_msg);
    };


    //  分享到QQ
    _WeixinJSBridge.on(MENU_SHARE + 'qq', function () {
        _WeixinJSBridge.invoke("shareQQ", {
            title: shareData.title,
            desc: shareData.desc,
            img_url: shareData.imageUrl,
            link: addAdtag(shareData.url, shareData.adtagName, shareData.adtagVal, ADTAG_WX, ADTAG_QQ)
        }, errorFun);
    });

    // 分享到空间
    _WeixinJSBridge.on(MENU_SHARE + "QZone", function () {
        _WeixinJSBridge.invoke("shareQZone", {
            title: shareData.title,
            desc: shareData.desc,
            img_url: shareData.imageUrl,
            link: addAdtag(shareData.url, shareData.adtagName, shareData.adtagVal, ADTAG_WX, ADTAG_QZONE)
        }, errorFun);
    });

    // 朋友圈 
    _WeixinJSBridge.on(MENU_SHARE + 'timeline', function (e) {
        _WeixinJSBridge.invoke('shareTimeline', {
            img_width: IMG_SIZE,
            img_height: IMG_SIZE,
            title: shareData.wxTitle || shareData.title, // 优先使用wxTitle
            desc: shareData.desc, //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
            img_url: shareData.imageUrl,
            link: addAdtag(shareData.url, shareData.adtagName, shareData.adtagVal, ADTAG_WX, ADTAG_TIMELINE)
        }, errorFun);
    });

    //同步到腾讯微博（新版本微信已去除该按钮）
    // _WeixinJSBridge.on(MENU_SHARE+'weibo', function () {
    //     _WeixinJSBridge.invoke('shareWeibo', {
    //         "content": desc,
    //         "url": share_url + '&adtag=wb'
    //     }, errorFun)
    // })

    //分享给朋友
    _WeixinJSBridge.on(MENU_SHARE + 'appmessage', function (argv) {
        _WeixinJSBridge.invoke("sendAppMessage", {
            img_url: shareData.imageUrl,
            img_width: IMG_SIZE,
            img_height: IMG_SIZE,
            link: addAdtag(shareData.url, shareData.adtagName, shareData.adtagVal, ADTAG_WX, ADTAG_WX),
            title: shareData.title,
            desc: shareData.desc,
        }, errorFun);
    });
}

exports.setWXShare = setWXShare;
