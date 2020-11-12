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