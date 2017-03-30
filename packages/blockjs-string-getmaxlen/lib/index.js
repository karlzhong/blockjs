(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['blockjs-string-getmaxlen'] = global['blockjs-string-getmaxlen'] || {})));
}(this, (function (exports) { 'use strict';

/**
 * blockjs-string-getmaxlen
 * @param {string} str 
 * @param {number} maxlen
 * @return {string}
 */

function getmaxlen(str, maxlen) {
  var sResult = '';
  var L = 0;
  var i = 0;
  var stop = false;
  var sChar;
  if (str.replace(/[^\x00-\xff]/g, 'xxx').length <= maxlen) {
    return str
  }
  while (!stop) {
    sChar = str.charAt(i);
    L += sChar.match(/[^\x00-\xff]/) !== null ? 3 : 1;
    if (L > maxlen) {
      stop = true;
    } else {
      sResult += sChar;
      i++;
    }

  }
  return sResult
}

exports.getmaxlen = getmaxlen;

Object.defineProperty(exports, '__esModule', { value: true });

})));
