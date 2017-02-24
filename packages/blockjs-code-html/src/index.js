/**
 * html encode & decode
 * @param  s {String} 编码字符
 * @returns string
 */

const htmlDecodeDict = {
    "quot": '"',
    "lt": "<",
    "gt": ">",
    "amp": "&",
    "nbsp": " ",
    "#34": '"',
    "#60": "<",
    "#62": ">",
    "#38": "&",
    "#160": " "
}

const htmlEncodeDict = {
    '"': "#34",
    "<": "#60",
    ">": "#62",
    "&": "#38",
    " ": "#160"
}

export function decodeHtml(s) {
    s += ''
    return s.replace(/&(quot|lt|gt|amp|nbsp);/ig,
        function (all, key) {
            return htmlDecodeDict[key]
        }).replace(/&#u([a-f\d]{4});/ig,
        function (all, hex) {
            return String.fromCharCode(parseInt("0x" + hex))
        }).replace(/&#(\d+);/ig,
        function (all, number) {
            return String.fromCharCode(+number)
        })
}

export function encodeHtml(s) {
    s += ''
    return s.replace(/["<>& ]/g,
        function (all) {
            return "&" + htmlEncodeDict[all] + ";"
        })
}