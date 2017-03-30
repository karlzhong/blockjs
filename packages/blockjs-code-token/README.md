# blockjs-code-token

## 简介
token

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @tencent/blockjs --save

# 只安装子模块
$ tnpm install @tencent/blockjs-code-token --save
```

## 使用
```js

// 引入
const getCSRFToken = require('@tencent/blockjs-code-token')

// or

import getCSRFToken from '@tencent/blockjs-code-token'

// use
const csrf_token = getCSRFToken();

```