/**
 * 手Q外打开页面调起手Q
 * @param openurl {String}
 */
const condition = (() => {
    let ua = navigator.userAgent
    let inChrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)

    //获取android的大版本号（4或者5，如果需要全部的版本号去掉split）
    const getAndroidVersion = function () {
        let ua = navigator.userAgent.toLowerCase()
        let version = ua.match(/android\s([0-9\.]*)/)
        return version ? version[1].split('.')[0] : false
    }

    return {
        inChrome,
        androidVersion: getAndroidVersion()
    }
})


function getURL(jumpURL) {
    if (mqq.android && condition.inChrome && condition.androidVersion() >= 5) {
        //感谢 ivanxu 提供的条件~
        //安卓 5.0 后改用 chrome 作为默认浏览器，scheme 地址有变
        return "intent://forward/url?src_type=web&style=default&=1&version=1&url_prefix=" + btoa(jumpURL) + "#Intent;scheme=mqqapi;package=com.tencent.mobileqq;end"
    } else {
        return 'mqqapi://forward/url?src_type=web&style=default&=1&version=1&url_prefix=' + btoa(jumpURL)
    }
}

export function openQQ(jumpURL, changeURL) {
    if (mqq.iOS) {
        //iOS 9 不能用ifarme拉起手Q
        location.href = getURL(jumpURL)
    } else {
        let proxy_frame = document.createElement("iframe")
        proxy_frame.style.display = 'none'
        proxy_frame.src = getURL(jumpURL)

        proxy_frame.onload = function () {}
        setTimeout(() => {
            document.body.appendChild(proxy_frame)
        }, 0)
    }
    if (typeof changeURL === 'string') {
        setTimeout(() => {
            location.replace(changeURL)
        }, 1000)
    }
};