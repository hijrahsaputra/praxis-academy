/**
 * Digunakan untuk digunakan untuk mencari hasil kesamaan string dengan menggunakan regular expression
 * dengan menentukan group lokasinya
 * str.matchAll(regexp)
 */
// let regexp = /t(e)(st(\d?))/g;
// let str = 'test1test2';

// let array = [...str.matchAll(regexp)];

// console.log(array[0]);
// // expected output: Array ["test1", "e", "st1", "1"]

// console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]

const regexp = RegExp('foo[a-z]*','g');
const str = 'table football, foosball';
let match;
while ((match = regexp.exec(str)) !== null) {
  console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`);
}
console.log(str.match(regexp));
