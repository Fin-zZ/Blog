function ListNode(value) {
    this.value = value;
    this.next = null;
}

function Link() {
    this.head = null;
    this.tail = null;
}

Link.prototype.add = function (value) {
    let node = new ListNode(value);
    if (this.head) {
        this.tail.next = node;
        this.tail = this.tail.next;
    }
    else {
        this.head = node;
        this.tail = node;
    }

    return this.head
};
Link.prototype.show = function () {
  let arr = []
  let curNode = this.head
  while (curNode) {
    arr.push(curNode.value)
    curNode = curNode.next
  }
  let str = arr.join('->')
  return str
}

let testLink = new Link();
testLink.add(1)
testLink.add(2)
testLink.add(3)
testLink.add(4)
// testLink.add(5)

// console.log(testLink.show())
console.log(testLink)

/*
* @head head node
* @k reverse num
* */
function reverseK(head, k) {
  // 虚拟头结点
  let dumbNode = new ListNode(-1)
  let curNode = head

  let lastNode = dumbNode
  let leftNode = dumbNode
  dumbNode.next = head


  // 每k个一次选择
  while (lastNode){
    // last往后找k个
    for (let i = 0; i < k; i++){
      lastNode = lastNode.next
    }

    if(lastNode) {
      let rightNode = lastNode.next

      lastNode.next = null
      leftNode.next = null

      curNode = reverseList(curNode)

      leftNode.next = curNode
      // 将头结点也向后走n位
      for (let i = 0; i < k-1; i++){
        curNode = curNode.next
      }
      leftNode = curNode
      lastNode = curNode

      curNode.next = rightNode
      curNode = curNode.next

      for (let i = 0; i < k; i++){
        if(lastNode) {
          lastNode = lastNode.next
        } else{
          break
        }
      }
    } else {
      // 结束循环了
    }


  }

  return dumbNode.next
}

function reverseList(head) {
  let dumbNode = new ListNode(-1)
  dumbNode.next = head
  let cur = head

  while (cur && cur.next){
    let tmp = cur.next.next

    cur.next.next = dumbNode.next
    dumbNode.next = cur.next
    cur.next = tmp

  }

  return dumbNode.next
}

let newHead = reverseK(testLink.head, 2)

console.log(newHead)










