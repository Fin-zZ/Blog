class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return 'hei' + this.greeting
    }
}

let g = new Greeter('boy')
console.log(g.greet())

class Animal {
    name: string;
    constructor(animalName: string) {
        this.name = animalName
    }
    move(distanceMeters: number = 0) {
        console.log(`${this.name} move ${distanceMeters}`)
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(dis = 5){
        super.move(dis)
    }

}

type IdDisplay = {
    id: string,
    display: string
}


const onlyList: IdDisplayArray= [
    {
        id: 'string',
        display: 'zz'
    },
    {
        d: 's'
    }
]

function foo() : { a: number, z?: number}
    {
    if(a) {
        return {
            a: 2,
            z: 4
        }
    } else {
        return {
            a: 3,
            z: 4
        }
    }
}






