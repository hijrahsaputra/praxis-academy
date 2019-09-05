/**
 * Untuk mengganti string tertentu dengan string yang baru berdasarkan pola regular expression
 * var newStr = str.replace(regexp|substr, newSubstr|function)
 * Specifying a string as a parameter
 * Pattern	Inserts
    $$	Inserts a "$".
    $&	Inserts the matched substring.
    $`	Inserts the portion of the string that precedes the matched substring.
    $'	Inserts the portion of the string that follows the matched substring.
    $n	Where n is a positive integer less than 100, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object. Note that this is 1-indexed.
 * 
 */
var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

var regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

var re = /apples/gi;
var str2 = 'Apples are round, and apples are juicy.';
var newstr2 = str2.replace(re, 'oranges');
console.log(newstr2);  // oranges are round, and oranges are juicy.

var rg = /(\w+)\s(\w+)/;
var str3 = 'John Smith';
var newstr3 = str3.replace(rg, '$2, $1');
console.log(newstr3);  // Smith, John


function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
        return (offset > 0 ? '-' : '') + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
console.log(styleHyphenFormat('borderTop'));

function f2c(x) {
    function convert(str, p1, offset, s) {
        return ((p1 - 32) * 5 / 9) + 'C';
    }
    var s = String(x);
    var test = /(-?\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
}
console.log(f2c('30 F'));
