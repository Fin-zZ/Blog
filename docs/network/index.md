# https http
http:超文本传输协议
1. http特点
    - 灵活，可以传输任意类型对象，通过content-type定义
    - 无连接 每次连接只能处理一个请求，服务器处理完这次请求后，
      并受到客户端回应后，就断开连接，不利于客户端和服务端会话的保持，
      无法记录之前的状态，需要借助cookie session 记录用户
    - 无状态，指的是对事物处理没有记忆，后续如果要处理之前的信息，
      则需要重传。
      
2. URI: Uniform Resource Identifier 统一资源*标志*符
   URL: Uniform Resource Location 统一资源*定位*符
   URI: 具体描述某个资源的，可以通过URI知道该资源是什么，
   URL：用来定位具体资源的位置，以及访问该资源的方式 
   
3. http报文的组成
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

响应报文的结构
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
 - get请求的参数都在url上，有长度上限制，该限制有各个浏览器决定。，
   post请求的参数可以在url上，但大多放到request body里，通过content-type修改
 - post相对来说安全些
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
http是明文传播，涉及到密码、个人信息等就不太安全。
其次存在信息被篡改、被仿冒的可能。

https 一般认为是http + SSL/TLS协议
