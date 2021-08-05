# https http
http:超文本传输协议
1. http特点
    - 灵活，可以传输任意类型对象，通过content-type定义
    - 无连接 每次连接只能处理一个请求，服务器处理完这次请求后，
      并受到客户端回应后，就断开连接，不利于客户端和服务端会话的保持，
      无法记录之前的状态，需要借助cookie session 记录用户
    - 无状态，指的是对事物处理没有记忆，后续如果要处理之前的信息，
      则需要重传。
      
  缺点部分：
- http是明文传播，涉及到密码、个人信息等就不太安全。
  存在信息被篡改、被仿冒的可能。

- 无状态，无法记录相关联信息

2. URI: Uniform Resource Identifier 统一资源*标志*符
   URL: Uniform Resource Location 统一资源*定位*符
   URI: 具体描述某个资源的，可以通过URI知道该资源是什么，
   URL：用来定位具体资源的位置，以及访问该资源的方式 
   
3. http报文组成
#### 请求报文
```http request
POST /api/v2/za/logs/batch HTTP/1.1
Host: zhihu-web-analytics.zhihu.com
Connection: keep-alive
Content-Length: 675
sec-ch-ua: " Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
X-ZA-ClientID: 35b5cc03-2b2d-4011-a794-3d51c1a12161
Content-Encoding: gzip
sec-ch-ua-mobile: ?0
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36
Content-Type: application/x-protobuf
X-ZA-Product: Zhihu
X-ZA-Batch-Size: 6
X-ZA-Log-Version: 3.1.51
X-ZA-Platform: DesktopWeb
Accept: */*
Origin: https://zhuanlan.zhihu.com
Sec-Fetch-Site: same-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://zhuanlan.zhihu.com/p/72616216
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
```
1. 请求方法 请求地址 协议/版本号
2. 请求头
3. 请求正文

#### 响应报文的结构
```http request
HTTP/1.1 200 OK
Date: Tue, 20 Jul 2021 04:28:26 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 0
Connection: keep-alive
Server: openresty
Access-Control-Allow-Origin: *
X-Backend-Response: 0.003
```
1. 协议/版本号
2. 响应头
3. 响应报文

### post get异同点
相同：
 - 都有请求行，请求头
 - 
不同：
 - get请求的参数都在url上，有长度上限制，该限制由各个浏览器决定。
   post请求的参数可以在url上，但大多放到request body里，通过设置content-type类型，
 - post相对来说稍微安全些，毕竟参数不在url上
 - get请求具备等冥性，post不行；另外get请求的结果可被缓存下来。
 - get 本质是检索远程数据的，请求通常是 获取资源，
   并且不会对服务器数据进行修改； 具备等冥性
    post通常用于发送表单数据，账号密码等，会更新数据库/插入数据，
   
响应的状态码
1XX：信息型 服务器收到请求，要求客户端继续的
2XX：成功型 请求收到，并成功返回；
3XX：重定向类型，永久、临时、使用缓存等；
4XX：客户端出差，无法访问等
5XX：服务器出错。

常见的状态码：
200: ok 成功返回
301：永久重定向
302: 临时重定向
304: 资源未改变，使用缓存
400: bad request
403: forbidden
404: not found
503: 服务器暂时无法处理客户端请求.

## 使用https
https 一般认为是http + SSL/TLS协议
设计目标：
1. 数据的加密，保证数据被加密，无法被第三方查看。
2. 数据的完整性，及时发现数据被第三方窜改过。
3. 身份的校验，确保数据是所希望的地址

相比于http的区别：
1. https需要使用ca证书验证身份，需要一定费用
2. 使用的默认端口不一样，https443，http8080
3. http明文传输，https是加密信息的传输，相对安全
改进的地方
   1. 双向的身份认证
   2. 数据加密
    
缺点：
1. 首次握手连接的消耗增加
2. ca证书需要的费用
3. 数据加密以及解密带来的资源消耗
4. 也只是安全了一定程度，如果ca证书链并不安全呢


TLS协议使用了两种加密技术：对称加密和非对称加密
TLS协议位于应用层之下，传输层上。

