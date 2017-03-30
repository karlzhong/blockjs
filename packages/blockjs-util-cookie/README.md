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
# 全部安装blockjs
$ tnpm install @tencent/blockjs --save

# 只安装cookie模块
$ tnpm install @tencent/blockjs-util-cookie --save

# 引入
const cookie = require('@tencent/blockjs-util-cookie')

cookie.getCookie('xxx')

```