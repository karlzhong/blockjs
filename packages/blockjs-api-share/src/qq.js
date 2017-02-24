import {
    addAdtag,
    ADTAG_QQ,
    ADTAG_QZONE,
    ADTAG_WX,
    ADTAG_TIMELINE,
    ADTAG_OTHER
} from './util'

let shareData

export function setMqqShare(_shareData) {
    shareData = _shareData

    setTimeout(function () {
        mqq.ui.setOnShareHandler(function (type) {
            onShareHandler(type)
        })
    }, 200)
}


var onShareHandler = function (type) {
    //0：QQ好友;
    //1：QQ空间;
    //2：微信好友
    //3：微信朋友圈
    let {
        url,
        adtagName,
        adtagVal,
        title,
        wxTitle,
        desc,
        imgUrl
    } = shareData

    //这里可以根据type调整链接参数
    switch (type) {
        case 0:
            addAdtag(url, adtagName, adtagVal, ADTAG_QQ, ADTAG_QQ)
            break
        case 1:
            addAdtag(url, adtagName, adtagVal, ADTAG_QQ, ADTAG_QZONE)
            break
        case 2:
            addAdtag(url, adtagName, adtagVal, ADTAG_QQ, ADTAG_WX)
            break
        case 3:
            addAdtag(url, adtagName, adtagVal, ADTAG_QQ, ADTAG_TIMELINE)
            break
    }
    // 分享到朋友圈之后，由于只显示title，这里往往要对title做一定修改
    let shareTitle = type == 3 ? wxTitle || title : title

    let _shareData = {
        title: shareTitle,
        desc: desc,
        share_type: type,
        back: true,
        image_url: shareData.imgUrl,
        share_url: shareUrl,
    }

    if (shareData.puin !== undefined) {
        _shareData.puin = shareData.puin
    }

    if (shareData.sourceName !== undefined) {
        _shareData.sourceName = shareData.sourceName
    }

    mqq.ui.shareMessage(_shareData, function (res) {
        //这里可以添加分享成功的上报
    })


}