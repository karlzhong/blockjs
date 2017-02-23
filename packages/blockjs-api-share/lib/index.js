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

var shareData$1;

function setMqqShare(_shareData) {
    shareData$1 = _shareData;

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
    var shareUrl = shareData$1.url;

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
    var title = type == 3 ? shareData$1.wxTitle || shareData$1.title : shareData$1.title;

    var _shareData = {
        title: title,
        desc: shareData$1.desc,
        share_type: type,
        back: true,
        image_url: shareData$1.imgUrl,
        share_url: shareUrl,
    };

    if (shareData$1.puin !== undefined) {
        _shareData.puin = shareData$1.puin;
    }

    if (shareData$1.sourceName !== undefined) {
        _shareData.sourceName = shareData$1.sourceName;
    }

    mqq.ui.shareMessage(_shareData, function (res) {
        //这里可以添加分享成功的上报
    });


};

var shareData$2;


function setQzoneShare(_shareData) {
    shareData$2 = _shareData;

    //数组对应的是默认文案、QQ空间、手机QQ、微信、微信朋友圈
    if (window.QZAppExternal) {
        var adtagName = shareData$2.adtagName;
        var adtagVal = shareData$2.adtagVal;
        var url = shareData$2.url;
        var imgUrl = shareData$2.imgUrl;
        var title = shareData$2.title;
        var desc = shareData$2.desc;
        var wxTitle = shareData$2.wxTitle;
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

function setBlockJsShare(shareData) {
    shareData = checkShareData(shareData);
    setWXShare(shareData);
    setMqqShare(shareData);
    setQzoneShare(shareData);
}

/**
 * 参数校验
 */
function checkShareData(ref) {
    var url = ref.url;
    var title = ref.title;
    var desc = ref.desc;
    var wxTitle = ref.wxTitle;
    var imgUrl = ref.imgUrl;
    var puin = ref.puin;
    var sourceName = ref.sourceName;
    var adtagName = ref.adtagName;
    var adtagVal = ref.adtagVal;

    var _adtagName = adtagName || 'adtag';

    return {
        title: title || document.title,
        desc: desc,
        url: clearUrlParam(toAbsPath(url || location.href), _adtagName),
        imgUrl: toAbsPath(imgUrl),
        wxTitle: wxTitle || undefined,
        puin: puin || undefined,
        sourceName: sourceName || undefined,
        adtagName: _adtagName,
        adtagVal: adtagVal || 'FROM_to_TO'
    }
}

exports.setBlockJsShare = setBlockJsShare;
