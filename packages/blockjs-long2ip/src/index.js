/**
 * blockjs-long2ip
 *
 */

export function long2ip(ip) {
  const ipis = [0, 0, 0, 0]
  let ipdots = ipis.map(function (v, i) {
    const n = Math.pow(256, 3 - i)
    const ipdot = parseInt(ip / n)
    ip = ip % n
    return ipdot
  })
  ipdots = ipdots.reverse()
  return ipdots.join('.')
}