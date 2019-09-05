/*
 * Penggunaan IndexOf dipengaruhi dengan case sensitive
 */
const myString    = 'brie, pepper jack, cheddar';
const myCapString = 'Brie, Pepper Jack, Cheddar';
console.log('myString.indexOf("cheddar") is ' + myString.indexOf('cheddar'));
console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf('cheddar'));