TLS利用非对称加密进行身份认证，密钥协商；对称加密进行信息加密以传输，基于散列函数验证数据的完整性。

服务器可以将公钥发送给各个客户端，客户端直接直接无法解密，但可以利用该公钥进行数据加密，服务器拿到后再利用私钥解密，
即可实现一对多。问题的关键在于如何给客户端公钥。毕竟中途也可能如下图被拦截窜改。

![TLS](TLS.png)
图片来自 https://tyler-zx.blog.csdn.net/article/details/107591115

解决方法之一是依靠中心化机构，有他们发布一些可信赖的证书，后续的认证下属证书
才有层次的签名架构，以此下去，一个证书可能会含有1or多个根证书。
一些知名的根证书通常随系统装好了

### http1.1

相比http1.0 解决了队首阻塞问题，
当http开启长连接时，共用一个tcp连接，那么一次也就只能处理
一个任务，存在阻塞问题。
解决方案：
- 多个并发连接，chrome允许同时存在6个
- 利用多个子域名分散开请求。

针对浏览器跨域问题：
浏览器遵循同源策略，非同源站点存在一些限制
- 不可读取和修改对方站点的dom
- 不可读取对方cookie，LocalStorage, IndexDB
- 限制了XMLHTTPRequest请求。

当一个资源从与该资源本身所在的服务器**不同的域、协议或端口**请求一个资源时，资源会发起一个**跨域 HTTP 请求**。
| URI                                                        |                  | changeOrigin |
| ---------------------------------------------------------- | ---------------- | ------------ |
| http://www.cnblogs.com/a.js  http://www.a.com/b.js      | 不同域名         | 是           |
| http://www.a.com/lab/a.js  http://www.a.com/script/b.js | 同域名下不同文件 | 否           |
| http://www.a.com:8000/a.js  http://www.a.com/b.js       | 不同端口（port） | 是           |
| http://www.a.com/a.js  https://www.a.com/b.js           | 同域名 不同协议  | 是           |

解决方法：
1. 跨域资源共享([CORS](https://developer.mozilla.org/zh-CN/docs/Glossary/CORS)) 是一种机制，允许运行在一个 origin (domain) 上的浏览器，被准许访问不同源的服务器上的资源。
    - 简单请求
      限制在 请求方法为 get post head
      限制请求头字段Accept、Accept-Language、Content-Language、Content-Type（只能是application/x-www-form-urlencoded, multipart/form-data, text/plain）
      剩下的是复杂请求。
      还会在请求中添加origin字段，返回的响应里Access-Control-allow-Origin来判断是否拦截该请求。
      附带可选的请求头 withCredentials, 响应里Access-Control-allow-withCredentials。
      Access-Control-Expose-Headers会给予客户端可以取到的请求头能力。
    - 复杂请求
      由预检请求和参数请求组成，
      预检请求格式：
      ```html
        OPTIONS / HTTP/1.1
        Origin: 当前请求源
        Host: www.xxx.com
        Access-Control-Request-Method: PUT
        Access-Control-Request-Headers: FScut-Custom-Header
      ```
      请求方法必定为option，会添加上Origin，Host，以及会附带上将要进行请求的特征，
      Access-Control-Request-Method,Access-Control-Request-Headers,
      询问是否允许。
      
      返回的响应里：
      ```
        HTTP/1.1 200 OK
        Access-Control-Allow-Origin: *
        Access-Control-Allow-Methods: GET, POST, PUT
        Access-Control-Allow-Headers: FScut-Custom-Header
        Access-Control-Allow-Credentials: true
        Access-Control-Max-Age: 86400
        Content-Type: text/html; charset=utf-8
        Content-Encoding: gzip
        Content-Length: 0
      ```
      会告知浏览器 允许请求的Origin,Methods,Headers,等
    
JSONP方式：利用script标签，获取资源，但限制在于仅仅是获取，也就是get请求。

Nginx反向代理：
1. 正向代理：client请求某服务器，但没办法直接访问（被限制之类，比如largest 视频网站），需要借助中介去访问该服务器
2. 反向代理：client请求某资源，统一的来到某个服务器下，由他转发请求给具体的服务器，在返回结果给client