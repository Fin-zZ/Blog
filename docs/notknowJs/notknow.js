function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function() {
  return this.name;
};

function Bar(name,label) {
  Foo.call( this, name );
  this.label = label;
}

Bar.prototype = Object.create(Foo.prototype)
console.log(Bar.prototype.constructor)


let a = 145.78
console.log(Math.abs(0.2 + 0.1 - 0.3) < Number.EPSILON)