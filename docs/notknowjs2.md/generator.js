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