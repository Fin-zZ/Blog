

function ListNode(value: number) {
  this.value = value
  this.next = null
}

function Link() {
  this.head = null
  this.tail = null
}

Link.prototype.add = function (value: number) {
  let node = new ListNode(value)
  if(this.head) {
    this.tail.next = node
    this.tail = this.tail.next
  } else {
    this.head = node
    this.tail = node
  }
}

let link1 = new Link()

let myApp = {
  color: 'yellow',
  paint: function (node) {
    node.style.color = this.color
  }
}

let findNode = function (callback, callback_obj){
  // series of operation
  let node = null
  // 传递字符串的方式 'paint'
  if(typeof callback === 'string') {
    let fun = callback_obj[callback]
    fun.call(callback_obj, node)
  }

  // 传函数
  if(typeof callback === 'function') {
    callback.call(callback_obj, node)
  }
}

let scareMe = function () {
  console.log('1')
  scareMe = function () {
    console.log('2')
  }
}

scareMe['test'] = 'z'

let prank = scareMe

let bar = {
  foo: scareMe
}

prank()
prank()
console.log(prank['test'])

bar.foo()
bar.foo()
console.log(bar.foo['test'])

scareMe()
scareMe()
console.log(scareMe['test'])

