# blockjs-code-html

## 简介
html编码以及解码，用作csrf防护

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @karlzhong/blockjs --save

# 只安装子模块
$ tnpm install @karlzhong/blockjs-code-html --save
```

## 使用
```js

// 引入
const code = require('@karlzhong/blockjs-code-html')

// or
import code from '@karlzhong/blockjs-code-html'

//use
code.decodeHtml('codestring')
code.encodeHtml('codestring')

```