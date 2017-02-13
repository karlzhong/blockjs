# blockjs-util-cookie

## 简介
cookie相关操作

## api
- `setCookie` 设置cookie: setCookie(name, value, domain, path, hour)
- `getCookie` 获取cookie: getCookie(name)
- `delCookie` 删除cookie: delCookie(name, domain, path)
- `getUin` 获取uin（登录之后）: getUin()

## 使用
```
// 引入
import {setCookie, getCookie, delCookie, getUin} from '@tencent/blockjs-util-cookie'
```