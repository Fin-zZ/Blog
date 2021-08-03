// function Node(value){
//   this.value = value
//   this.next = null
// }
//
// class linkList {
//   constructor() {
//     this.head = null
//   }
//
//   add(value) {
//     let node = new Node(value)
//     let curNode = this.head
//     while(curNode !== null) {
//
//     }
//   }
// }

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let strArr = s.split('')
  let reverseTmp = []
  let tmp = []
  let res = []
  while(strArr.length) {
    let i = 0
    for(; i < k && strArr.length > 0; i++){
      reverseTmp.push(strArr.shift())
    }

    for(; i < 2 * k && strArr.length > 0; i++) {
      tmp.push(strArr.shift())
    }

    if(i <= k) {
      while (i > 0) {
        res.push(reverseTmp.pop())
        i--
      }
    } else {
      while(i >= k && reverseTmp.length > 0) {
        res.push(reverseTmp.pop())
      }

      i -= k
      while(i > 0 && tmp.length > 0) {
        i--
        res.push(tmp.shift())
      }
    }
  }
  return res.join('')
};

console.log(reverseStr('abcd', 3))