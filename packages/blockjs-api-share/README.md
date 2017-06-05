# blockjs-api-share

## 简介
分享组件，分享后会自动给链接加上adtag，有定制需求欢迎联系cheeqi

## 使用方式

npm引入方式
```js 
import * as blockjsShare from 'blockjs-api-share'
```

cdn引入
```html
<script src="http://sqimg.qq.com/qq_product_operations/jslib/blockjsShare.min.js"></script>
```

基本设置
```javascript
blockjsShare({
    title: "分享标题",//必填
    wxTitle: "分享朋友圈标题",// 可选，由于微信朋友圈只显示标题不显示摘要，产品需求经常需要定制朋友圈标题，默认为title
    desc: "分享文案",//必填
    url: "http://xxxxx.com",// 可选，可填写相对路径，默认为当前页面url
    imgUrl: "http://xxxxx.com", //必填，分享缩略图url，可以使用相对路径
    onShareSuccess:function(){} //可选，分享成功回调，目前还没支持空间独立版
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

    onShareSuccess:function(){} //分享成功回调，目前还没支持空间独立版    

    // QQ内小尾巴相关设置（下面两项需要同时设置，否则安卓会只显示uin）
    puin: 2720152058, 
    sourceName: "QQ团队",

    // adtag 相关设置
    adtagName: "adtag",         // 分享之后，在url参数里面的adtag对应的key，默认是全小写的adtag
    adtagVal: "FROM_to_TO"      // 分享之后，adtag的值，FROM代表来源，TO代表分享目的。例如 `"FROM_to_TO"` 分享之后adtag的值会变成 `wx_to_qq`。
})
```