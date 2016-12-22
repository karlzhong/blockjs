# blockjs-report-monitor

## 简介
前端页面monitor上报接口

## 使用
```
# 前提是已经安装了blockjs依赖 $ tnpm install @tencent/blockjs --save

# 引入
import {setTable, monitorReport} from 'blockjs-report-monitor';

# 设置上报属性
setTable({
    '1': [0,2581323]
});

# 上报
monitorReport(1);
```