const age = 24;
const name = "John Doe";
const dob = "1999-01-01";

function sayName() {
  console.log(`My name is ${name}`);
}

function isAdult() {
  return age >= 18;
}

function getDOB() {
  return dob;
} 

function greet() {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}