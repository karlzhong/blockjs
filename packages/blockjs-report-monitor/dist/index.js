(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['blockjs-report-monitor'] = global['blockjs-report-monitor'] || {})));
}(this, (function (exports) { 'use strict';

/**
 * monitor上报
 */

var sendReport = function sendReport(url) {
    var img = new Image();
    img.src = url;
    img.onload = img.onerror = function (){
        img = this.onload = this.onerror = null;
    };
    // img = null;
};

var sendAll = function sendAll() {
    var msg = [];
    for (var i in buffer) {
        msg.push(buffer[i] + '-' + INDEX_TABLE[i][0] + '-' + INDEX_TABLE[i][1] + '_' + buffer[i]);
    }
    if (msg.length > 0) {
        // http://mma.qq.com/cgi-bin/report/report2?id=172&rs=1-0-506699_0&r=0.139619356719777
        sendReport('//mma.qq.com/cgi-bin/report/report2?id=172&rs=' + msg.join('|_|') + '&r=' + Math.random());

        buffer = {};
    }
};

var buffer = {};
var INDEX_TABLE = {};
/*let INDEX_TABLE = {
 '1': [0, 506699],
 '2': [0, 506710],
 '3': [0, 506711],
 '4': [0, 506712]
 };*/
var timer = null;

function setTable(_INDEX_TABLE) {
    INDEX_TABLE = _INDEX_TABLE;
}

function monitorReport(key, value) {
    if (INDEX_TABLE[key]) {
        buffer[key] = (buffer[key] || 0) + (value || 1); // 确保monitor至少上报一次
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(sendAll, 1000);
    }
}

exports.setTable = setTable;
exports.monitorReport = monitorReport;

Object.defineProperty(exports, '__esModule', { value: true });

})));
