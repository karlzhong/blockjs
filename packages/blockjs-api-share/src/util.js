// 这里之所以没有写在一个对象里，是为了rollup可以压缩得更小
export const ADTAG_QQ = 'qq';
export const ADTAG_QZONE = 'qzone';
export const ADTAG_WX = 'wx';
export const ADTAG_TIMELINE = 'timeline';
export const ADTAG_OTHER = 'other';


/**
 * 相对路径转绝对路径 
 */
export function toAbsPath(relativelyURL) {
    let aDOM = document.createElement('a');
    aDOM.href = relativelyURL;
    return aDOM.href;
}

/**
 * 去掉URL参数 
 * @param {string} url  
 * @param {string} name 
 * @returns {string} 处理后的URL
 */
export function clearUrlParam(url, name) {
    let reg = new RegExp(`(?|&)${key}=($|&)`, 'g')
    return path.replace(reg, '$1');
}

/**
 * 增加URL参数 
 * @param {string} url  
 * @param {string} name 
 * @param {string} val 
 * @returns {string} 处理后的URL
 */
export function addUrlParam(url, name, val) {
    return url + (location.href.match('?') ? '&' : '?') + name + '=' + val;
}

/**
 * 给URL增加adtag 
 * @param {string} url
 * @param {string} name adtag name
 * @param {string} val adtag 的格式字符串，如 FROM_to_TO 
 * @param {string} from 分享源头
 * @param {string} to 分享目的地
 * 
 */
export function addAdtag(url, name, val, from, to) {
    return addUrlParam(url, name, val.replace('FROM', from).replace('TO', to));
}