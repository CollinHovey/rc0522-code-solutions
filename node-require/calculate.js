const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');


const firstNumber = JSON.parse(process.argv[2]);
const secondNumber = JSON.parse(process.argv[4]);
const operator = process.argv[3];

if (operator === 'plus') {
  console.log('result:', add(firstNumber, secondNumber));
} else if (operator === 'minus') {
  console.log('result:', subtract(firstNumber, secondNumber));
} else if (operator === 'over') {
  console.log('result:', divide(firstNumber, secondNumber));
} else if (operator === 'times') {
  console.log('result:', multiply(firstNumber, secondNumber));
} else {
  console.log('invalid operation');
}
