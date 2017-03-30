'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * getsearch
 * @param  n {String} url参数
 * @returns string
 */

function getsearch(n) {
    var m = window.location.search.match(new RegExp("(\\?|&)" + n + "=([^&]*)(&|$)"));
    return !m ? "" : decodeURIComponent(m[2])
}

exports.getsearch = getsearch;
