# blockjs-report-monitor

## 简介
前端页面monitor上报接口

## Using npm:
```shell
# 全部安装blockjs
$ tnpm install @karlzhong/blockjs --save

# 只安装子模块
$ tnpm install @karlzhong/blockjs-report-monitor --save
```

## 使用
```js

// 引入
const report = require('@karlzhong/blockjs-report-monitor')

// or

import report from '@karlzhong/blockjs-report-monitor'

// 设置上报属性
report.setTable({
    '1': [0,2581323]
});

// 上报
report.monitorReport(1);
```