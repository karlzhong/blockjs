(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['blockjs-date-format'] = global['blockjs-date-format'] || {})));
}(this, (function (exports) { 'use strict';

/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 */
function dateFormat(ref) {
    var date = ref.date;
    var format = ref.format;

    var D = new Date(date);
    var map = {
        "M": D.getMonth() + 1, //月份
        "d": D.getDate(), //日
        "h": D.getHours(), //小时
        "m": D.getMinutes(), //分
        "s": D.getSeconds(), //秒
        "q": Math.floor((D.getMonth() + 3) / 3), //季度
        "S": D.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v
        } else if (t === 'y') {
            return (D.getFullYear() + '').substr(4 - all.length)
        }
        return all
    });
    return format
}

exports.dateFormat = dateFormat;

Object.defineProperty(exports, '__esModule', { value: true });

})));
