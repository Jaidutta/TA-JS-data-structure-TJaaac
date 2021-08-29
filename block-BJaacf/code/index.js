// 1. Create an array named numbers and store 5 number values in it
const numbers = [1, 2, 3, 4, 5]

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0
for(let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
console.log(sum/numbers.length)

// 4. Find the highest number in the array and print it to the console using console.log()
console.log(Math.max(...numbers))
// or 
let max = -Infinity
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] > max) {
    max = numbers[i]
  }
}
console.log(max);

// 5. Find the lowest number in the array and print it to the console using console.log()
console.log(Math.min(...numbers));

//or
let min = Infinity
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] < min) {
    min = numbers[i]
  }
}
console.log(min)

// 6. Find the even numbers in the array and print them to the console using console.log()
const even = []
for(let number of numbers) {
  if(number % 2 === 0) {
    even.push(number)
  }
}
console.log(even);

// 7. Find the odd numbers in the array and print them to the console using console.log()
const odd = []
for(number of numbers) {
  if(number % 2 !== 0) {
    odd.push(number)
  }
}
console.log(odd)

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
const numbersDivisibleBy5 = []
for(let number of numbers) {
  if(number % 5 === 0) {
    numbersDivisibleBy5.push(number)
  }
}
// 9. Log all the element of the array one by one
for(let number of numbers) {
  console.log(number);
}
// 10. Find all the number in the array that is divisible by 3
const numbersDivisibleBy3 = []
for(let number of numbers) {
  if(number % 3 === 0) {
    numbersDivisibleBy3.push(number)
  }
}
console.log(numbersDivisibleBy3);