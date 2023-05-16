"use strict";
// const anchor = document.querySelector('a')!
//exclamation means this is gonna return a value
// console.log(anchor.href)
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(toFrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
