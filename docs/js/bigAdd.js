function add(a, b) {
  if(Number.MAX_SAFE_INTEGER <= a + b){
    // 进行位相加运算
    let str1 = String(a)
    let str2 = String(b)
    let len = Math.max(str1.length, str2.length)
    //
    let num1 = str1.padStart(len, '0')
    let num2 = str2.padStart(len, '0')

    let i = len - 1
    let sum = ''
    let anotherAdd = 0
    while(i >= 0){
      // 计算末位数相加，有可能有进位
      let tmpSum = Number(num1[i]) + Number(num2[i]) + anotherAdd
      // sum.unshift(tmpSum%10)
      sum = tmpSum%10 + sum
      // sum = Array.prototype.unshift.call(sum, tmpSum%10)
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

// let a = Math.pow(2, 53) - 1

// add(a, a)

function maxIntSum(...args) {
  let argumentsArr = [...args]
  let sum = argumentsArr.reduce((pre,cur) => {
    return pre + cur
  })

  if(sum >= Number.MAX_SAFE_INTEGER) {
    let maxLen = String(Math.max(...argumentsArr)).length
    let newArr = []
    for (let i of argumentsArr) {
      newArr.push(String(i).padStart(maxLen, '0'))
    }

    let idx = maxLen - 1
    let sum = ''
    // 进位
    let anotherAdd = 0

    while (idx >= 0){
      let tmpSum = newArr.reduce((pre, cur) => {
        return Number(pre) + Number(cur[idx])
      }, anotherAdd)

      sum = (tmpSum % 10) + sum
      anotherAdd = Math.floor(tmpSum / 10)
      idx--
    }

    if(anotherAdd > 0) {
      sum = anotherAdd + sum
    }
    console.log(sum)
    return sum
  } else {
    return sum
  }
}

function myNew(Obj, ...args) {
  let obj = Object.create(null)
  obj.__proto__ = Obj.prototype
  let res = Obj.apply(obj, args)

  return typeof res === 'object' ? res : obj
}

Function.prototype.myCall = function (context, ...args) {
  let ctx = context || window
  const fun = Symbol('callFun')
  ctx[fun] = this
  return ctx[fun](...args)
}

Function.prototype.myApply = function (context, arg) {
  let ctx = context || window
  const fun = Symbol('fun')
  ctx[fun] = this
  return ctx[fun](...arg)
}

Function.prototype.myBind = function (context, ...args1) {
  let ctx = context || window
  let _this = this
  return function (...args2) {
    const fun = Symbol('bindFun')
    ctx[fun] = _this
    let args = [...args1, ...args2]
    return ctx[fun](...args)
  }
}

function Factory() {
  this.c = 'z'
}
let ins = new Factory()

// console.log(ins.constructor === Factory)
// console.log(ins.constructor == Object)
let m = [1,2]
console.log(Object.prototype.toString.call(m).slice(8, -1))
// let arr = [1,2]
// console.log(arr instanceof Array)
// console.log(Array instanceof Object)

// let z = Symbol('test')
// console.log(z instanceof Symbol)
const a = {
  b: 2,
  foo: function () { console.log(b) }
}

function b(foo) {
  // 输出什么？
  foo()
}

// b(a.foo)
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
// }

let id = 0
function printOut() {
  if(id < 5) {
    setTimeout(()=>{
      console.log(id)
      id++
      printOut()
    },1000)
  }
}
// printOut()

function deepClone(val) {
  if(typeof val === 'object') {
    // array or object
    let res
    if(Array.isArray(val)) {
      res = []
    } else {
      res = {}
    }

    for(let key in val) {

      // 避免互相引用
      let someValue = val[key]
      if(someValue === val) {
        continue
      }

      if(val.hasOwnProperty(key)) {
        res[key] = deepClone(val[key])
      }
    }
    return res
  }  else {
    return val
  }
}

let ob = {
  'a': 'zz',
  'b': 'zdv',
  ob2: {
    's': 'xf',
    'arr': ['z','s']
  }
}
// let ob =
let obClone = JSON.parse(JSON.stringify(ob))
// let obClone = deepClone(ob)
//
obClone['ob2']['mm'] = ['1']
// obClone.push(4)
// console.log(obClone)
// console.log(ob)

let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject('err')
  },1000)
})

p1
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
console.log(Number.EPSILON)

function debounce(fun, delay) {
  let timer = null

  return function (...args) {
    let that = this
    let arg = [...args]
    if(timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() =>{
      fun.apply(that, arg)
    }, delay)
  }
}

function delayImmediately(fn, delay) {
  let timer
  return function (...args) {
    let that = this
    if(timer) {
      clearTimeout(timer)
    }

    let once = !timer
    timer = setTimeout(() => {
      fn.call(that, ...args)
      once = 1
    }, delay)

    if(!once) {
      clearTimeout(timer)
      fn.call(that, ...args)
    }

  }
}

function throttle(fn, delay) {
  let oldTime = 0

  return function (...args) {
    let nowTime = +Date()
    let that = this
    if(nowTime - oldTime > delay * 1000) {
      fn.call(that, ...args)
      oldTime = nowTime
    }
  }
}
function throttle2 (fn, delay) {
  let timer = null

  return function (...arg) {
    if(!timer) {

    }
  }
}

// instanceof
function isPrimitive (val) {
  return (
      typeof val === 'undefined' ||
      typeof val === 'string' ||
      typeof val === 'number' ||
      typeof val === 'boolean' ||
      typeof val === 'symbol'
  )


}
function cusInstanceof(child, father) {
  if(isPrimitive(child) || child === null) {
    throw new Error('bal')
  }

  let childInstance = child.__proto__
  while (true) {
    if(childInstance === father.prototype){
      return true
    } else if(childInstance === null) {
      return false
    }
    childInstance = childInstance.__proto__
  }
}

class publicEventCenter {
  constructor() {
    this.events = {}
  }

  subscribe(event, callback) {
    let type = this.events[event]
    if(type && type.length) {
      this.events[event].push(callback)
    } else {
      this.events[event] = [callback]
    }
  }

  publish(event, ...args) {
    let type = this.events[event]
    if(type && type.length) {
      type.forEach(callback => {
        callback.call(this, ...args)
      })
    }
  }

  deSubscribe(event, callback) {
    let types = this.events[event]
    if(types && types.length > 0){
      this.events[event] = types.filter(cb => {
        return cb !== callback
      })
    }
  }
}

function smallAdd(...args) {
  let arr = [...args]
  let newArr = arr.map(item => {
    if(String(item).indexOf('.') > -1){
      return String(item).split('.')[1]
    } else{
      return 0
    }
  })
  // 获取的所有
}

function smallAdd3(num1, num2) {
  let len1 = String(num1).indexOf('.') > -1 ? String(num1).split('.')[1].length : 0
  let len2 = String(num2).indexOf('.') > -1 ? String(num2).split('.')[1].length : 0

  let expandTimes = Math.pow(10, Math.max(len1, len2))

  console.log((num1 * expandTimes + num2 * expandTimes) / expandTimes)
}

smallAdd3(1.123, 33.24)