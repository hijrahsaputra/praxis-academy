/**
 * IndexOf mencari posisi string dimulai dari karakter paling depan atau index 0
 * LastIndexOf mencari posisi string dimulai dari karakter paling belakang
 * Kedua fungsi tersebut sama-sama case-sensitive
 * str.lastIndexOf(searchValue[, fromIndex])
 */
var anyString = 'Brave new world';
console.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));
// logs 8
console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w'));
// logs 10
console.log('The index of "new" from the beginning is ' + anyString.indexOf('new'));
// logs 6
console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new'));
// logs 6