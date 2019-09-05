/**
 * Mencari bentuk string dari nilai code tertentu
 * String.fromCodePoint(num1[, ...[, numN]])
 */

var icons = 'a☃★♲';
var iconlength = icons.length;
for (let index = 0; index < iconlength; index++) {
    console.log(icons.codePointAt(index));
}