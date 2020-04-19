# blockjs-code-html

## 简介
html编码以及解码，用作csrf防护

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @tencent/blockjs --save

# 只安装子模块
$ tnpm install @tencent/blockjs-code-html --save
```

## 使用
```js

// 引入
const code = require('@tencent/blockjs-code-html')

// or
import code from '@tencent/blockjs-code-html'

//use
code.decodeHtml('codestring')
code.encodeHtml('codestring')

```