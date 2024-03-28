// Arrays = variables that holds multiple values at the same time 
// arrays are zero base index
//it is also an object type along with object literal

const myname = prompt('what is your name? ')
const answer = alert(`You are welcome : ${myname} `)
// array constructor
const numbers = new Array(1, 2, 3 ,4 ,5);
// console.log(numbers);

//Array Literal
// const fruits = ['mango','apple', 'oranges', 'pear', 10, true, undefined];
const fruits = ['mango','apple', 'oranges', 'pear'];
    //   fruits[4] = 'pineapple';
    //   fruits[5] = 'banana';

fruits.push('pineapple')
fruits.push('banana')
fruits.unshift('sugarcain')

console.log(fruits);