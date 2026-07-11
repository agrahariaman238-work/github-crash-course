const age = 24;
const name = "John Doe";
const dob = "1999-01-01";

function sayName() {
  console.log(`My name is ${name}`);
}

function isAdult() {
  return age >= 18;
}

function getBirthYear() {
  return new Date().getFullYear() - age;
}

function getAge() {
  return age;
}

function getDOB() {
  return dob;
} 