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
let m = null
let n = 42
let b
if( (n && m) || b) {
  console.log('a')
}
console.log(Math.random())
console.log(![]==[])