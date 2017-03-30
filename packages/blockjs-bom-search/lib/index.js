(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['blockjs-bom-search'] = global['blockjs-bom-search'] || {})));
}(this, (function (exports) { 'use strict';

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

Object.defineProperty(exports, '__esModule', { value: true });

})));
