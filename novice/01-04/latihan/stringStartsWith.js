/**
 * Fungsi startswith digunakan untuk melakukan pencarian karakter tertentu dimulai dari awal string
 * str.startsWith(searchString[, position])
 */

var str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be'));         // true
console.log(str.startsWith('not to be'));     // false
console.log(str.startsWith('not to be', 10)); // true