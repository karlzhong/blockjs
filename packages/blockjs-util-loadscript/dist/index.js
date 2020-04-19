(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['blockjs-util-loadscript'] = global['blockjs-util-loadscript'] || {})));
}(this, (function (exports) { 'use strict';

/**
 * 异步拉取脚本
 * @param  url {String} 脚步地址
 * @returns callback
 */

function loadScript(src, callback, err) {
    var tag = document.createElement("script");
    if (callback) {
        tag.onload = tag.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                callback();
                tag.onload = tag.onreadystatechange = null;
                if (tag.parentNode) {
                    tag.parentNode.removeChild(tag);
                }
            }
        };
    }
    tag.src = src;
    document.getElementsByTagName("head")[0].appendChild(tag);
}

exports.loadScript = loadScript;

Object.defineProperty(exports, '__esModule', { value: true });

})));
