//bind
// let person = {
//     name: 'Saroar Hossain Shahan'
//    };

//    let getInfo = function (id) {
//    return `Welcome ${this.name}, Your roll number is ${id}.`;
//    };

//    let boundInfo = getInfo.bind(person);

//    console.log(boundInfo(34));

//array demo
// let arr = [1,2,3]
// console.log(arr[0])
// console.log(arr.at(2))

//cookie
// document.cookie =
//   "name=jalal; expires=" +
//   new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toUTCString();

//synchronous js

// const second = () => {
//     console.log('Hello there!');
//     }
//     const first = () => {
//     console.log('Hi there!');
//     second();
//     console.log('The End');
//     }
//     first();

//asynchronous js
// console.log("hello")
// setTimeout(() => {
//     console.log("are you there?")
// },0)

// console.log("hi")

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//     setTimeout(() => {
//     resolve('resolved');
//     }, 2000);
//     });
//     }
//     async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     console.log('first')
//     // expected output: 'resolved'
//     }

//     asyncCall();

// async function foo() {
//   const result1 = await new Promise((resolve) =>
//     setTimeout(() => resolve("1"))
//   );
//   const result2 = await new Promise((resolve) =>
//     setTimeout(() => resolve("2"))
//   );
// }
// foo();

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 10);
// myDisplayer(result);

// const function1 = () => {
//   setTimeout(function () {
//     console.log("1st Function");
//   }, 3000);
// };
// const function2 = () => {
//   console.log("2nd Function");
// };
// function1();
// function2();

// function doSomethingAsync(callback) {
//     setTimeout(function() {
//       console.log("Async task is done");
//       callback();
//     }, 1000);
//   }

//   function doSomething() {
//     console.log("Doing something");
//   }

//   doSomethingAsync(doSomething);

//promise
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.random();
//     if (random < 0.5) {
//       resolve(random);
//     } else {
//       reject(new Error("Random number too big!"));
//     }
//   }, 1000);
// });

// myPromise
//   .then((result) => console.log(`Success! Result is ${result}`))
//   .catch((error) => console.error(`Error: ${error.message}`));

//asynch await

// async function myFunction() {
//   try {
//     const result = await myPromiseFunction();
//     console.log(`Async operation succeeded with result: ${result}`);
//   } catch (error) {
//     console.error(`Async operation failed with error: ${error}`);
//   }
// }

// function myPromiseFunction() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello world");
//     }, 1000);
//   });
// }

// myFunction();

// function main(number) {
//   console.log("Lets count from 0 to " + number);
//   for (let i = 0; i <= number; i++) {
//     setTimeout(function () {
//       console.log(i + "\n");
//     }, 1000);
//   }
//   console.log("Done!");
// }

// main(5);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// num.splice(2, 2, "a",'b','c');
// let text2 =  num.toString();
// console.log(text2);

// let name = 'maruf'
// let age = 24

// console.log(`name is ${name} age is ${age} years old`)

let ob = {
  name : 'mm',
  age: 23
}

let { name, age } = ob
console.log(name,age) 