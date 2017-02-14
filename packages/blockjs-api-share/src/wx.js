import {
    addAdtag,
    ADTAG_QQ,
    ADTAG_QZONE,
    ADTAG_WX,
    ADTAG_TIMELINE,
    ADTAG_OTHER
} from './util'

let shareData
let isInit = false

const IMG_SIZE = 120

export function setWXShare(_shareData) {
    shareData = _shareData
    if (!isInit) {
        isInit = true
        initShare()
    }
}

function initShare() {
    if (typeof top.window.WeixinJSBridge == "undefined" || !top.window.WeixinJSBridge.invoke) {
        //没有就监听ready事件
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
        }
    } else {
        //初始化结束直接就执行吧！
        onBridgeReady()
    }
}

function onBridgeReady() {
    const _WeixinJSBridge = WeixinJSBridge

    const errorFun = (res) => {
        _WeixinJSBridge.log(res.err_msg)
    }


    //  分享到QQ
    _WeixinJSBridge.on('menu:share:qq', function () {
        _WeixinJSBridge.invoke("shareQQ", {
            title: shareData.title,
            desc: shareData.desc,
            img_url: shareData.imageUrl,
            link: addAdtag(shareData.url, shareData.adtagName, shareData.adtagVal, ADTAG_WX, ADTAG_QQ)
        }, errorFun)
    })

    // 分享到空间
    _WeixinJSBridge.on("menu:share:QZone", function () {
        _WeixinJSBridge.invoke("shareQZone", {
            title: shareData.title,
            desc: shareData.desc,
            img_url: shareData.imageUrl,
            link: addAdtag(shareData.url, shareData.adtagName, shareData.adtagVal, ADTAG_WX, ADTAG_QZONE)
        }, errorFun)
    })

    // 朋友圈 
    _WeixinJSBridge.on('menu:share:timeline', function (e) {
        _WeixinJSBridge.invoke('shareTimeline', {
            img_width: IMG_SIZE,
            img_height: IMG_SIZE,
            title: shareData.wxTitle || shareData.title, // 优先使用wxTitle
            desc: shareData.desc, //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
            img_url: shareData.imageUrl,
            link: addAdtag(shareData.url, shareData.adtagName, shareData.adtagVal, ADTAG_WX, ADTAG_TIMELINE)
        }, errorFun)
    })

    //同步到腾讯微博（新版本微信已去除该按钮）
    // _WeixinJSBridge.on('menu:share:weibo', function () {
    //     _WeixinJSBridge.invoke('shareWeibo', {
    //         "content": desc,
    //         "url": share_url + '&adtag=wb'
    //     }, errorFun)
    // })

    //分享给朋友
    _WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        _WeixinJSBridge.invoke("sendAppMessage", {
            img_url: shareData.imageUrl,
            img_width: IMG_SIZE,
            img_height: IMG_SIZE,
            link: addAdtag(shareData.url, shareData.adtagName, shareData.adtagVal, ADTAG_WX, ADTAG_WX),
            title: shareData.title,
            desc: shareData.desc,
        }, errorFun)
    })
}