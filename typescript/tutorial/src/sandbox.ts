//types
// let character = 'jake'

// console.log(character)

// const calculate = (diameter:number) => {
//     return 2*diameter*Math.PI
// }

// console.log(calculate(5))

//arrays and objects
// let names:any = ['inosuke', 'nezuko', 'kamado',3]
// names.push(4)
// names.push(false)

// console.log(names)


// let ninja = {
//     name: 'reiner',
//     age: 43
// }

// ninja.name = 'braun'
// ninja.age = 25

//not allowed
// ninja = {
//     name: 'barthold',
//     age: 46,
//     skils: ['?']
// }


//allowed
// ninja = {
//     name: 'barthold',
//     age: 46
// }

//initialize a variable with type
let character:string;
let age:number;

let ninjas:string[] = []
// ninjas.push('1') => won't work without initializing
ninjas.push('2') //will work
ninjas = ['s','i']

//union types
let mixed:(string|number)[] = []
mixed.push('e')
mixed.push(4)
// mixed.push(false)

//objects
let ninja1:object
ninja1 = {name: 'sakai'}

let ninja2: {
    name: string,
    age: number,
    skill: []
}

let shawon:number = 2

console.log(ninja1)


//function basics
let greet = () => console.log('hello')
console.log(greet())

let meet: Function
meet = () => 'meet me'
console.log(meet())


//type aliases
type stringOrNumber = string | number

let greetAgain = (a:number, b:number = 10) => console.log(a+b)

console.log(greetAgain(6,2))

//function signatures
let calc: (a: number, b:string|number) => void

calc = (a:number, b:string|number) => console.log(a,b) 

//classes ts

// class Invoice {
//     client: string = 'abc'
//     details: string = 'ass'
//     amount: number = 0
// }

//but this is inconvenient.

//we'll create a constructor
class Invoice {
    client: string;
    details: string;
    amount: number;

    //we'll create a constructor
    constructor(c:string, d:string, a:number ) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    //method
    format() {
        return `${this.client} owes ${this.amount} ${this.details}`
    }

}


//create object to instantiate
const invoice = new Invoice('jake', 'debt', 48000); 
const invoice2 = new Invoice('jake2', 'debt2', 480002); 

console.log(invoice.format(), invoice2.format())

let invoices:Invoice[] = []
