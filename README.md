### 后端
鉴于直接调别人接口会有跨域问题，所以通过自己服务器进行代理转发。

主要任务：
- 转发请求，跨域
- 加x-sign字段

框架: koa, koa-router, axios, crypto, nodemon 

## 小红书 api 验证 http header ---- x-sign 算法

`x-sign: 'X' + md5(url + 'WSUDD')`