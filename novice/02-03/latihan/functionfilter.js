// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evenNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         evenNumbers.push(numbers[i]);
//     }
// }

// console.log(evenNumbers); // (6) [0, 2, 4, 6, 8, 10]

const even = n => n % 2 == 0;
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(listOfNumbers.filter(even)); // [0, 2, 4, 6, 8, 10]