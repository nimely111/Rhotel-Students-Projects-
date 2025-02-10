// function declaration
// function scope
// global scope
let firstName = 'John';
let lastName = 'Doe'; 
// hardcoded

// this function is not reusable
// parameter ES5
// function greeting(firstName, lastName){
//     console.log(`Hello ${firstName} ${lastName}`);
// }

// function expression
const  greeting = function(firstName, lastName){
    return `Hello ${firstName} ${lastName}`;
}


//  function expression
const add = function(num1, num2){
    return num1 + num2
}
const sub = function(num1, num2){
    return num1 - num2
}

// arrow function
const hi = () => {
    console.log("Hi");
}

// add
const sum = add(30, 20)
console.log(sum);
// subtract
const diff = sub(30, 20)
console.log(diff);

const divide = function(x, y){
    return x / y;
}

const remainder = function(x, y){
    return x % y;
}
console.log(divide(10, 5));
console.log(remainder(19, 5));


// if the num is / by 2 and remainder = 0 fizz, and if num / 3 remainder = Buzz and if its divisible by both number the program must print FizzBuzz

// division,/  % (devide, remainder)

//function call
// fuction invokation
// function execute 
// console.log(greeting("Jackson", "Dorbor"));
// console.log(greeting("Victor", "Mark"));
// console.log(greeting("Mohammed", "Kromah"));
// console.log(greeting("Luke", "Kollie"));

// DOM Intro
const title = document.getElementById('title');
title.style.color = 'red';
title.style.textAlign = 'center';
title.style.backgroundColor = 'blue';
title.style.width = '75%';
title.style.margin = 'auto';

