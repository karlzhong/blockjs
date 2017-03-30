# blockjs-report-monitor

## 简介
前端页面monitor上报接口

## 使用
```
# 全部安装blockjs
$ tnpm install @tencent/blockjs --save

# 只安装monitor模块
$ tnpm install @tencent/blockjs-report-monitor --save

# 引入
const report = require('@tencent/blockjs-report-monitor')


# 设置上报属性
report.setTable({
    '1': [0,2581323]
});

# 上报
report.monitorReport(1);
```