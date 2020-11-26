// function Foo(name) {
//   this.name = name;
// }
// Foo.prototype.myName = function() {
//   return this.name;
// };

// function Bar(name,label) {
//   Foo.call( this, name );
//   this.label = label;
// }

// Bar.prototype = Object.create(Foo.prototype)
// console.log(Bar.prototype.constructor)


// let a = 145.78
// console.log(Math.abs(0.2 + 0.1 - 0.3) < Number.EPSILON)

// let info1 = {
//   name: 'a',
//   age: 24,
//   [Symbol('describe')] : 'zzz'
// }
// console.log(Object.getOwnPropertySymbols(info1))


// let smy = Symbol()
// var info = {
//   smy: 'x',
//   [smy]: 'y'
// };
// console.log(Date.now())
// Date.now()
// let m = null
// let n = 42
// let b
// if( (n && m) || b) {
//   console.log('a')
// }
// console.log(Math.random())
// console.log(![]==[])

// function myReq() {
//   return new Promise((resolve, reject) => {
//     if() {
//       resolve()
//     } else {
//       reject()
//     }
//   })
// }

// var p1 = new Promise((resolve, reject) => {
//   resolve('yeah')
// })

// var p2 = Promise.resolve('yeah')

// p1.then(res => {
//   console.log(res)
// })

// p2.then(res => {
//   console.log(res)
// })

var fulfilled = {
  then: function(resolve, reject) {
    resolve('yyyy')
  }
}

var rejected = {
  then: function(resolve, reject) {
    reject('a')
  }
}
console.log(Math.random())
console.log(![]==[])

function myReq() {
  return new Promise((resolve, reject) => {
    if(a) {
      resolve()
    } else {
      reject()
    }
  })
}


if(!Promise.wrap) {
  Promise.wrap = function (anyFun) {
    return function () {
      let arg = Array.prototype.slice.call(arguments)
      return new Promise((resolve, reject) => {
        // 将原先的参数还给anyFun，并添加一个fun用于监听成功失败
        anyFun.apply(null, arg.concat(function (err, value) {
          if(err) {
            reject()
          } else {
            resolve()
          }
        }))
      })
    }

  }
}






