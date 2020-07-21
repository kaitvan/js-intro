// ***** FUNCTIONS ***** //

// const nuggetizer = (animal) => {
//     return `processed ${animal}`;
// }

// console.log(nuggetizer('pig'));
// console.log(nuggetizer('fish'));
// console.log(nuggetizer('chicken'));
// console.log(nuggetizer('student'));

// Write a function that takes any number and returns that number plus 42

// const sum = (number) => {
//     return number + 42
// }

// console.log(sum(2))
// console.log(sum(4))
// console.log(sum(6))

// Write a function that takes in the year you were born and tells how old you will be in the year 2099

const futureAge = (birthYear) => {
    return 2099 - birthYear
}

console.log(futureAge(1990))
console.log(futureAge(2000))

const futureAgeStatement = (birthYear) => `You will be ${2099 - birthYear} years old in the year 2099.`

console.log(futureAgeStatement(1990))

