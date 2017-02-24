# blockjs-code-base64

## 简介
base64编码

## 使用
```
# 前提是已经安装了blockjs依赖 $ tnpm install @tencent/blockjs --save

# 引入
import {encode as Base64Encode} from '@tencent/blockjs-code-base64'

# or

import {decode as Base64Decode} from '@tencent/blockjs-code-base64'

# or

import {encode, decode} from '@tencent/blockjs-code-base64'

# or

import {encode as Base64Encode, decode as Base64Decode} from '@tencent/blockjs-code-base64'

# use
Base64Encode('xxx')
Base64Decode('xxx')
```