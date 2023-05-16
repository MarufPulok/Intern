// const anchor = document.querySelector('a')!
//exclamation means this is gonna return a value

// console.log(anchor.href)


const form = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit',(e:Event) => {
    e.preventDefault()
    console.log(type.value)
    console.log(toFrom.value)
    console.log(details.value)
    console.log(amount.valueAsNumber)
})  




