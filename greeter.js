var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.fullName = firstName + middleName + lastName;
    }
    return Student;
}());
// function greeter(person: Person) {
//     return 'hello, ' + person.lastName + person.firstName
// }
var user = {
    firstName: 'zz',
    lastName: 'zc'
};
var u = new Student(user.firstName, user.lastName, user.lastName);
// ts接口概念
function printLabel(label) {
    console.log(label.labelName);
}
var obj = {
    size: 10,
    labelName: 'str'
};
printLabel(obj);


