(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['blockjs-bom-hash'] = global['blockjs-bom-hash'] || {})));
}(this, (function (exports) { 'use strict';

/**
 * getsearch
 * @param  n {String} url参数
 * @returns string
 */

function gethash(n) {
    var m = window.location.search.match(new RegExp("(\\?|&)" + n + "=([^&]*)(&|$)"));
    return !m ? "" : decodeURIComponent(m[2])
}

exports.gethash = gethash;

Object.defineProperty(exports, '__esModule', { value: true });

})));
