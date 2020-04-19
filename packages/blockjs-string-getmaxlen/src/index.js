/**
 * blockjs-string-getmaxlen
 * @param {string} str 
 * @param {number} maxlen
 * @return {string}
 */

export function getmaxlen(str, maxlen) {
  let sResult = ''
  let L = 0
  let i = 0
  let stop = false
  let sChar
  if (str.replace(/[^\x00-\xff]/g, 'xxx').length <= maxlen) {
    return str
  }
  while (!stop) {
    sChar = str.charAt(i)
    L += sChar.match(/[^\x00-\xff]/) !== null ? 3 : 1
    if (L > maxlen) {
      stop = true
    } else {
      sResult += sChar
      i++
    }

  }
  return sResult
}