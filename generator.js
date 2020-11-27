function log(arg) {
  console.log(arg)
}

var x = 1
function *foo() {
  x++
  yield;
  x++
  log(x)
}

var something = function () {
  var nextVal
  return {
    [Symbol.iterator]: function () {
      return this
    },
    next: function () {
      if(!nextVal) {
        nextVal = 1
      } else {
        nextVal = (3 * nextVal) + 6
      }
      return {done: false, value: nextVal}
    }
  }
}
// let a = something()
// for (const item of a) {
//   console.log(item)
//
//   if(item > 100) {
//     break
//   }
// }
// log(a.next().value)
// log(a.next())

function *something() {
  try {
    var nextVal
    while (true) {
      if (!nextVal) {
        nextVal = 1
      } else if(nextVal > 300) {
        break
      } else {
        nextVal = (3 * nextVal) + 6
      }
      // 可以向外输出nextVal的值
      yield nextVal;
    }
  }
  finally {
    console.log('cleaning')
  }
}

let it = something()
for (let item of it) {
  console.log(item)

  if(item > 100) {
    // console.log(it.return('s').value)
    break;
  }
}
// log(it.next())
// log(it.next())


// log(it.next().value)
// log(it.next(7).value)
// log(it.next().value)

function req(a, b) {
  ajax(`www${a}.cn.${b}`, function callback(err, value) {
    if(err) {
      it.throw(err)
    } else {
      it.next(value)
    }
  })
}

function *main() {
  try {
    let text = yield req(a, b)
    console.log(text)
  } 
  catch(err) {
    console.log(err)
  }
}

function *main(){

  try {
    let res = yield req(11, 'adf')
    // 解析结果
    console.log(res)
  } catch(err) {
    console.log(err)
  }
}

let it = main()

it.next()

cb() {

}

function req(arg) {
  ajax(`arg`, cb)
  // ..耗时的事件
  return new Promise((resovle, reject) => {
    cb(err, value) {

    }
  })
}

function run() {

}

// 生成器 加 Promise

function req(arg) {
  return request('www.aaa.com/' + arg)
}

function *run() {
  try{
    let result = yield req('/api')
    console.log(result)
  } catch(err) {
    console.log(err)
  }
}

let it = run()

// 返回一个promise
let promiseTest = it.next().value

promiseTest
  .then(res => {
    it.next(res)
  })
  .catch(err => {
    it.throw(err)
  })


// 异步运行传入的生成器
function asyncRun(generator) {
  // 首次需要传给generator的参数，跟在后面
  let args = [].slice.call(arguments, 1), it
  it = generator.apply(this, args)
  // 这样就获得了一个迭代器 it
  return  Promise.resolve()
            .then(function handNext(value) {
              // 这里的返回一个promise就是nextP
              let nextP = it.next(value)
              // 针对next出来的value进行判断是否迭代完成
              return (function handResult(nextP) {
                if(nextP.done) {
                  return nextP.value
                } else {
                  // 将这个promise继续
                  return Promise.resolve(nextP.value)
                    .then(
                      handNext, 
                      function handErr(err) {
                        return Promise.resolve(
                          it.throw(err)
                        )
                        .then(handResult)
                      }
                    )
                }

              // 这个promise得丢进 立即执行函数 里
              })(nextP)
            })
}