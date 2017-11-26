// sourced by index.html
// write JavaScript in this file and open index.html in your browser


// logging to the console
console.log('hello world')


// alerting a user
alert('hello world')


// ask for user input
const name = prompt('What is your name?')
console.log('My name is ' + name + '!')


// cast string to a number (integer)
const age = parseInt(prompt('What is your name?'))
alert('I am ' + age + ' years old!')


// template strings
console.log(`My name is ${name}!`)


// if blocks, conditionals
const x = 10
if (x === 10) {
  console.log('True!')
}

const number = 10
if (number > 5) {
  console.log('Number greater than 5!')
} else {
  console.log('Number lower than 5!')


// for loops, arrays
for (let i = 0; i < 10; i++) {
  console.log('Hello World')
}

const myArray = ['facebook', 'google', 'amazon']

console.log(myArray[0])
myArray.push('twitter')
myArray.length
myArray.pop()
myArray[0] = 'apple'

for (const name of myArray) {
  console.log(name)
}

// summing values in an array
const scores = [10, 154, 133, 13, 4, 15]
let totalScore = 0

for (const score of scores) {
  totalScore = totalScore + score
}
console.log(`Total score: ${totalScore}`)


// functions
function saySomething() {
console.log('Something')
}
saySomething()


function sayMyName(name) {
  console.log(`My name is ${name}`)
}
sayMyName('Kyle')


function square(number) {
  return number * number
}
console.log(square(7))

