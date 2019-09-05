/**
 * 
 */

var myArray = /d(b+)d/g.exec('cdbbdbsbz'); 
console.log(myArray);

var myRe1 = new RegExp('d(b+)d', 'g');
var myArray1 = myRe1.exec('cdbbdbsbz');
console.log(myArray1);

var myRe2 = /d(b+)d/g;
var myArray2 = myRe2.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + myRe2.lastIndex);

var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);

var re = /\w+\s/g;
var str = 'fee fi fo fum';
var myArray = str.match(re);
console.log(myArray);


// The name string contains multiple spaces and tabs,
// and may have multiple spaces between first and last names.
var names = 'Orange Carrot ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ';

var output = ['---------- Original String\n', names + '\n'];

// Prepare two regular expression patterns and array storage.
// Split the string into array elements.

// pattern: possible white space then semicolon then possible white space
var pattern = /\s*;\s*/;

// Break the string into pieces separated by the pattern above and
// store the pieces in an array called nameList
var nameList = names.split(pattern);

// new pattern: one or more characters then spaces then characters.
// Use parentheses to "memorize" portions of the pattern.
// The memorized portions are referred to later.
pattern = /(\w+)\s+(\w+)/;

// Below is the new array for holding names being processed.
var bySurnameList = [];

// Display the name array and populate the new array
// with comma-separated names, last first.
//
// The replace method removes anything matching the pattern
// and replaces it with the memorized string—the second memorized portion
// followed by a comma, a space and the first memorized portion.
//
// The variables $1 and $2 refer to the portions
// memorized while matching the pattern.

output.push('---------- After Split by Regular Expression');

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, '$2, $1');
}

// Display the new array.
output.push('---------- Names Reversed');
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

// Sort by last name, then display the sorted array.
bySurnameList.sort();
output.push('---------- Sorted');
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

output.push('---------- End');

console.log(output.join('\n'));

