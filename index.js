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

function isBirthdayToday() {
  const today = new Date();
  const birthDate = new Date(dob);
  return today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate();
}

function isBirthdayInLeapYear() {
  const birthDate = new Date(dob);
  const birthYear = birthDate.getFullYear();
  return (birthYear % 4 === 0 && birthYear % 100 !== 0) || (birthYear % 400 === 0);
}

function getAgeInDays() {
  const today = new Date();
  const birthDate = new Date(dob);
  const ageInMilliseconds = today - birthDate;
  return Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
}