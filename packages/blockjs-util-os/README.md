# blockjs-util-os

## 简介
获取当前操作系统类型

## api
- isAndroid 
- isFirefox 
- isMobile 
- isAndroidPhone 
- isAndroidPad 
- isIpad 
- isIphone 
- isTablet 
- isPhone 
- isIOS 
- isPc 


## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @karlzhong/blockjs --save

# 只安装子模块
$ tnpm install @karlzhong/blockjs-util-os --save
```

## 使用
```js

// 引入
const os = require('@karlzhong/blockjs-util-os')

// or
import os from '@karlzhong/blockjs-util-os'

// use
os.isAndroid()
os.isIOS()

```