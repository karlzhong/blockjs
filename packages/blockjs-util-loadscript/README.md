# blockjs-util-loadScript

## 简介
脚步异步加载函数

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @tencent/blockjs --save

# 只安装子模块
$ tnpm install @tencent/blockjs-util-loadScript --save
```


## 使用
```js

// 引入
const loadScript = require('@tencent/blockjs-util-loadScript')

// or
import loadScript from '@tencent/blockjs-util-loadScript'

// use
loadScript('xxxx.js',function(){
    //callback
})

```