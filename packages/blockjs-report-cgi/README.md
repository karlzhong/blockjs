# blockjs-report-cgi

## 简介
cgi上报

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @tencent/blockjs --save

# 只安装子模块
$ tnpm install @tencent/blockjs-report-cgi --save
```

## 使用
```js

// 引入
const cgiReport = require('@tencent/blockjs-report-cgi')

// or

import cgiReport from '@tencent/blockjs-report-cgi'

// use
cgiReport({
  domain:'buluo.qq.com',
  cgi:'/cgi-bin/bar/extra/get_new_user_rcmd',
  type:2,
  code:data.retcode,
  time:(Date.now()-buluoStartTime),
  rate:1,
  uin:cookie.uin()
});

```