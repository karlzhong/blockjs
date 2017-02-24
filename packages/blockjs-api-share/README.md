# blockjs-api-share

## 简介
分享组件

## 使用方式

npm引入方式
```js 
import * as blockjsShare from 'blockjs-api-share'
```

基本设置
```javascript
blockjsShare({
    title: "分享标题",
    wxTitle: "朋友圈标题（可选，默认为title）",
    desc: "分享文案",
    url: "分享url（可选，默认为当前页面url）",
    imgUrl: "分享缩略图url，可以使用相对路径",
})
```



高级设置
```javascript
blockjsShare({
    title: "分享标题",
    desc: "分享文案",
    url: "分享url",
    imgUrl: "img url",
    wxTitle: "朋友圈标题（可选，默认为title）",

    // QQ内小尾巴相关设置
    puin: 2720152058, 
    sourceName: "QQ团队",

    // adtag 相关设置
    adtagName: "adtag",         // 分享之后，在url参数里面的adtag对应的key，默认是全小写的adtag
    adtagVal: "FROM_to_TO"      // 分享之后，adtag的值，FROM代表来源，TO代表分享目的。例如 `"FROM_to_TO"` 分享之后adtag的值会变成 `wx_to_qq`。
})
```