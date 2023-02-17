let salary = 30000;
let overtime = 10;
let rate = 20;

function getWage(salary, overtime, rate) {
  return salary + (overtime * rate)
}

console.log(getWage(salary, overtime, rate))

