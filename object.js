//object constructor
// const myCar = new Object()
// class myCar

// object literal
// functional, oop object oriented programming, 

//object is a collection of key/value pairs.
// the key/value pair can be referred to as property and value
const person = {
    //key:property
    //value:value
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'coding', 'sports', 'movies'],
    address:{
        street: '14 Sinkor',
        city: 'Monrovia',
        states: 'Montserrado',
        sibling: {
            brother: 'Peter',
            sister: 'Esther'
        }
    }
}

// console.log(person);

//es5  dot notation / bracket notation
// console.log(`Hello my name is ${person.firstName} ${person.lastName}`);
// console.log(person.firstName, person.lastName);
console.log(person.hobbies);
console.log(person.hobbies[1]);
// console.log(person.address.city);
// console.log(person.address.sibling.sister);
// modern syntax es6 destructuring


const { address: { sibling: {sister} }} = person;
console.log(sister);

//Assignment list management
// create an array with a list of names 
// using prompt and alert
// check if a certain name is included within the array using if and else statement. if the name is included in the array, your response must be welcome plus the name that was serach, and if the name is not included your response must be sorry! name not found

function test(first_name, last_name){
    return "hello" + first_name
}

console.log(test());
