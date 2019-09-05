/**
 * fungsi match) digunakan untuk mencari hasil kesamaan string dengan menggunakan regular expression
 * str.match(regexp)
 * regex = /[A-Z]/g --> mencari huruf kapital /g --> flags - global search
 */

var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);

console.log(found);


var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
