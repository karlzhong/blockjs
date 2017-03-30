'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 返回码上报
 * 入参说明:都必填
 * @param domain {String}: cgi所在的域名
 * @param cgi {String}: 完整的cgi名称
 * @param type{Number}: 1 成功,2 失败,3 逻辑失败
 * @param code{Number}: 具体的返回码
 * @param time{Number}: cgi延时
 * @param rate{Number}: 采样率,100意味着1/100的采样
 * @param uin{Number|String}: 用户的uin
 */
function cgiReport(ref) {
    var domain = ref.domain;
    var cgi = ref.cgi;
    var type = ref.type;
    var code = ref.code;
    var time = ref.time;
    var rate = ref.rate; if ( rate === void 0 ) rate = 1;
    var uin = ref.uin;

    var img = new Image();
    img.src = "//report.huatuo.qq.com/code.cgi?domain=" + encodeURIComponent(domain) + "&cgi=" + encodeURIComponent(cgi) + "&type=" + type + "&code=" + code + "&time=" + time + "&rate=" + rate + "&uin=" + uin;
    img.onload = img.onerror = function () {
        this.onload = this.onerror = null;
    };
    img = null;
}

exports.cgiReport = cgiReport;
