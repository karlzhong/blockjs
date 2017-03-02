# blockjs

## 简介

移动开发常用组件模块
> fbi + rollup + buble

## 开发
0. 确认已经安装fbi，并且已经clone blockjs模板
1. clone 本仓库
2. 在`packages/`目录下新建组件目录，可参考现有组件目录
3. 由于本组件是公司内部模块，所以在所有的package.json里name字段需加上`@tencent/`前缀

## 子模块目录结构
```
|-- blockjs-xx (blockjs-xx-xx)
|--    src
|--        index.js
|--    package.json
|--    README.md
|--    .npmignore
```

## 自动生成子目录命令

```
$ fbi add
//更简短的命令是
$ fbi a
```

## 构建

```bash
$ fbi b
```

## 发布
1. 全局安装`tlerna`，因为tlerna是公司私有包，所以安装的时候需要在前面加上@tencent
```
$ tnpm install -g @tencent/tlerna
```

2. 发布整个组件包
```
#先更新package.json里的版本号
$ tnpm publish
```

3. 发布所有子组件
```
$ tlerna init
$ tlerna bootstrap
$ tlerna publish
```

## Change Logs
2016.12.15
- 决定使用lerna管理npm模块依赖，约定目录结构

2017.01.04
- 接入fbi建构

2017.02.24
- 新增常用6个子模块

2017.03.02
- 新增自动创建子模块目录功能，在此之前clone的blockjs模板需要重新更新`fbi pull` 或者`sudo fbi pull`