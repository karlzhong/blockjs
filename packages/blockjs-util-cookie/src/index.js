/**
 * cookie
*/
export function getCookie(n) {
    const m = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"))
    return !m ? "" : decodeURIComponent(m[2])
}

export function setCookie(name, value, domain, path, hour) {
    const expire = new Date()
    expire.setTime(expire.getTime() + (hour ? 3600000 * hour : 30 * 24 * 60 * 60 * 1000))
    document.cookie = name + "=" + encodeURIComponent(value) + "; " + "expires=" + expire.toGMTString() + "; path=" + (path ? path : "/") + "; " + (domain ? ("domain=" + domain + ";") : "")
}

export function delCookie(name, domain, path) {
    document.cookie = name + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (path ? path : "/") + "; " + (domain ? ("domain=" + domain + ";") : "")
}

export function getUin() {
    const u = getCookie("uin")
    return !u ? null : parseInt(u.substring(1, u.length), 10)
}