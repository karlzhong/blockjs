# blockjs-string-getmaxlen

## 简介
字符串中返回指定长度字符，也即是业务中的限制字数

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @tencent/blockjs --save

# 只安装子模块
$ tnpm install @tencent/blockjs-util-getmaxlen --save
```

## 使用
```js

// 引入
const getmaxlen = require('@tencent/blockjs-util-getmaxlen')

// or

import getmaxlen from '@tencent/blockjs-util-getmaxlen'

getmaxlen('xxxxxx',10)

```