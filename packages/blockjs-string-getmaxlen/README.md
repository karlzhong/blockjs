# blockjs-string-getmaxlen

## 简介
字符串中返回指定长度字符，也即是业务中的限制字数

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @karlzhong/blockjs --save

# 只安装子模块
$ tnpm install @karlzhong/blockjs-util-getmaxlen --save
```

## 使用
```js

// 引入
const getmaxlen = require('@karlzhong/blockjs-util-getmaxlen')

// or

import getmaxlen from '@karlzhong/blockjs-util-getmaxlen'

getmaxlen('xxxxxx',10)

```