# 异步

promise对于以上5个问题的解决：
1. 调用过早
    不存在，因为传给promise的必定执行异步操作，不会被同步检测到。
2. 调用过晚
    Promise创建的对象在调用resolve 或者 reject时，必然会触发
    promise.then(..)里面的回调。一定会在下一个异步事件点⬆上触发。
3. 回调未调用
    可以借助于添加一个超时promise进行竞态
    ```js
    function timeoutPromise(delay) {
     return new Promise(resolve, reject) {
       setTimeout(()=>{
         reject()
       }, delay)
     }     
   }
   Promise.race([
     promiseA,
     timeoutPromise(3000)
   ])
   .then()
   .catch()
    ```
   
4. 调用次数过少或者过多
    正确的就是应该 1 次。
    promise响应函数只会执行一次，除非你也触发了多次
    
    