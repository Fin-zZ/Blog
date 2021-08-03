# 大数相加
 思路就是转换为字符串，按位相加和进位。

 ```js
 function add(a, b) {
   if(Number.MAX_SAFE_INTEGER <= a + b){
     // 进行位相加运算
     let str1 = String(a)
     let str2 = String(b)
     let len = Math.max(str1.length, str2.length)

     let num1 = str1.padStart(len, '0')
     let num2 = str2.padStart(len, '0')

     let i = len - 1
     let sum = ''
     let anotherAdd = 0
     while(i >= 0){
       // 计算末位数相加，有可能有进位
       let tmpSum = Number(num1[i]) + Number(num2[i]) + anotherAdd
       sum = tmpSum%10 + sum
       anotherAdd = Math.floor(tmpSum / 10)
       i--
     }
     if(anotherAdd === 1) {
       sum = 1 + sum
     }

     console.log(sum)
     return sum
   }
 }

 let a = Math.pow(2, 53) - 1

 // add(a, a)
 ```