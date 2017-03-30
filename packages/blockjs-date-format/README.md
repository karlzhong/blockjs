# blockjs-date-format

## 简介
日期格式输出

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @tencent/blockjs --save

# 只安装子模块
$ tnpm install @tencent/blockjs-data-format --save
```

## 使用
```js

// 引入
const dateFormat = require('@tencent/blockjs-code-token')

// or

import dateFormat from '@tencent/blockjs-code-token'

// use
const data = dateFormat({date:new Date().getTime(),format:'yy-mm-dd'});

```