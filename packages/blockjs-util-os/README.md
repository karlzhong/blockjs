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
$ tnpm install @tencent/blockjs --save

# 只安装子模块
$ tnpm install @tencent/blockjs-util-os --save
```

## 使用
```js

// 引入
const os = require('@tencent/blockjs-util-os')

// or
import os from '@tencent/blockjs-util-os'

// use
os.isAndroid()
os.isIOS()

```