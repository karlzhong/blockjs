/**
 * blockjs-ip2long
 * @param ipstr {string} 常规IP地址
 * @return long 返回长整型
 */

export function ip2long(ipstr) {
  let ip = 0
  const ipdot = ipstr.split('.').reverse()
  const ipis = ipdot.map(function (v, i) {
    return v * Math.pow(256, i)
  })
  ipis.forEach(function (v, i) {
    return ip += v
  })
  return ip
}