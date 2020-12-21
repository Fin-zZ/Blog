var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hei' + this.greeting;
    };
    return Greeter;
}());
var g = new Greeter('boy');
console.log(g.greet());

function foo(){
    console.log(this)
}

foo()