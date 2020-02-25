# 仿小红书 web 站

## 需求分析

- 首页
  - [ ] 展示feed卡片
  - [ ] feed： 视频和图片文章
  - [ ] 瀑布流形式
- 详情页
  - [ ] 轮播图 / 视频
  - [ ] 标题 / 文字
  - [ ] 评论
  - [ ] 点赞数 / 收藏数
  - [ ] 作者信息
  - [ ] 相关推荐
  - [ ] 分享
- 用户页面
- 我的页面
  - [ ] 信息
  - [ ] 笔记页
  - [ ] 专辑页
- 搜索
  - [ ] 展示趋势
  - [ ] 展示热门
  - [ ] 可以搜索
  - [ ] 筛选

## 技术分析

### 前端
框架: Vue全家桶（Vue.js, Vue-router, Vuex）
前后端交互: axios / fetch
css预处理语言: less
打包工具: webpack
lint: eslint

### 后端
鉴于直接调别人接口会有跨域问题，所以通过自己服务器进行代理转发。

主要任务：
- 转发请求，跨域
- 加 x-sign 字段

框架: koa, koa-router, axios, crypto, nodemon 

## 小红书 api 验证 http header ---- x-sign 算法

`x-sign: 'X' + md5(url + 'WSUDD')`

```js
var r = n(2)
, o = n.n(r)
, i = n(4)
, a = n.n(i)
, s = n(90)
, c = n.n(s)
, u = n(157)
, f = n.n(u)
, l = "WSUDD"
, p = "X"
, d = "/fe_api/";

t.headers["X-Sign"] = function(t, e) {
  var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p, i = t.url, s = void 0 === i ? "" : i, u = t.params, h = t.paramsSerializer;
  return s = c()(s).call(s, o()(s).call(s, d), s.length),
  r === p ? a()(n = "".concat(r)).call(n, f()(e(s, u, h) + l)) : ""
}(t, e.http.buildURL)


Ue() -> 获取参数名
```

## apis

```js
NOTE_EXPLORE: "/fe_api/burdock/v2/homefeed/notes",
NOTE_DETAIL: {
    url: "/fe_api/burdock/v2/note/${id}",
    level: 0
},
NOTE_COMMENT: {
    url: "/fe_api/burdock/v1/note/${noteId}/comment",
    level: 1
},
RELATED_NOTE: {
    url: "/fe_api/burdock/v2/note/${noteId}/related",
    level: 1
},
NOTE_USER_INFO: "/fe_api/burdock/v1/user/${userId}",
BEFORE_REPORTS: "/admin/api/media_report/list",
USER_NOTES: "/fe_api/burdock/v1/user/${userId}/note",
USER_ALBUM: "/fe_api/burdock/v1/user/${userId}/board",
BRAND_RELATED_NOTES: "/fe_api/burdock/v2/board/${id}/notes",
BOARD_INFO: "/fe_api/burdock/v2/board/${id}",
TRENDING: "/fe_api/burdock/v1/search/trending",
SEARCH_NOTES: "/fe_api/burdock/v1/search/note",
HOT_WORDS: "/fe_api/burdock/v1/search/hotword",
sendIdentifyCode: "/fe_api/burdock/v1/login/identify_code/send",
login: "/fe_api/burdock/v1/login/by_phone/web",
LOGOUT: "/fe_api/burdock/v1/logout",
myInfo: "/fe_api/burdock/v1/current_user",
myLikedNotes: "/fe_api/burdock/v1/my/liked_notes"


    function qe(t) {
        return $e("NOTE_EXPLORE", {
            params: Ue({
                pageSize: 20
            }, t),
            transform: !1
        }).then((function(t) {
            return {
                notes: t
            }
        }
        ))
    }
    function Fe(t, e) {
        return $e("RELATED_NOTE", {
            params: Ue({
                pageSize: 20
            }, e || {}),
            resourceParams: {
                noteId: t
            },
            transform: !1
        })
    }
    function Je(t) {
        return $e("NOTE_DETAIL", {
            resourceParams: {
                id: t
            },
            transform: !1
        })
    }
    function ze(t) {
        return $e("NOTE_COMMENT", {
            resourceParams: {
                noteId: t
            },
            params: {
                type: "summary",
                pageSize: 2
            }
        })
    }
    function He(t) {
        return $e("NOTE_USER_INFO", {
            resourceParams: {
                userId: t
            }
        })
    }
    function Xe(t, e, n) {
        return $e("USER_NOTES", {
            resourceParams: {
                userId: t
            },
            params: {
                page: e,
                pageSize: n
            }
        })
    }
    function Ge(t, e) {
        return $e("USER_ALBUM", {
            resourceParams: {
                userId: t
            },
            params: {
                page: e
            }
        }).catch((function() {
            return []
        }
        ))
    }
    function Ve(t, e, n) {
        return $e("myLikedNotes", {
            resourceParams: {
                userId: t
            },
            params: {
                lastNoteId: e,
                pageSize: n
            }
        }).catch((function() {
            return []
        }
        ))
    }
    function We(t) {
        return $e("BRAND_RELATED_NOTES", {
            resourceParams: {
                id: t
            },
            transform: !1
        })
    }
```
