'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
 * 去掉URL参数 
 * @param {string} url  
 * @param {string} name 
 * @param {string} val 
 * @returns {string} 处理后的URL
 */

var shareData;

var IMG_SIZE = 120;

function setWXShare(_shareData) {
    shareData = _shareData;
}

var onBridgeReady = function () {

    var _WeixinJSBridge = WeixinJSBridge;

    //  分享到QQ
    _WeixinJSBridge.on('menu:share:qq', function () {
        _WeixinJSBridge.invoke("shareQQ", {
            title: shareData.title,
            desc: shareData.desc,
            img_url: shareData.imageUrl,
            link: shareData.url + '&adtag=qq'
        }, function (res) {
            _WeixinJSBridge.log(res.err_msg);
        });
    });

    // 分享到空间
    _WeixinJSBridge.on("menu:share:QZone", function () {
        _WeixinJSBridge.invoke("shareQZone", {
            title: shareData.title,
            desc: shareData.desc,
            img_url: shareData.imageUrl,
            link: shareData.url + '&adtag=qq'
        }, function (res) {
            _WeixinJSBridge.log(res.err_msg);
        });
    });

    // 朋友圈 
    _WeixinJSBridge.on('menu:share:timeline', function (e) {
        _WeixinJSBridge.invoke('shareTimeline', {
            img_width: IMG_SIZE,
            img_height: IMG_SIZE,
            desc: shareData.desc, //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
            img_url: shareData.imageUrl,
            link: shareData.url + '&adtag=wx.to.timeline',
            title: shareData.wxTitle || shareData.title // 优先使用wxTitle
        }, function (res) {
            _WeixinJSBridge.log(res.err_msg);
        });
    });

    //同步到腾讯微博（新版本微信已去除该按钮）
    _WeixinJSBridge.on('menu:share:weibo', function () {
        _WeixinJSBridge.invoke('shareWeibo', {
            "content": desc,
            "url": share_url + '&adtag=wb'
        }, function (res) {
            _WeixinJSBridge.log(res.err_msg);
        });
    });

    //分享给朋友
    _WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        _WeixinJSBridge.invoke("sendAppMessage", {
            img_url: shareData.imageUrl,
            img_width: IMG_SIZE,
            img_height: IMG_SIZE,
            link: shareData.url + '&adtag=wx.to.timeline',
            title: shareData.title,
            desc: shareData.desc,
        }, function (res) {
            _WeixinJSBridge.log(res.err_msg);
        });
    });
};

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

exports.setWXShare = setWXShare;
