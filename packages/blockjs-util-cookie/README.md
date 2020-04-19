# blockjs-util-cookie

## 简介
cookie相关操作

## api
- `setCookie` 设置cookie: setCookie(name, value, domain, path, hour)
- `getCookie` 获取cookie: getCookie(name)
- `delCookie` 删除cookie: delCookie(name, domain, path)
- `getUin` 获取uin（登录之后）: getUin()

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @karlzhong/blockjs --save

# 只安装子模块
$ tnpm install @karlzhong/blockjs-util-cookie --save
```

## 使用
```js

// 引入
const cookie = require('@karlzhong/blockjs-util-cookie')

// or
import cookie from '@karlzhong/blockjs-util-cookie'

cookie.getCookie('xxx')

```