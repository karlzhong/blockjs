# blockjs-mqq-openqq

## 简介
调起手Q功能

## Using npm:
```shell
// 加载整个blockjs
$ tnpm install @tencent/blockjs --save

// 或者单独加载子模块
$ tnpm install @tencent/blockjs-api-openqq --save
```

## 使用
```js
// 本子模块依赖mqq api，所以项目中使用时请确认mqq api已加载
// http://open.mobile.qq.com/sdk/qqapi.js?_bid=152

// 引入
const openQQ = require('@tencent/blockjs-api-openqq')

// or

import openQQ from '@tencent/blockjs-api-openqq'

// use
openQQ('xxxx.html')

```