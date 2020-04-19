/**
 * blockjs
 */
const os = require('@karlzhong/blockjs-util-os')
const cookie = require('@karlzhong/blockjs-util-cookie')
const monitor = require('@karlzhong/blockjs-report-monitor')
const dataformat = require('@karlzhong/blockjs-date-format')
const base64 = require('@karlzhong/blockjs-code-base64')
const htmlcode = require('@karlzhong/blockjs-code-html')
const getsearch = require('@karlzhong/blockjs-bom-search')
const gethash = require('@karlzhong/blockjs-bom-hash')
const loadscript = require('@karlzhong/blockjs-util-loadscript')
const getmaxlen = require('@karlzhong/blockjs-string-getmaxlen')

module.exports = {
  os: os,
  cookie: cookie,
  monitor: monitor,
  dataformat: dataformat,
  base64: base64,
  htmlcode: htmlcode,
  getsearch: getsearch,
  gethash: gethash,
  loadscript: loadscript,
  getmaxlen: getmaxlen
}