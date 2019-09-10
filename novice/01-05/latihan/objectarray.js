/**
 * JavaScript provides a data type specifically for storing sequences of values. 
 * It is called an array and is written as a list of values between square brackets, separated by commas.
 * The first index of an array is zero, not one. So the first element is retrieved with listOfNumbers[0]
 * The delete operator cuts off a tentacle from such an octopus.
 * There’s an Object.assign function that copies all properties from one object into another.
 */

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3


let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
console.log(day1.events[1]);


let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);