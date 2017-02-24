/**
 * getsearch
 * @param  n {String} url参数
 * @returns string
 */

export function getsearch(n) {
    const m = window.location.search.match(new RegExp("(\\?|&)" + n + "=([^&]*)(&|$)"))
    return !m ? "" : decodeURIComponent(m[2])
}