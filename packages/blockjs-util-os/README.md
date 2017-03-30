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

## 使用
```
# 全部安装blockjs
$ tnpm install @tencent/blockjs --save

# 只安装os模块
$ tnpm install @tencent/blockjs-util-os --save

# 引入
const os = require('@tencent/blockjs-util-os')

os.isAndroid()
os.isIOS()

```