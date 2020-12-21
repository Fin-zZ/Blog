class Student{
    fullName: string
    constructor(firstName, middleName, lastName) {
        this.fullName = firstName + middleName + lastName
    }
}

interface Person{
    firstName: string,
    lastName: string
}

// function greeter(person: Person) {
//     return 'hello, ' + person.lastName + person.firstName
// }

let user = {
    firstName: 'zz',
    lastName: 'zc'
}

let u = new Student(user.firstName,user.lastName,user.lastName)

// ts接口概念
// function printLabel(label: {labelName: string}) {
//     console.log(label.labelName)
// }
//
// let obj = {
//     size: 10,
//     labelName: 'str'
// }

// printLabel(obj)

// now use interface
interface LabeledValue {
    labelName: string;
}

function printLabel (label: LabeledValue) {
    console.log(label.labelName)
}

// alternative interface
interface squareColor{
    readonly color?: string,
    size?: number
}

function createSquare(param: squareColor):{createColor?: string, size: number} {
    let createColor, size
    if(param.color) {
        createColor = param.color
        // param.color = 'red'
    }
    if(param.size) {
        size = param.size
    }
    return {size}
}

let a: number[] = [1,2,3,4]
let m: ReadonlyArray<number> = a

a[3] = 8
//m[1] = 3

interface config{
    color: string;
    width: number;
    [propName: string]: any
}


