/**
 * blockjs
 */
const os = require('@tencent/blockjs-util-os')
const cookie = require('@tencent/blockjs-util-cookie')
const monitor = require('@tencent/blockjs-report-monitor')
const cgireport = require('@tencent/blockjs-report-cgi')
const dataformat = require('@tencent/blockjs-date-format')
const base64 = require('@tencent/blockjs-code-base64')
const htmlcode = require('@tencent/blockjs-code-html')
const csrftoken = require('@tencent/blockjs-code-token')
const getsearch = require('@tencent/blockjs-bom-search')
const gethash = require('@tencent/blockjs-bom-hash')
const openqq = require('@tencent/blockjs-api-openqq')
const loadscript = require('@tencent/blockjs-util-loadscript')
const apishare = require('@tencent/blockjs-api-share')
const getmaxlen = require('@tencent/blockjs-string-getmaxlen')

module.exports = {
  os: os,
  cookie: cookie,
  monitor: monitor,
  cgireport: cgireport,
  dataformat: dataformat,
  base64: base64,
  htmlcode: htmlcode,
  csrftoken: csrftoken,
  getsearch: getsearch,
  gethash: gethash,
  openqq: openqq,
  loadscript: loadscript,
  apishare: apishare,
  getmaxlen: getmaxlen
}