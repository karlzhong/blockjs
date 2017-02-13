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
export function cgiReport({domain, cgi, type, code, time, rate=1, uin}) {
    let img = new Image()
    img.src = "//report.huatuo.qq.com/code.cgi?domain=" + encodeURIComponent(domain) + "&cgi=" + encodeURIComponent(cgi) + "&type=" + type + "&code=" + code + "&time=" + time + "&rate=" + rate + "&uin=" + uin
    img.onload = img.onerror = function () {
        this.onload = this.onerror = null
    }
    img = null
};