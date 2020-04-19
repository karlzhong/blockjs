(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['blockjs-util-cookie'] = global['blockjs-util-cookie'] || {})));
}(this, (function (exports) { 'use strict';

/**
 * cookie
*/
function getCookie(n) {
    var m = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"));
    return !m ? "" : decodeURIComponent(m[2])
}

function setCookie(name, value, domain, path, hour) {
    var expire = new Date();
    expire.setTime(expire.getTime() + (hour ? 3600000 * hour : 30 * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + encodeURIComponent(value) + "; " + "expires=" + expire.toGMTString() + "; path=" + (path ? path : "/") + "; " + (domain ? ("domain=" + domain + ";") : "");
}

function delCookie(name, domain, path) {
    document.cookie = name + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (path ? path : "/") + "; " + (domain ? ("domain=" + domain + ";") : "");
}

function getUin() {
    var u = getCookie("uin");
    return !u ? null : parseInt(u.substring(1, u.length), 10)
}

exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.delCookie = delCookie;
exports.getUin = getUin;

Object.defineProperty(exports, '__esModule', { value: true });

})));
