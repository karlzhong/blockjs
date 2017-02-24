import {
    addAdtag,
    ADTAG_QQ,
    ADTAG_QZONE,
    ADTAG_WX,
    ADTAG_TIMELINE,
    ADTAG_OTHER
} from './util'

let shareData


export function setQzoneShare(_shareData) {
    shareData = _shareData

    //数组对应的是默认文案、QQ空间、手机QQ、微信、微信朋友圈
    if (window.QZAppExternal) {
        let {
            adtagName,
            adtagVal,
            url,
            imgUrl,
            title,
            desc,
            wxTitle
        } = shareData
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
                addAdtag(url, adtagName, adtagVal, ADTAG_QZONE, ADTAG_TIMELINE),
            ]
        })
    }
}