/**
 * Fungsi startswith digunakan untuk melakukan pencarian karakter tertentu dimulai dari akhir string
 * str.endsWith(searchString[, length])
 */

var str = 'To be, or not to be, that is the question.';
console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be'));     // false
console.log(str.endsWith('to be', 19)); // true