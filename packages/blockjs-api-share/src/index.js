import {
    setWXShare
} from './wx'

import {
    setMqqShare
} from './qq'

import {
    setQzoneShare
} from './qzone'

import {
    clearUrlParam,
    toAbsPath
} from './util'

const __DEV__ = true;

export default function setBlockJsShare(shareData) {
    shareData = checkShareData(shareData)
    setWXShare(shareData)
    setMqqShare(shareData)
    setQzoneShare(shareData)
}

/**
 * 参数校验
 */
function checkShareData({
    url,
    title,
    desc,
    wxTitle,
    imgUrl,
    puin,
    sourceName,
    adtagName,
    adtagVal
}) {
    let _adtagName = adtagName || 'adtag'

    return {
        title: title || document.title,
        desc,
        url: clearUrlParam(toAbsPath(url || location.href), _adtagName),
        imgUrl: toAbsPath(imgUrl),
        wxTitle: wxTitle || undefined,
        puin: puin || undefined,
        sourceName: sourceName || undefined,
        adtagName: _adtagName,
        adtagVal: adtagVal || 'FROM_to_TO'
    }
}