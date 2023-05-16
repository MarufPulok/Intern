"use strict";
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
let character;
let age;
let ninjas = [];
// ninjas.push('1') => won't work without initializing
ninjas.push('2'); //will work
ninjas = ['s', 'i'];
//union types
let mixed = [];
mixed.push('e');
mixed.push(4);
// mixed.push(false)
//objects
let ninja1;
ninja1 = { name: 'sakai' };
let ninja2;
let shawon = 2;
console.log(ninja1);
//function basics
let greet = () => console.log('hello');
console.log(greet());
let meet;
meet = () => 'meet me';
console.log(meet());
let greetAgain = (a, b = 10) => console.log(a + b);
console.log(greetAgain(6, 2));
//function signatures
let calc;
calc = (a, b) => console.log(a, b);
